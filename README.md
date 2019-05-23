# Git Hooks

> Set of useful Git hooks to make developer's lives easier.

<!-- Shields. -->
<p>
    <!-- NPM version. -->
    <a href="https://www.npmjs.com/package/@brikcss/git-hooks"><img alt="NPM version" src="https://img.shields.io/npm/v/@brikcss/git-hooks.svg?style=flat-square"></a>
    <!-- NPM downloads/month. -->
    <a href="https://www.npmjs.com/package/@brikcss/git-hooks"><img alt="NPM downloads per month" src="https://img.shields.io/npm/dm/@brikcss/git-hooks.svg?style=flat-square"></a>
    <!-- Travis branch. -->
    <a href="https://github.com/brikcss/git-hooks/tree/master"><img alt="Travis branch" src="https://img.shields.io/travis/rust-lang/rust/master.svg?style=flat-square&label=master"></a>
    <!-- Codacy. -->
    <a href="https://www.codacy.com/app/thezimmee/git-hooks"><img alt="NPM version" src="https://img.shields.io/codacy/grade/93e2defdeec749f9bc3fa94100a023e5/master.svg?style=flat-square"></a>
    <!-- <a href="https://www.codacy.com/app/thezimmee/git-hooks"><img alt="Codacy code coverage" src="https://img.shields.io/codacy/coverage/93e2defdeec749f9bc3fa94100a023e5/master.svg?style=flat-square"></a> -->
    <!-- Coveralls -->
    <!-- <a href='https://coveralls.io/github/brikcss/git-hooks?branch=master'><img src='https://img.shields.io/coveralls/github/brikcss/git-hooks/master.svg?style=flat-square' alt='Coverage Status' /></a> -->
     <!-- Standard JS code style. -->
    <a href="https://standardjs.com"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square"></a>
    <!-- Prettier code style. -->
    <a href="https://prettier.io/"><img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
    <!-- Semantic release. -->
    <a href="https://github.com/semantic-release/semantic-release"><img alt="semantic release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square"></a>
    <!-- Commitizen friendly. -->
    <a href="http://commitizen.github.io/cz-cli/"><img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square"></a>
    <!-- MIT License. -->
    <a href="https://choosealicense.com/licenses/mit/"><img alt="License" src="https://img.shields.io/npm/l/express.svg?style=flat-square"></a>
    <!-- Greenkeeper. -->
    <a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/brikcss/git-hooks.svg?style=flat-square" alt="Greenkeeper badge"></a>
</p>

## Environment support

| Node | CLI | UMD | Browser |
| :--- | :-: | :-- | :------ |
| 𐄂    |  ✔  | 𐄂   | 𐄂       |

## Install

```sh
npm install -D @brikcss/git-hooks
```

## Setup

1.  Configure `.lintstagedrc.js` to run your desired linters and formatters. See [lint-staged documentation](https://www.npmjs.com/package/lint-staged).
2.  Configure `.huskyrc.js` to run your desired git hooks. See [husky documentation](https://github.com/typicode/husky). For example:
    ```js
    module.exports = {
      hooks: {
        'pre-commit': 'lint-staged',
        'commit-msg':
          'commitlint -e $HUSKY_GIT_PARAMS && . ./node_modules/.bin/commit-msg-stamp-branch $HUSKY_GIT_PARAMS',
        'pre-push': '. ./node_modules/.bin/pre-push-check-stage && echo "\n[ok] Pushing code..."',
      },
    };
    ```

### lint-staged

lint-staged allows you to easily lint and format _staged files_. This negates the need to lint files during a watch/build process. See [lint-staged documentation](https://www.npmjs.com/package/lint-staged) for configuration options.

### `commit-msg-stamp-branch`

This hook appends the source branch name to the commit message. No configuration necessary, just add to husky's configuration as shown above.

### `pre-push-check-stage`

This hook ensures stage is not "dirty" prior to running `git push`. No configuration necessary, just add to husky's configuration as shown above.

### `github-zip`

This hook is intended for use with [Travis](http://travis-ci.org) or similar continuous integration build tools. It grabs files recently published to NPM and compresses them into both a `.zip` and `.tgz` file. This allows you to release the same exact files to GitHub as were released on NPM.
