/*
 * @Author: tangdaoyong
 * @Date: 2021-05-14 14:51:10
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-29 16:09:26
 * @Description: npm 相关
 */
const shell = require('shelljs');// 执行脚本命令
/**
 * 提交到npm
 * @param {*} cb 
 */
const npmPackagePush = async function (cb) {
    let chooseNPM = 'nrm use npm';// 切换源到npm(使用nrm)
    let command = 'npm publish'; // 提交npm(需要先登录npm adduser)
    // 执行指令
    await shell.exec(`
        ${chooseNPM}
        ${command}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`${command} 指令 exec error: ${error}`)
            cb()
            return
        }
        cb()
    });
}

// 导出
module.exports = {
    npmPackagePush
}