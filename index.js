#!/usr/bin/env node
const { version } = require('./package.json');
const helpOptions = require('./lib/core/help.js');
const createCommands = require('./lib/core/create.js');  
const program = require('commander');
program.version(version);
helpOptions(program);
createCommands(program);
program.parse(process.argv);
