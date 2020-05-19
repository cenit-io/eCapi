#!/usr/bin/env node
'use strict';

const fs = require('fs-extra');
const program = require('commander');

const api = require('swagger-repo');
const liveReload = require('swagger-repo/lib/livereload');
const {notifyBranchPreviewFromTravis} = require('swagger-repo/lib/travis');

program
  .command('build-docs')
  .description('Build web deploy directory')
  .action(function (options) {
    fs.removeSync('web_deploy');
    fs.mkdirpSync('web_deploy');
    fs.copySync('docs/', 'web_deploy', {});
  });

program.version(require('../package.json').version).parse(process.argv);

// Show help if no options were given
if (program.rawArgs.length < 3) {
  program.help();
}
