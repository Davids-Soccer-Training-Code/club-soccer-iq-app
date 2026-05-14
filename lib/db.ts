import "server-only";

import { Pool, type QueryResult, type QueryResultRow } from "pg";

declare global {
  var soccerIqPool: Pool | undefined;
}

function createPool() {
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("DATABASE_URL is not set.");
  }

  return new Pool({
    connectionString,
    ssl:
      connectionString.includes("sslmode=require") || connectionString.includes("neon.tech")
        ? { rejectUnauthorized: false }
        : undefined,
  });
}

export function getPool() {
  if (!globalThis.soccerIqPool) {
    globalThis.soccerIqPool = createPool();
  }

  return globalThis.soccerIqPool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = [],
): Promise<QueryResult<T>> {
  return getPool().query<T>(text, params);
}
