import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite-plus";
import type { Plugin } from "vite-plus";

function contentBuildPlugin(): Plugin {
  const contentFiles = /content\/(blog|project)\/.*\.md$/;

  return {
    name: "content-build",
    buildStart() {
      execFileSync("node", ["scripts/build-content.mjs"], {
        stdio: "inherit",
      });
    },
    handleHotUpdate({ file, server }) {
      if (!contentFiles.test(file)) return;

      execFileSync("node", ["scripts/build-content.mjs"], {
        stdio: "inherit",
      });
      server.ws.send({ type: "full-reload" });
    },
  };
}

export default defineConfig({
  staged: {
    "*.{js,mjs,ts,tsx,json,css,md}": "vp check --fix",
  },
  fmt: {
    ignorePatterns: [
      "content/**",
      "dist/**",
      ".output/**",
      "node_modules/**",
      "public/*.html",
      "src/data/content.json",
      "src/data/content-list.json",
      "src/routeTree.gen.ts",
      "wrangler.jsonc",
    ],
  },
  lint: {
    plugins: ["oxc", "typescript", "react"],
    categories: {
      correctness: "warn",
    },
    env: {
      builtin: true,
      browser: true,
      node: true,
    },
    ignorePatterns: [
      "dist/**",
      ".output/**",
      "node_modules/**",
      "src/data/content.json",
      "src/data/content-list.json",
      "src/routeTree.gen.ts",
    ],
    rules: {
      "vite-plus/prefer-vite-plus-imports": "error",
    },
    overrides: [
      {
        files: ["**/*.{ts,tsx,mts,cts}"],
        rules: {
          "constructor-super": "off",
          "getter-return": "off",
          "no-class-assign": "off",
          "no-const-assign": "off",
          "no-dupe-class-members": "off",
          "no-dupe-keys": "off",
          "no-func-assign": "off",
          "no-import-assign": "off",
          "no-new-native-nonconstructor": "off",
          "no-obj-calls": "off",
          "no-redeclare": "off",
          "no-setter-return": "off",
          "no-this-before-super": "off",
          "no-undef": "off",
          "no-unreachable": "off",
          "no-unsafe-negation": "off",
          "no-var": "error",
          "no-with": "off",
          "prefer-const": "error",
          "prefer-rest-params": "error",
          "prefer-spread": "error",
        },
      },
    ],
    options: {
      typeAware: true,
      typeCheck: true,
    },
    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],
  },
  server: {
    port: 3000,
  },
  build: {
    rolldownOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react")) return "react";
          if (id.includes("node_modules/@tanstack")) return "tanstack";
          if (id.includes("src/data/content-list.json")) return "content-list";
          if (id.includes("src/data/content.json")) return "content-detail";
          if (id.includes("terminal-controller")) return "terminal-controller";
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  plugins: [
    cloudflare({ viteEnvironment: { name: "ssr" } }),
    contentBuildPlugin(),
    tanstackStart(),
    react(),
    tailwindcss(),
  ],
});
