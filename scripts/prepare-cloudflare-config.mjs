import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.resolve(scriptDir, "../wrangler.jsonc");
const configText = fs.readFileSync(configPath, "utf8");
const config = JSON.parse(configText);
const databaseId = process.env.CLOUDFLARE_DATABASE_ID?.trim();

if (!Array.isArray(config.d1_databases) || config.d1_databases.length === 0) {
  throw new Error("wrangler.jsonc must define a d1_databases binding.");
}

const db = config.d1_databases.find((binding) => binding.binding === "DB");
if (!db) {
  throw new Error('wrangler.jsonc must define a D1 binding named "DB".');
}

if (databaseId) {
  db.database_id = databaseId;
}

if (!db.database_id || db.database_id === "replace-with-d1-database-id") {
  throw new Error("A valid D1 database_id is required. Set CLOUDFLARE_DATABASE_ID or update wrangler.jsonc.");
}

fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`);
