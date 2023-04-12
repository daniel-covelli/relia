module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-native-a11y/all',
    'prettier',
  ],

  env: {
    jest: true,
  },

  rules: {
    'no-console': 'warn',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'no-plusplus': 'warn',
    'react-native-a11y/has-valid-accessibility-descriptors': 'warn',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          [
            '^react(/.*)?$',
            '^react-native(/.*)?$',
            '@testing-library/react-native',
          ],

          ['^components(/.*)?$', '^screens(/.*)?$'],
          ['api'],
          // Do not touch the ording of Apollo! Apollo must be imported before Okta or the app breaks.
          // See for more details: https://groundswell.atlassian.net/l/cp/8NdZ1UP0
          ['apollo'],
          ['okta'],
          /** Start general imports https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/examples/.eslintrc.js */
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          /** End of general imports */
          ['^graphql'],
          ['^navigation(/.*)?$'],
          ['^types', '^\\u0000$'],
          ['^utils(/.*)?$'],
          ['^consts(/.*)?$'],
          ['../style', '^styles', '^./styles'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false,
      },
    ],
  },

  plugins: [
    'prettier',
    'simple-import-sort',
    'unused-imports',
    'import',
    'detox',
    'prefer-arrow-functions',
  ],

  overrides: [
    {
      files: ['*.e2e.js', '*.e2e.ts', 'e2e/**/*.js', 'e2e/**/*.ts'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
      env: {
        'detox/detox': true,
        node: true,
      },
    },
  ],

  parserOptions: {
    project: true,
  },
};
