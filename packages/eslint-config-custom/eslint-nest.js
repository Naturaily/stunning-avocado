const orderImports = require('./order-imports');

module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
  ],
  plugins: ['import', 'eslint-plugin-import-helpers', '@typescript-eslint'],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: '.',
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': 1,
    'import-helpers/order-imports': [
      2,
      {
        newlinesBetween: 'always',
        groups: [['/^@nestjs/', 'module'], orderImports, [('parent', 'sibling', 'index')]],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  overrides: [
    {
      env: {
        jest: true,
      },
      files: ['**/__tests__/**/*.[jt]s', '**/?(*.)+(spec|test).[jt]s'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'import/no-extraneous-dependencies': [
          'off',
          { devDependencies: ['**/?(*.)+(spec|test).[jt]s'] },
        ],
      },
    },
  ],
  ignorePatterns: ['**/*.js', 'node_modules', '.turbo', 'dist', 'coverage'],
};
