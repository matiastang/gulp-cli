#!/usr/bin/env node
// 表明是node脚本，需要node环境
/*
 * @Author: matiastang
 * @Date: 2021-12-16 17:22:58
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-21 13:47:35
 * @FilePath: /gulp-cli/bin/init.js
 * @Description: 指令
 */
const program = require('commander');// cli工具
const inquirer = require('inquirer');// cli交互
const shell = require('shelljs');// [shell执行命令](https://www.npmjs.com/package/shelljs)
const download = require('download-git-repo');// 下面代码用到了 download-git-repo 和 rimraf 两个第三方库
const package = require('../package.json');// package包
const packageRoot = './tmp'

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
        'direct:https://github.com/matiastang/gulp-download-module/gulpfile.js#main',
        // 'direct:https://github.com/matiastang/gulp-cli/blob/main/gulpfile.js',
        `${packageRoot}/`,
        err => {
            if (err) {
                console.error(err)
                return
            }
            console.log('gulpfile.js下载成功')
        }
    )
}

/**
 * 下载gulp目录
 * @returns 
 */
const downloadGulpDir = () => {
    console.log('开始下载gulp目录')
    // 执行指令
    shell.exec('mkdir -vp ./tmp/gulp/{constant/,tasks/}', (error, stdout, stderr) => {
        if (error) {
            console.error(`docs 指令 exec error: ${error}`)
            return
        }
        // config.js
        download(
            'direct:https://github.com/matiastang/gulp-cli/blob/main/gulp/config.js',
            `${packageRoot}/gulp`,
            err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('gulp config.js下载成功')
            }
        )
        // constant.js
        download(
            'direct:https://github.com/matiastang/gulp-cli/blob/main/gulp/constant/constant.js',
            `${packageRoot}/gulp/constant`,
            err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('gulp constant/constant.js下载成功')
            }
        )
        // git.js
        download(
            'direct:https://github.com/matiastang/gulp-cli/blob/main/gulp/tasks/git.js',
            `${packageRoot}/gulp/tasks`,
            err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('gulp tasks/git.js下载成功')
            }
        )
        // npm.js
        download(
            'direct:https://github.com/matiastang/gulp-cli/blob/main/gulp/tasks/npm.js',
            `${packageRoot}/gulp/tasks`,
            err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('gulp tasks/npm.js下载成功')
            }
        )
        // scripts.js
        download(
            'direct:https://github.com/matiastang/gulp-cli/blob/main/gulp/tasks/scripts.js',
            `${packageRoot}/gulp/tasks`,
            err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('gulp tasks/scripts.js下载成功')
            }
        )
        // version.js
        download(
            'direct:https://github.com/matiastang/gulp-cli/blob/main/gulp/tasks/version.js',
            `${packageRoot}/gulp/tasks`,
            err => {
                if (err) {
                    console.error(err)
                    return
                }
                console.log('gulp tasks/version.js下载成功')
            }
        )
    });
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
// program
//     .command('init')
//     .description('初始化gulp')
//     .action(initAction)

// const gulpAction = () => {
//     inquirer.prompt([{
//         type: "confirm",
//         message: "下载gulpfile.js模板",
//         name: "gulpFile",
//         prefix: "是否",
//         suffix: "？"
//     }]).then((answers) => {
//         if (answers.gulpFile) {
//             downloadGulpFile()
//         }
//     })
// }

// 添加指令
// program
//     .command('initGulp')
//     .description('创建gulpfile.js模板')
//     .action(gulpAction)

// const taskAction = () => {
//     inquirer.prompt([{
//         type: "confirm",
//         message: "下载gulp指令模板文件夹",
//         name: "gulpTask",
//         prefix: "是否",
//         suffix: "？"
//     }]).then((answers) => {
//         if (answers.gulpTask) {
//             downloadGulpDir()
//         }
//     })
// }

// 添加指令
program
    // .command('initTask')
    // .description('初始化gulp task目录')
    // .action(taskAction)

/**
 * 下载gulp模板
 * @returns 
 */
const downloadModule = () => {
    console.log('开始下载gulp模板')
    download(
        // 'direct:https://github.com/matiastang/gulp-cli.git#main',
        'direct:https://github.com/matiastang/gulp-download-module.git#main',
        `${packageRoot}/`,
        { clone: true },
        err => {
            if (err) {
                console.error(err)
                return
            }
            console.log('gulp模板下载成功')
        }
    )
}

const moduleAction = () => {
    inquirer.prompt([{
        type: "confirm",
        message: "下载gulp模板",
        name: "gulpModel",
        prefix: "是否",
        suffix: "？"
    }]).then((answers) => {
        if (answers.gulpModel) {
            downloadModule()
        }
    })
}
    
// 添加指令
program
    .command('add')
    .description('初始化gulp模板')
    .action(moduleAction)

// program.parse 是将命令参数传入commander 管道中，一般放在最后执行。
program.parse(process.argv)