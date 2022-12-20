module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  "extends": ["eslint:recommended", "next"],
  plugins: ['@typescript-eslint'],
  rules: {
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-redeclare": "off",
  },
}