#!/usr/bin/env bash
### ------------------------------------------------------------------------------------------------
##  @filename  github-zip.sh
##  @author  brikcss  <https://github.com/brikcss>
##  @description  Zip build files for a GitHub release.
### ------------------------------------------------------------------------------------------------

NPM_NAME=$(npx -c 'echo $npm_package_name');
DIST_TAG=$(node -e "const pkg = require('./package.json'); console.log(pkg.publishConfig && pkg.publishConfig.tag || 'latest')")
export TAR_FILENAME=$(npm pack ${NPM_NAME}\@${DIST_TAG});
export ZIP_FILENAME=${TAR_FILENAME/.tgz/.zip};
tar -xzvf $TAR_FILENAME;
zip -r $ZIP_FILENAME package;