module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {},
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "prettier/prettier": "error",
    "space-before-function-paren": ["error", "never"],
    semi: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: { max: 3 },
        multiline: { max: 3 },
      },
    ],
  },
};
