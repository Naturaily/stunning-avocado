module.exports = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'no-console': 1,
  },

  extends: ['eslint-config-custom/eslint-next.js'],
};
