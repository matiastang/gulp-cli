/*
 * @Author: tangdaoyong
 * @Date: 2021-05-07 16:09:51
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-29 16:07:50
 * @Description: Vuepress相关
 */
const gulp = require('gulp')
const jeditor = require('gulp-json-editor');// 编辑json
const constant = require('../constant/constant');

/**
 * 添加Vuepress相关运行指令
 * @param {*} cb 
 */
const vuepressAddScripts = function (cb) {
    gulp.src(constant.packageUrl)
        .pipe(jeditor(function(json) {
            json.scripts = Object.assign({
                "docs:dev": "vuepress dev docs",
                "docs:build": "vuepress build docs"
            }, json.scripts)
            return json; // must return JSON object.
        }))
        .pipe(gulp.dest('./'));
    cb();
};

/**
 * 添加webpack相关运行指令
 * @param {*} cb 
 */
 const webpackAddScripts = function (cb) {
    gulp.src(constant.packageUrl)
        .pipe(jeditor(function(json) {
            json.scripts = Object.assign({
                "build:prod": "webpack --config webpack.config.babel.js --mode=production",
                "build:dev": "webpack --config webpack.config.babel.js --mode=development"
            }, json.scripts)
            return json; // must return JSON object.
        }))
        .pipe(gulp.dest('./'));
    cb();
};

// 导出
module.exports = {
    vuepressAddScripts,
    webpackAddScripts
}