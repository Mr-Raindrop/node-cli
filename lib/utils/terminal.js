const { spawn } = require('child_process');
const commandSpawn = (...args) => {
    return new Promise((resolve, reject) => {
        const childProcess = spawn(...args);
        // 进程中会有很多执行命令的过程中的打印日志
        childProcess.stdout.pipe(process.stdout);
        childProcess.stderr.pipe(process.stderr);
        childProcess.on('close', () => {
            resolve();
        });
        childProcess.on('error', (error) => {
            reject(error);
        });
    })
}

module.exports = {
    commandSpawn
}