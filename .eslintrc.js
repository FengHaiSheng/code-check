module.exports = {
  extends: [
    'eslint-config-ali', 
    'prettier', 
    'plugin:vue/vue3-recommended', 
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    'prettier/prettier': 'error',
    strict: 'off',
    'no-console': 'off',
    'import/no-dynamic-require': 'off',
    'global-require': 'off',
    'require-yield': 'off'
  },
  plugins: ['prettier', 'vue'],
  globals: {
    React: 'readable'
  }
};
