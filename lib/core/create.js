const { createProject } = require('./action.js');
const createCommands = (program) => {
    program
        .command('create <project> [others...]')
        .description('clone a repository into a folder')
        .action(createProject)
}

module.exports = createCommands;