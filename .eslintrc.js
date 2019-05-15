module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  settings: {
    'import/resolver': {
      webpack: 'webpack.config.js',
    },
  },
  extends: [
    "eslint:recommended",
    "google",
    "plugin:vue/recommended",
    "plugin:vue-types/strongly-recommended",
  ],
  plugins: [
    'vue',
  ],
  rules: {
    camelcase: 0,
    "vue/no-v-html": 0,
    "max-len": 0,
    "quote-props": ["error", "as-needed"],
    "require-jsdoc": 0,
    "new-cap": 0,
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "array-element-newline": ["error", "always"],
    "array-bracket-newline": ["error", {
      multiline: true,
      minItems: 3,
    }],
    "array-bracket-spacing": ["error", "always"],
    "vue/array-bracket-spacing": ["error", "always"],
    "eqeqeq": ["error", "always"],
    "vue/eqeqeq": ["error", "always"],
    "key-spacing": ["error", { "afterColon": true }],
    "vue/key-spacing": ["error", { "afterColon": true }],
    "object-curly-spacing": ["error", "always"],
    "vue/object-curly-spacing": ["error", "always"],
    "vue/require-direct-export": 1,
    "vue/max-attributes-per-line": 2,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignoreWhenEmpty: true,
      ignores: ['pre', 'textarea'],
    }],
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }],
  }
}