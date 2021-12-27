/*
 * @Author: matiastang
 * @Date: 2021-12-24 15:01:39
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-24 15:06:28
 * @FilePath: /gulp-cli/gulpfile.ts/tasks/git.ts
 * @Description: git相关tasks
 */
const shell = require('shelljs');// 执行脚本命令
/**
 * 第一次提交
 * @param {*} gulp 
 * @param {*} plugins 
 * @param {*} cb 
 */
const git_first = async function (gulp, cb) {
    const add = 'git add -A :/'; // 添加
    const commit = 'git commit -m "第一次提交"'; // 备注
    const push = 'git push'; // 提交
    // 执行指令
    await shell.exec(`
        ${add}
        ${commit}
        ${push}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`git_first指令 exec error: ${error}`)
            cb()
            return
        }
        cb()
    });
}

exports = {
    git_first,
}