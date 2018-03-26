# Git Hooks

> Set of useful Git hooks to make developer's lives easier.

<!-- Shields. -->
<p>
	<!-- NPM version. -->
	<a href="https://www.npmjs.com/package/@brikcss/git-hooks">
		<img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/git-hooks.svg?style=flat-square">
	</a>
	<!-- NPM downloads/month. -->
	<a href="https://www.npmjs.com/package/@brikcss/git-hooks">
		<img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/git-hooks.svg?style=flat-square">
	</a>
	<!-- Travis branch. -->
	<a href="https://github.com/brikcss/git-hooks/tree/master">
		<img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master">
	</a>
	<!-- Codacy. -->
	<a href="https://www.codacy.com/app/thezimmee/git-hooks">
		<img alt="NPM version" src="https://img.shields.io/codacy/grade/93e2defdeec749f9bc3fa94100a023e5/master.svg?style=flat-square">
	</a>
	<!-- Coveralls -->
	<a href='https://coveralls.io/github/brikcss/git-hooks?branch=master'>
		<img src='https://img.shields.io/coveralls/github/brikcss/git-hooks/master.svg?style=flat-square' alt='Coverage Status' />
	</a>
	<!-- Commitizen friendly. -->
	<a href="http://commitizen.github.io/cz-cli/">
		<img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square">
	</a>
	<!-- Semantic release. -->
	<a href="https://github.com/semantic-release/semantic-release">
		<img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square">
	</a>
	<!-- Prettier code style. -->
	<a href="https://prettier.io/">
		<img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
	</a>
	<!-- MIT License. -->
	<!-- <a href="https://choosealicense.com/licenses/mit/">
		<img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square">
	</a> -->
</p>

## Install

```sh
npm install @brikcss/git-hooks
```

## Setup

Add desired git hooks to [husky](https://github.com/typicode/husky) in `package.json`:

```json
"husky": {
	"hooks": {
		"pre-commit": "node ./node_modules/.bin/pre-commit-lint",
		"commit-msg": "commitlint -e $GIT_PARAMS && . ./node_modules/.bin/commit-msg-stamp-branch ${GIT_PARAMS}",
		"pre-push": ". ./node_modules/.bin/pre-push-check-stage && echo \"\n[ok] Pushing code...\""
	}
}
```

## `pre-commit-lint`

This hook lints and formats _staged files_ with [eslint](https://eslint.org/), [stylelint](https://stylelint.io/), and [prettier](https://prettier.io/). This can negate the need to lint files during a watch/build process.

`pre-commit-lint` has the following options:

### Options

`--css` (`.css`): Comma-separated list of file extension(s) to lint with [stylelint](https://stylelint.io/) and [prettify](https://prettier.io/).

`--js` (`.js`): Comma-separated list of file extensions to lint with [eslint](https://eslint.org/) and [prettify](https://prettier.io/).

`--json` (`.json`): Comma-separated list of file extensions to [prettify](https://prettier.io/) as JSON files.

`--ignore`: Comma-separated list of file types to ignore. Can be `css`, `js`, or `json`.

## `commit-msg-stamp-branch`

This hook appends the source branch name to the commit message. No configuration necessary, just add the hook to husky.

## `pre-push-check-stage`

This hook ensures stage is not "dirty" prior to running `git push`. No configuration necessary, just add the hook to husky.

## Environment support

| Node   | CLI   | UMD   | Browser   |
|:-------|:-----:|:------|:----------|
| 𐄂      | ✔     | 𐄂     | 𐄂         |
