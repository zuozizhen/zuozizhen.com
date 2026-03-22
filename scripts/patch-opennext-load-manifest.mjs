import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const target = resolve(
  process.cwd(),
  "node_modules/@opennextjs/cloudflare/dist/cli/build/patches/plugins/load-manifest.js",
);

if (!existsSync(target)) {
  console.log("[patch-opennext] skip: target not found");
  process.exit(0);
}

let content = readFileSync(target, "utf8");
let changed = false;

if (content.includes("**/{*-manifest,required-server-files}.json")) {
  content = content.replace(
    "**/{*-manifest,required-server-files}.json",
    "**/{*-manifest,required-server-files,prefetch-hints}.json",
  );
  changed = true;
}

const originalThrow = "  throw new Error(\\`Unexpected loadManifest(\\${$PATH}) call!\\`);";
if (content.includes(originalThrow)) {
  content = content.replace(
    originalThrow,
    "  return {};",
  );
  changed = true;
}

if (changed) {
  writeFileSync(target, content);
  console.log("[patch-opennext] applied");
} else {
  console.log("[patch-opennext] already applied");
}

const kumoChunksDir = resolve(
  process.cwd(),
  "node_modules/@cloudflare/kumo/dist/chunks",
);

if (!existsSync(kumoChunksDir)) {
  console.log("[patch-kumo-select] skip: chunks dir not found");
  process.exit(0);
}

const selectChunkFiles = readdirSync(kumoChunksDir).filter(
  (file) => file.startsWith("select-") && file.endsWith(".js"),
);

if (selectChunkFiles.length === 0) {
  console.log("[patch-kumo-select] skip: select chunk not found");
  process.exit(0);
}

let patchedCount = 0;

for (const file of selectChunkFiles) {
  const fullPath = resolve(kumoChunksDir, file);
  const chunk = readFileSync(fullPath, "utf8");

  if (chunk.includes("\"!shadow-none\"")) {
    continue;
  }

  const nextChunk = chunk.replace(
    "\"justify-between font-normal\",",
    "\"justify-between font-normal\",\n              \"!shadow-none\",",
  );

  if (nextChunk !== chunk) {
    writeFileSync(fullPath, nextChunk);
    patchedCount += 1;
  }
}

if (patchedCount > 0) {
  console.log(`[patch-kumo-select] applied (${patchedCount} file)`);
} else {
  console.log("[patch-kumo-select] already applied");
}
