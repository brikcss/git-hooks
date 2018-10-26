const config = {
  github: {
    path: '@semantic-release/github',
    assets: './bin/*',
    assignees: ['thezimmee']
  },
  npm: '@semantic-release/npm'
}
module.exports = {
  branch: 'master',
  repositoryUrl: 'https://github.com/brikcss/git-hooks',
  verifyConditions: [config.npm, config.github],
  analyzeCommits: {
    preset: 'angular',
    releaseRules: [
      {
        breaking: true,
        release: 'major'
      },
      {
        scope: 'BREAKING',
        release: 'major'
      },
      {
        scope: 'MINOR',
        release: 'minor'
      },
      {
        scope: 'PATCH',
        release: 'patch'
      },
      {
        type: 'feat',
        release: 'minor'
      },
      {
        type: 'feature',
        release: 'minor'
      },
      {
        type: 'docs',
        release: 'patch'
      },
      {
        type: 'fix',
        release: 'patch'
      },
      {
        type: 'patch',
        release: 'patch'
      },
      {
        type: 'perf',
        release: 'patch'
      },
      {
        type: 'performance',
        release: 'patch'
      },
      {
        type: 'refactor',
        release: 'patch'
      },
      {
        type: 'revert',
        release: 'patch'
      },
      {
        type: 'style',
        release: 'patch'
      }
    ],
    parserOpts: {
      noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING']
    }
  },
  verifyRelease: [],
  generateNotes: ['@semantic-release/release-notes-generator'],
  prepare: [config.npm],
  publish: [config.npm, config.github],
  success: [config.github],
  fail: [config.github]
}
