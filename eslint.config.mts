import js from "@eslint/js";
import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  {
    ignores: [
      "dist",
      "node_modules",
      "coverage",
      "eslint.config.mts",
      "jest.config.js",
      "newrelic.js",
      "**/*.eslintrc.cjs",
      ".commitlintrc.js",
      "jest.setup.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
        ...globals.es2021,
      },
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      perfectionist,
    },
    linterOptions: {
      reportUnusedDisableDirectives: false,
    },
    rules: {
      "perfectionist/sort-imports": "off",
      "perfectionist/sort-named-imports": "off",
      "comma-dangle": "off",
      "no-console": "off",
      "no-return-await": "off",
      "no-constant-condition": "off",
      "no-extra-semi": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },
  {
    files: ["**/*.{js,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.commonjs,
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
);
