module.exports = {
  '*.{js,vue}': ['eslint --fix --ext .js,.vue'],
  '*.{css,less}': ['stylelint --fix', 'prettier --write']
};
