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
    'vue/eqeqeq': [2, 'always', {
      null: 'ignore',
    }],
    'vue/no-extra-parens': 2,
    'vue/prefer-template': 2,
    'vue/template-curly-spacing': 2,
    'vue/html-self-closing': [2, {
      html: {
        void: 'always',
        normal: 'always',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/attribute-hyphenation': [2, 'never'],
    'vue/component-name-in-template-casing': [2, 'PascalCase'],
    'vue/custom-event-name-casing': 0,
    'vue/mustache-interpolation-spacing': [1, 'never'],
    'vue/require-default-prop': 0,
    'vue/object-curly-spacing': [2, 'always'],
    'vue/comma-dangle': [2, 'always-multiline'],
    'vue/comma-spacing': 2,
    'vue/comma-style': 2,
    'vue/require-direct-export': 2,
    'vue/space-unary-ops': 2,
    'vue/space-infix-ops': 2,
    'vue/v-on-function-call': 2,
    'vue/arrow-spacing': 2,
    'vue/array-bracket-spacing': [2, 'never'],
    'vue/key-spacing': 2,
    'vue/padding-line-between-blocks': 2,
    'vue/no-boolean-default': [2, 'default-false'],
    'vue/no-static-inline-styles': [2, {
      allowBinding: false,
    }],
  },
}
