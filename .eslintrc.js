module.exports = {
  env: {
    browser: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  settings: {
    react: {
      pragma: 'h'
    }
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'prefer-const': 'error',
    'react/react-in-jsx-scope': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always']
  }
};
