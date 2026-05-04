import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import { configs, plugins } from 'eslint-config-airbnb-extended';
import pluginImportX from 'eslint-plugin-import-x';
import pluginN from 'eslint-plugin-n';
import pluginVue from 'eslint-plugin-vue';
import checkFile from 'eslint-plugin-check-file';

const airbnbPlugins = [
  plugins.stylistic,
  plugins.importX,
  plugins.node,
  plugins.typescriptEslint,
];

export default defineConfigWithVueTs(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'src/site/_site/**',
      'src/site/_data/manifest.json',
      'src/site/assets/**',
      '**/*.d.ts',
    ],
  },

  // Node.js build scripts (airbnb-base + node rules)
  {
    files: ['build/**/*.js', '*.js'],
    extends: [...airbnbPlugins, ...configs.node.recommended],
    plugins: {
      'import-x': pluginImportX,
      'n': pluginN,
    },
    rules: {
      'global-require': 'off',
      'n/global-require': 'off',
      'n/no-unpublished-require': 'off',
      'n/no-sync': 'off',
      'n/no-process-exit': 'off',
      'n/prefer-promises/fs': 'off',
      'import-x/no-extraneous-dependencies': 'off',
      'import-x/no-dynamic-require': 'off',
      'max-len': 'off',
      'no-console': 'off',
      'no-unused-vars': ['error', { args: 'none' }],
    },
  },

  // Eleventy data scripts (simple CJS files, minimal rules)
  {
    files: ['src/site/_data/**/*.js'],
    extends: [...airbnbPlugins, ...configs.node.recommended],
    plugins: {
      'import-x': pluginImportX,
      'n': pluginN,
    },
    rules: {
      'import-x/no-extraneous-dependencies': 'off',
      'func-names': 'off',
      'n/no-sync': 'off',
      'no-unused-vars': ['error', { argsIgnorePattern: '^eleventy' }],
    },
  },

  // Frontend TS/Vue (airbnb-base + airbnb-typescript + Vue)
  {
    files: ['src/assets/**/*.{ts,vue}'],
    extends: [
      ...airbnbPlugins,
      ...configs.base.typescript,
      pluginVue.configs['flat/recommended'],
      vueTsConfigs.recommended,
    ],
    plugins: {
      'check-file': checkFile,
      'import-x': pluginImportX,
    },
    settings: {
      'import-x/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        { '**/*.ts': '+([a-zA-Z])*([a-zA-Z0-9])', '**/*.vue': 'PASCAL_CASE' },
      ],
      'check-file/no-index': 'error',
      'class-methods-use-this': 'off',
      'max-len': 'off',
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'import-x/extensions': ['error', 'always', { ts: 'never', js: 'never' }],
      'vue/max-attributes-per-line': 'off',
    },
  },
);
