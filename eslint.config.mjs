import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["dist/**", ".output/**", "node_modules/**", "src/routeTree.gen.ts"]
  },
  {
    files: ["**/*.{js,mjs,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: "readonly",
        AbortSignal: "readonly",
        cancelAnimationFrame: "readonly",
        document: "readonly",
        fetch: "readonly",
        HTMLElement: "readonly",
        process: "readonly",
        requestAnimationFrame: "readonly",
        ReadableStream: "readonly",
        Request: "readonly",
        Response: "readonly",
        sessionStorage: "readonly",
        TextDecoder: "readonly",
        TextEncoder: "readonly",
        TransformStream: "readonly",
        window: "readonly"
      }
    }
  }
];
