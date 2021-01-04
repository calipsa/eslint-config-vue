module.exports = {
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  extends: [
    '@calipsa/eslint-config',
    'plugin:vue/recommended',
  ],

  plugins: [
    'vue',
  ],

  rules: {
    'vue/array-bracket-spacing': [2, 'never'],
    'vue/arrow-spacing': 2,
    'vue/attribute-hyphenation': [2, 'never'],
    'vue/comma-dangle': [2, 'always-multiline'],
    'vue/comma-spacing': 2,
    'vue/comma-style': 2,
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/custom-event-name-casing': 0,
    'vue/dot-notation': 2,
    'vue/eqeqeq': [2, 'always', {
      null: 'ignore',
    }],
    'vue/func-call-spacing': 2,
    'vue/html-self-closing': [2, {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/key-spacing': 2,
    'vue/mustache-interpolation-spacing': [1, 'never'],
    // 'vue/new-line-between-multi-line-property': 2,
    'vue/no-boolean-default': [2, 'default-false'],
    'vue/no-empty-component-block': 2,
    'vue/no-extra-parens': 2,
    'vue/no-multiple-objects-in-class': 2,
    'vue/no-restricted-static-attribute': [2,
      {
        key: 'id',
        message: 'Using static "id" is not allowed, because global ids can conflict with each other',
      },
    ],
    'vue/no-static-inline-styles': [2, {
      allowBinding: false,
    }],
    'vue/no-template-target-blank': 2,
    'vue/no-unused-properties': [2, {
      groups: [
        'props',
        'data',
        'computed',
        'methods',
        'setup',
      ],
    }],
    'vue/no-useless-v-bind': 2,
    'vue/object-curly-spacing': [2, 'always'],
    'vue/padding-line-between-blocks': 2,
    'vue/prefer-template': 2,
    'vue/require-default-prop': 0,
    'vue/require-direct-export': 2,
    'vue/space-in-parens': 2,
    'vue/space-infix-ops': 2,
    'vue/space-unary-ops': 2,
    'vue/template-curly-spacing': 2,
    'vue/v-for-delimiter-style': [2, 'of'],
    'vue/v-on-function-call': 2,
  },
}
