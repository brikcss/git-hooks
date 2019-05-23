/*! .lintstagedrc.js | @author brikcss <https://github.com/brikcss> | @reference <https://github.com/okonet/lint-staged> */

module.exports = {
  linters: {
    '*.js': ['standard --fix', 'git add'],
    '*.json': ['prettier --parser json --write', 'git add'],
    '*.{yml,yaml}': ['prettier --parser json --write', 'git add'],
    '*.md': ['prettier --parser markdown --write', 'git add'],
    '*.html': ['prettier --parser html --write', 'git add']
  },
  concurrent: true,
  globOptions: {
    matchBase: true,
    dot: true
  },
  ignore: ['*.min.{js,css}']
}
