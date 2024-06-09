module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  plugins: [
    'filenames',
    '@typescript-eslint',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  rules: {
    'filenames/match-exported': 'error',
    'filenames/no-index': 'error',
    'class-methods-use-this': 'off',
    'max-len': 'off',
    'no-empty': ['error', { allowEmptyCatch: true }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/extensions': ['error', 'always', {
      'ts': 'never',
      'js': 'never',
    }],
    'vue/max-attributes-per-line': 'off',
  },
  ignorePatterns: [
    '*.d.ts',
    '.*.js',
  ],
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.dev.js',
      },
    },
  },
};
