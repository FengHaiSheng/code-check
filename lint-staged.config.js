module.exports = {
  '*.js': ['eslint --fix --ext .js', 'prettier --write'],
  '*.{css,less}': ['stylelint --fix', 'prettier --write']
};
