module.exports = {
  root: true,
  plugins: [],
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:node/recommended',
  ],
  env: {
    node: true,
  },
  parserOptions: {
    // Only ESLint 6.2.0 and later support ES2020.
    // https://github.com/mysticatea/eslint-plugin-node
    ecmaVersion: 2020,
  },
  globals: {},
  rules: {
    'global-require': 'off',
    'node/no-unpublished-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-dynamic-require': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
  },
};
