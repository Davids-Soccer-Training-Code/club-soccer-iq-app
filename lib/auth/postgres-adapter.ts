import type {
  Adapter,
  AdapterAccount,
  AdapterSession,
  AdapterUser,
  VerificationToken,
} from "next-auth/adapters";

import { query } from "@/lib/db";

type UserRow = {
  id: string;
  name: string | null;
  email: string;
  email_verified: Date | null;
  image: string | null;
};

type SessionRow = {
  session_token: string;
  user_id: string;
  expires: Date;
};

type AccountRow = {
  user_id: string;
  type: string;
  provider: string;
  provider_account_id: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
};

type VerificationTokenRow = {
  identifier: string;
  token: string;
  expires: Date;
};

function mapUser(row: UserRow): AdapterUser {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    emailVerified: row.email_verified,
    image: row.image,
  };
}

function mapSession(row: SessionRow): AdapterSession {
  return {
    sessionToken: row.session_token,
    userId: row.user_id,
    expires: row.expires,
  };
}

function mapToken(row: VerificationTokenRow): VerificationToken {
  return {
    identifier: row.identifier,
    token: row.token,
    expires: row.expires,
  };
}

export function PostgresAdapter(): Adapter {
  return {
    async createUser(user: Omit<AdapterUser, "id">) {
      const result = await query<UserRow>(
        `
          INSERT INTO users (name, email, email_verified, image)
          VALUES ($1, $2, $3, $4)
          RETURNING id, name, email, email_verified, image
        `,
        [user.name ?? null, user.email, user.emailVerified ?? null, user.image ?? null],
      );

      return mapUser(result.rows[0]);
    },

    async getUser(id: string) {
      const result = await query<UserRow>(
        "SELECT id, name, email, email_verified, image FROM users WHERE id = $1",
        [id],
      );

      return result.rows[0] ? mapUser(result.rows[0]) : null;
    },

    async getUserByEmail(email: string) {
      const result = await query<UserRow>(
        "SELECT id, name, email, email_verified, image FROM users WHERE lower(email) = lower($1)",
        [email],
      );

      return result.rows[0] ? mapUser(result.rows[0]) : null;
    },

    async getUserByAccount({
      provider,
      providerAccountId,
    }: Pick<AdapterAccount, "provider" | "providerAccountId">) {
      const result = await query<UserRow>(
        `
          SELECT u.id, u.name, u.email, u.email_verified, u.image
          FROM users u
          INNER JOIN accounts a ON a.user_id = u.id
          WHERE a.provider = $1 AND a.provider_account_id = $2
        `,
        [provider, providerAccountId],
      );

      return result.rows[0] ? mapUser(result.rows[0]) : null;
    },

    async updateUser(user: Partial<AdapterUser> & Pick<AdapterUser, "id">) {
      const existing = await query<UserRow>(
        "SELECT id, name, email, email_verified, image FROM users WHERE id = $1",
        [user.id],
      );

      if (!existing.rows[0]) {
        throw new Error(`User not found: ${user.id}`);
      }

      const merged = { ...mapUser(existing.rows[0]), ...user };
      const result = await query<UserRow>(
        `
          UPDATE users
          SET name = $2, email = $3, email_verified = $4, image = $5, updated_at = now()
          WHERE id = $1
          RETURNING id, name, email, email_verified, image
        `,
        [
          merged.id,
          merged.name ?? null,
          merged.email,
          merged.emailVerified ?? null,
          merged.image ?? null,
        ],
      );

      return mapUser(result.rows[0]);
    },

    async linkAccount(account: AdapterAccount) {
      await query(
        `
          INSERT INTO accounts (
            user_id, type, provider, provider_account_id, refresh_token, access_token,
            expires_at, token_type, scope, id_token, session_state
          )
          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
          ON CONFLICT (provider, provider_account_id) DO UPDATE
          SET refresh_token = EXCLUDED.refresh_token,
              access_token = EXCLUDED.access_token,
              expires_at = EXCLUDED.expires_at,
              token_type = EXCLUDED.token_type,
              scope = EXCLUDED.scope,
              id_token = EXCLUDED.id_token,
              session_state = EXCLUDED.session_state
        `,
        [
          account.userId,
          account.type,
          account.provider,
          account.providerAccountId,
          account.refresh_token ?? null,
          account.access_token ?? null,
          account.expires_at ?? null,
          account.token_type ?? null,
          account.scope ?? null,
          account.id_token ?? null,
          (account as AdapterAccount & { session_state?: string }).session_state ?? null,
        ],
      );

      return account;
    },

    async createSession(session: AdapterSession) {
      const result = await query<SessionRow>(
        `
          INSERT INTO sessions (session_token, user_id, expires)
          VALUES ($1, $2, $3)
          RETURNING session_token, user_id, expires
        `,
        [session.sessionToken, session.userId, session.expires],
      );

      return mapSession(result.rows[0]);
    },

    async getSessionAndUser(sessionToken: string) {
      const result = await query<SessionRow & UserRow>(
        `
          SELECT
            s.session_token,
            s.user_id,
            s.expires,
            u.id,
            u.name,
            u.email,
            u.email_verified,
            u.image
          FROM sessions s
          INNER JOIN users u ON u.id = s.user_id
          WHERE s.session_token = $1
        `,
        [sessionToken],
      );

      const row = result.rows[0];
      if (!row) {
        return null;
      }

      return {
        session: mapSession(row),
        user: mapUser(row),
      };
    },

    async updateSession(session: Partial<AdapterSession> & Pick<AdapterSession, "sessionToken">) {
      const current = await query<SessionRow>(
        "SELECT session_token, user_id, expires FROM sessions WHERE session_token = $1",
        [session.sessionToken],
      );

      if (!current.rows[0]) {
        return null;
      }

      const merged = { ...mapSession(current.rows[0]), ...session };
      const result = await query<SessionRow>(
        `
          UPDATE sessions
          SET user_id = $2, expires = $3
          WHERE session_token = $1
          RETURNING session_token, user_id, expires
        `,
        [merged.sessionToken, merged.userId, merged.expires],
      );

      return result.rows[0] ? mapSession(result.rows[0]) : null;
    },

    async deleteSession(sessionToken: string) {
      const result = await query<SessionRow>(
        `
          DELETE FROM sessions
          WHERE session_token = $1
          RETURNING session_token, user_id, expires
        `,
        [sessionToken],
      );

      return result.rows[0] ? mapSession(result.rows[0]) : null;
    },

    async createVerificationToken(token: VerificationToken) {
      const result = await query<VerificationTokenRow>(
        `
          INSERT INTO verification_tokens (identifier, token, expires)
          VALUES ($1, $2, $3)
          RETURNING identifier, token, expires
        `,
        [token.identifier, token.token, token.expires],
      );

      return mapToken(result.rows[0]);
    },

    async useVerificationToken({ identifier, token }: { identifier: string; token: string }) {
      const result = await query<VerificationTokenRow>(
        `
          DELETE FROM verification_tokens
          WHERE identifier = $1 AND token = $2
          RETURNING identifier, token, expires
        `,
        [identifier, token],
      );

      return result.rows[0] ? mapToken(result.rows[0]) : null;
    },
  };
}
