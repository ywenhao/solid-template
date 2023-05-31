const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['solid', '@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:solid/typescript'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/consistent-type-imports': 'error',
    'no-undef': 'off',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-use-before-define': [
      'error',
      {
        variables: true,
        functions: false,
        classes: false,
        allowNamedExports: false,
      },
    ],
  },
})
