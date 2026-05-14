import type { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import nodemailer from "nodemailer";

import { PostgresAdapter } from "@/lib/auth/postgres-adapter";

function emailServer() {
  const host = process.env.EMAIL_SERVER_HOST;

  if (!host) {
    return undefined;
  }

  const port = Number(process.env.EMAIL_SERVER_PORT ?? 587);

  return {
    host,
    port,
    secure: port === 465,
    auth:
      process.env.EMAIL_SERVER_USER && process.env.EMAIL_SERVER_PASSWORD
        ? {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
          }
        : undefined,
  };
}

export const authOptions: NextAuthOptions = {
  adapter: PostgresAdapter(),
  session: {
    strategy: "database",
  },
  pages: {
    signIn: "/signin",
    verifyRequest: "/check-email",
  },
  providers: [
    EmailProvider({
      server: emailServer(),
      from: process.env.EMAIL_FROM ?? "Coach David's Soccer Tactical App <no-reply@example.com>",
      async sendVerificationRequest({ identifier, url, provider }) {
        if (!provider.server) {
          console.log("");
          console.log("Coach David's Soccer Tactical App sign-in link");
          console.log(`Email: ${identifier}`);
          console.log(url);
          console.log("");
          return;
        }

        const transport = nodemailer.createTransport(provider.server);
        await transport.sendMail({
          to: identifier,
          from: provider.from,
          subject: "Your Coach David's Soccer Tactical App sign-in link",
          text: `Open this link to sign in to Coach David's Soccer Tactical App:\n\n${url}\n\nIf you did not ask for this, you can ignore it.`,
          html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.5;">
              <h2>Coach David's Soccer Tactical App sign-in</h2>
              <p>Open this secure link to sign in:</p>
              <p><a href="${url}">Sign in to Coach David's Soccer Tactical App</a></p>
              <p>If you did not ask for this, you can ignore it.</p>
            </div>
          `,
        });
      },
    }),
  ],
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }

      return session;
    },
  },
};
