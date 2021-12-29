/*
 * @Author: matiastang
 * @Date: 2021-12-24 14:50:33
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-29 16:04:54
 * @FilePath: /gulp-cli/gulpfile.js/index.js
 * @Description: gulpfile.js
 */
const gitTasks = require('./tasks/git.js')
const npmTasks = require('./tasks/npm.js')
const scriptsTasks = require('./tasks/scripts.js')
const versionTasks = require('./tasks/version.js')

// 导出所有 tasks
module.exports = {
    ...gitTasks,
    ...npmTasks,
    ...scriptsTasks,
    ...versionTasks,
}