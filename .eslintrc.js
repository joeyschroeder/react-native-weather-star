module.exports = {
  env: {
    browser: true,
    'jest/globals': true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react-native/all',
    'plugin:react/all',
  ],
  ignorePatterns: ['.expo-shared/', '.expo/', 'assets/', 'coverage/', 'node_modules/', 'npm-debug.*'],
  parser: '@babel/eslint-parser',
  plugins: ['jest', 'react', 'react-native', 'sort-destructure-keys'],
  rules: {
    'comma-dangle': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': [0],
    'import/no-unresolved': 0,
    'import/no-unused-modules': [1, { unusedExports: true }],
    'import/order': [0],
    'import/prefer-default-export': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/label-has-for': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'multiline-comment-style': ['warn'],
    'prettier/prettier': [
      1,
      {
        endOfLine: 'auto',
        printWidth: 120,
        singleQuote: true,
      },
    ],
    quotes: ['error', 'single'],
    'react-native/no-unused-styles': 0,
    'react/forbid-prop-types': [2, { forbid: ['any'] }],
    'react/jsx-filename-extension': [0],
    'react/jsx-indent': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-max-depth': [0],
    'react/jsx-newline': 0,
    'react/jsx-no-literals': [0],
    'react/jsx-one-expression-per-line': [0],
    'react/no-unused-prop-types': 1,
    'react/sort-prop-types': [2],
    'react/static-property-placement': [2, 'static public field'],
    semi: ['error', 'always'],
    'sort-destructure-keys/sort-destructure-keys': 1,
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
  },
};