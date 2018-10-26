module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
    'commit-msg': 'commitlint -e $HUSKY_GIT_PARAMS && . ./bin/commit-msg-stamp-branch.sh $HUSKY_GIT_PARAMS',
    'pre-push': '. ./bin/pre-push-check-stage.sh && echo "\n[ok] Pushing code..."'
  }
}
