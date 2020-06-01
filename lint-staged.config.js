module.exports = {
  '*.{js,vue}': ['eslint --fix --ext .js,.vue', 'prettier --write'],
  '*.{css,less}': ['stylelint --fix', 'prettier --write']
};
