/*
 * @Author: tangdaoyong
 * @Date: 2021-05-07 15:18:36
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-29 16:08:19
 * @Description: version 相关(更新package.json中的版本号：x.y.z-alpha.0)
 */
const gulp = require('gulp')
const bump = require('gulp-bump');// 更新version，gulp-update-version
const constant = require('../constant/constant');
/**
 * 更新预发布版本号, 开发中版本, 可能会有较大改动.
 * @param {*} cb 
 */
const versionPrerelease = function (cb) {
    gulp.src(constant.packageUrl)
        .pipe(plugins.bump({
            type: 'prerelease'
        }))
        .pipe(gulp.dest('./'));
    cb();
};

/**
 * 更新 Z 版本号, 修复bug, 兼容老版本
 * @param {*} cb 
 */
const versionPatch = function (cb) {
    gulp.src(constant.packageUrl)
        .pipe(bump({
            type: 'patch'
        }))
        .pipe(gulp.dest('./'));
    cb();
}
/**
 * 更新 Y 版本号, 兼容老版本
 * @param {*} cb 
 */
const versionMinor = function (cb) {
    gulp.src(constant.packageUrl)
        .pipe(bump({
            type: 'minor'
        }))
        .pipe(gulp.dest('./'));
    cb();
}
/**
 * 更新 X 版本号, 不兼容老版本
 * @param {*} cb 
 */
const versionMajor = function (cb) {
    gulp.src(constant.packageUrl)
        .pipe(bump({
            type: 'major'
        }))
        .pipe(gulp.dest('./'));
    cb();
}
// 导出
module.exports = {
    versionPrerelease,
    versionPatch,
    versionMinor,
    versionMajor
}