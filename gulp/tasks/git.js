/*
 * @Author: tangdaoyong
 * @Date: 2021-05-07 15:20:03
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-16 17:50:02
 * @Description: git 相关
 */
/**
 * 更新版本号
 * @param {*} gulp 
 * @param {*} plugins 
 * @param {*} cb 
 */
const gitVersionPush = async function (gulp, plugins, cb) {
    let add = 'git add -A :/'; // 添加
    let commit = 'git commit -m "更新版本号"'; // 备注
    let push = 'git push'; // 提交
    // 执行指令
    await plugins.shell.exec(`
        ${add}
        ${commit}
        ${push}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`docs 指令 exec error: ${error}`)
            cb()
            return
        }
        // console.log(`${stdout}`)
        // console.log(`${stderr}`)
        cb()
    });
}

/**
 * 第一次提交
 * @param {*} gulp 
 * @param {*} plugins 
 * @param {*} cb 
 */
const gitFirst = async function (gulp, plugins, cb) {
    let add = 'git add -A :/'; // 添加
    let commit = 'git commit -m "第一次提交"'; // 备注
    let push = 'git push'; // 提交
    // 执行指令
    await plugins.shell.exec(`
        ${add}
        ${commit}
        ${push}
    `, (error, stdout, stderr) => {
        if (error) {
            console.error(`git first push指令 exec error: ${error}`)
            cb()
            return
        }
        cb()
    });
}

// 导出
module.exports = {
    gitVersionPush,
    gitFirst,
}
