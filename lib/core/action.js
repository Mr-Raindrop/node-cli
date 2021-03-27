const { promisify } = require('util');
const download = promisify(require('download-git-repo'));
const chalk = require('chalk');
const open = require('open');

const { vueRepo } = require('../config/repo-config.js');
const { commandSpawn } = require('../utils/terminal.js');

const createProject = async (projectName) => {
    try {

        // 1.clone项目
        await download(vueRepo, projectName, { clone: true });
        // 2.执行npm install
        const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
        const spawnOptions = {
            cwd: `./${projectName}`,
        }
        await commandSpawn(command, ['install'], spawnOptions);
        // 3.执行npm run serve
        // await commandSpawn(command, ['run', 'serve'], spawnOptions);
        // 4.打开浏览器 若要打开浏览器则去掉第三步await 因为进程没有触发close事件
        // 或者3 4顺序调换
        // open("http://localhost:8080");
    } catch (err) {
        console.log(chalk.red(err));
    }
}
module.exports = {
    createProject,
}