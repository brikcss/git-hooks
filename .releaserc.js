const config = {
	github: {
		path: '@semantic-release/github',
		assets: './bin/*',
		// assets: [
		// 	{
		// 		path: './bin/pre-commit-lint.js',
		// 		label: 'Git pre-commit hook which runs eslint, stylelint, and prettier on files.'
		// 	},
		// 	{
		// 		path: './bin/commit-msg-stamp-branch.sh',
		// 		label:
		// 			'Git commit-msg hook which appends the source branch name to the commit message.'
		// 	},
		// 	{
		// 		path: './bin/pre-push/check-stage.sh',
		// 		label: 'Git pre-push hook which prevents pushing files with a dirty stage.'
		// 	}
		// ],
		assignees: ['thezimmee']
	},
	npm: '@semantic-release/npm'
	// npm: {
	// 	path: '@semantic-release/npm',
	// 	npmPublish: true,
	// 	pkgRoot: '.'
	// 	// tarballDir: false
	// }
};
module.exports = {
	branch: 'master',
	// repositoryUrl: 'https://github.com/brikcss/git-hooks',
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
};
