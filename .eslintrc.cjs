module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "quotes": ["warn", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["warn", 2],
    "import/order": ["error", {
      "groups": ["builtin", "external", "parent", "sibling", "index"],
      "newlines-between": "always-and-inside-groups",
    }]
  },
}
