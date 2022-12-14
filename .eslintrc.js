module.exports = {
  env: {
    browser: true
  },
  plugins: ["@builder.io/mitosis"],
  parser: "@typescript-eslint/parser",
  extends: ["plugin:storybook/recommended"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "@builder.io/mitosis/no-conditional-render": "warn"
  }
};