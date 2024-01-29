// @ts-check

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
  // Standard prettier options
  singleQuote: false,
  semi: true,
  tabWidth: 2,
  useTabs: false,
  embeddedLanguageFormatting: "auto",
  singleAttributePerLine: true,
  // Since prettier 3.0, manually specifying plugins is required
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  // This plugin's options
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "",
    "^(next/(.*)$)|^(next$)",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@uploadthing/(.*)$",
    "^uploadthing/(.*)$",
    "",
    "^~/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderTypeScriptVersion: "5.0.0",
};

export default config;
