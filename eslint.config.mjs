export default [
  pluginJs.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "script" },
    rules: {
      "no-console": { allow: ["warn", "error"] },
    },
  },
];