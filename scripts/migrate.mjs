import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import pg from "pg";

const { Pool } = pg;
const migrationsDir = path.join(process.cwd(), "migrations");

async function loadLocalEnv() {
  const envPath = path.join(process.cwd(), ".env");

  try {
    const text = await fs.readFile(envPath, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)=(.*)\s*$/);
      if (!match || process.env[match[1]]) {
        continue;
      }

      process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, "");
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }
}

await loadLocalEnv();

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("DATABASE_URL is required to run migrations.");
  process.exit(1);
}

const pool = new Pool({
  connectionString: databaseUrl,
  ssl: databaseUrl.includes("sslmode=require") ? { rejectUnauthorized: false } : undefined,
});

async function ensureMigrationTable(client) {
  await client.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id integer PRIMARY KEY,
      filename text NOT NULL UNIQUE,
      checksum text NOT NULL,
      applied_at timestamptz NOT NULL DEFAULT now()
    )
  `);
}

function migrationId(filename) {
  const match = filename.match(/^(\d+)_.*\.sql$/);
  if (!match) {
    throw new Error(`Migration file must start with a number: ${filename}`);
  }
  return Number(match[1]);
}

async function main() {
  const client = await pool.connect();
  try {
    await ensureMigrationTable(client);
    const files = (await fs.readdir(migrationsDir))
      .filter((file) => file.endsWith(".sql"))
      .sort((a, b) => migrationId(a) - migrationId(b));

    for (const file of files) {
      const id = migrationId(file);
      const sql = await fs.readFile(path.join(migrationsDir, file), "utf8");
      const checksum = crypto.createHash("sha256").update(sql).digest("hex");
      const existing = await client.query("SELECT checksum FROM schema_migrations WHERE id = $1", [id]);

      if (existing.rowCount) {
        if (existing.rows[0].checksum !== checksum) {
          throw new Error(`Migration ${file} changed after it was applied.`);
        }
        console.log(`Skipping ${file}`);
        continue;
      }

      console.log(`Applying ${file}`);
      await client.query("BEGIN");
      await client.query(sql);
      await client.query(
        "INSERT INTO schema_migrations (id, filename, checksum) VALUES ($1, $2, $3)",
        [id, file, checksum],
      );
      await client.query("COMMIT");
    }

    console.log("Migrations complete.");
  } catch (error) {
    await client.query("ROLLBACK").catch(() => {});
    throw error;
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
