module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "next/core-web-vitals"
  ],
  rules: {
    "@next/next/no-img-element": "off",
    "react-hooks/exhaustive-deps": "off",
    "no-undef": "off",
    "no-unused-vars": "off",
    "no-redeclare": "off"
  }
}