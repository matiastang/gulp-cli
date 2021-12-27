/*
 * @Author: matiastang
 * @Date: 2021-12-24 14:50:33
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-27 10:16:41
 * @FilePath: /gulp-cli/gulpfile.js/index.js
 * @Description: gulpfile.js
 */
const gitTasks = require('./tasks/git.js')

// 导出所有 tasks
module.exports = {
    ...gitTasks
}