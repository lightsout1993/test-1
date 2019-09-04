const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? ERROR : OFF,
    'no-debugger': process.env.NODE_ENV === 'production' ? ERROR : OFF,

    // import
    'import/no-commonjs': ERROR,
    'import/no-extraneous-dependencies': OFF,
    'import/extensions': [
      ERROR,
      'always',
      {
        js: 'never',
      },
    ],

    // airbnb-base
    complexity: [WARN, 11],
    'no-eq-null': ERROR,
    'no-magic-numbers': [ERROR, {
      ignore: [0, -1, 1, 100],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    }],
    'no-param-reassign': [ERROR, {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for mutation vuex
        'acc', // for reduce accumulators
        'e', // for e.return value
      ]
    }],

    // vue
    'vue/attributes-order': ERROR,
    'vue/singleline-html-element-content-newline': ERROR,
  },
  parserOptions: {
    parser: 'babel-eslint',
    parserOptions: {
      "ecmaVersion": 2017,
      "sourceType": "module"
    }
  },
  overrides: [
    {
      files: ['*.config.*'],
      rules: {
        'import/no-commonjs': OFF,
        'global-require': OFF,
      }
    },
  ]
};
