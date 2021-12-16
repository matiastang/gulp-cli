#!/usr/bin/env node
// 表明是node脚本，需要node环境
/*
 * @Author: matiastang
 * @Date: 2021-12-16 17:22:58
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-16 19:49:30
 * @FilePath: /gulp-cli/bin/init.js
 * @Description: 指令
 */
const program = require('commander');// cli工具
const inquirer = require('inquirer');// cli交互
const shell = require('shelljs');// [shell执行命令](https://www.npmjs.com/package/shelljs)
const download = require('download-git-repo');// 下面代码用到了 download-git-repo 和 rimraf 两个第三方库
const package = require('../package.json');// package包

/*
* 指令
*/
program
    .version(package.version)
    .option('-v,--version', '查看版本号');

/**
 * 询问是否下载gulp模板
 */
const vuepressPromptList = [{
    type: "confirm",
    message: "下载gulpfile.js模板",
    name: "gulpFile",
    prefix: "是否",
    suffix: "？"
},{
    type: "confirm",
    message: "下载gulp指令模板文件夹",
    name: "gulpTask",
    prefix: "是否",
    suffix: "？"
}];

/**
 * 下载gulp模板
 */
const downloadGulpModel = (answers) => {
    if (answers.gulpFile) {
        downloadGulpFile()
    }
    if (answers.gulpTask) {
        downloadGulpDir()
    }
};

/**
 * 下载gulpfile.js
 * @returns 
 */
const downloadGulpFile = () => {
    console.log('开始下载gulpfile.js')
    download(
        'direct:https://github.com/matiastang/gulp-cli/blob/main/gulpfile.js',
        'tmp',
        err => {
            if (err) {
                console.error(err)
                reject()
                return
            }
            console.log('gulpfile.js下载成功')
            resolve()
        }
    )
}

/**
 * 下载gulp目录
 * @returns 
 */
 const downloadGulpDir = () => {
    console.log('开始下载gulp目录')
    download(
        'direct:https://github.com/matiastang/gulp-cli/tree/main/gulp',
        'tmp',
        err => {
            if (err) {
                console.error(err)
                reject()
                return
            }
            console.log('gulp目录下载成功')
            resolve()
        }
    )
}

/**
 * init指令事件
 */
const initAction = () => {
    inquirer.prompt(vuepressPromptList).then((answers) => {
        downloadGulpModel(answers)
    })
};

// 添加docs指令
program
    .command('init')
    .description('初始化gulp')
    .action(initAction)

const gulpAction = () => {
    inquirer.prompt([{
        type: "confirm",
        message: "下载gulpfile.js模板",
        name: "gulpFile",
        prefix: "是否",
        suffix: "？"
    }]).then((answers) => {
        if (answers.gulpFile) {
            downloadGulpFile()
        }
    })
}
// 添加指令
program
    .command('initGulp')
    .description('创建gulpfile.js模板')
    .action(gulpAction)

const taskAction = () => {
    inquirer.prompt([{
        type: "confirm",
        message: "下载gulp指令模板文件夹",
        name: "gulpTask",
        prefix: "是否",
        suffix: "？"
    }]).then((answers) => {
        if (answers.gulpTask) {
            downloadGulpDir()
        }
    })
}
// 添加指令
program
    .command('initTask')
    .description('初始化gulp task目录')
    .action(taskAction)

// program.parse 是将命令参数传入commander 管道中，一般放在最后执行。
program.parse(process.argv)