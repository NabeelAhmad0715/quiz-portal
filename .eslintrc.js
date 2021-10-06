module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb-base', 'eslint:recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'max-classes-per-file': ['error', 2],
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
};
