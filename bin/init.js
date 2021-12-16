#!/usr/bin/env node
// 表明是node脚本，需要node环境
/*
 * @Author: matiastang
 * @Date: 2021-12-16 17:22:58
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-16 18:58:21
 * @FilePath: /gulp-cli/bin/init.js
 * @Description: 指令
 */
const program = require('commander');// cli工具
const inquirer = require('inquirer');// cli交互
const shell = require('shelljs');// [shell执行命令](https://www.npmjs.com/package/shelljs)
const download = require('download-git-repo');
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
    message: "下载gulp模板",
    name: "model",
    prefix: "是否",
    suffix: "？"
}];

/**
 * 下载gulp模板
 */
const downloadGulpModel = () => {
    download(
        'https://github.com/matiastang/gulp-cli.git#master',
        'test',
        {
            clone: true
        },
        function (err) {
            if (err) {
                console.error(err)
                return
            }
            console.log('Success')
        }
    )
    // // 获取指令
    // let docsDefault = defaultCommand();
    // let ansCommand = answersCommand(answers)

    // // 执行指令
    // shell.exec(`
    //     ${docsDefault}
    //     ${ansCommand}
    // `, (error, stdout, stderr) => {
    //     if (error) {
    //         console.error(`docs 指令 exec error: ${error}`)
    //         return
    //     }
    //     console.log(`${stdout}`)
    //     console.log(`${stderr}`)
    // });
};

/**
 * init指令事件
 */
const initAction = () => {
    inquirer.prompt(vuepressPromptList).then((answers) => {
        if (answers.model) {
            downloadGulpModel()
        }
    })
};

// 添加docs指令
program
    .command('init')
    .description('初始化gulp目录')
    .action(initAction)

// program.parse 是将命令参数传入commander 管道中，一般放在最后执行。
program.parse(process.argv)