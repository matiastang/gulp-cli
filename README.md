<!--
 * @Author: matiastang
 * @Date: 2021-12-16 17:19:49
 * @LastEditors: matiastang
 * @LastEditTime: 2021-12-21 13:57:38
 * @FilePath: /gulp-cli/README.md
 * @Description: 
-->
# matias-gulp-cli

`matias-gulp-cli`方便项目快速集成`gulp`到工程中。

## 使用

1. 添加
```
$ pnpm add -g matias-gulp-cli
```
2. 添加gulp模板
* 添加了模板之后，会在目录下下载`gulpfile.js`和`gulp`文件夹。其中`gulp->tasks`可以随意添加自定义`gulp`指令文件。将自动注册其中的`task`。
```
$ gulp-cli init
```
3. 查看默认添加gulp指令
```
$ gulp --tasks
[13:50:00] Tasks for ~/matias/MT/MTGithub/npm/gulp-cli/gulpfile.js
[13:50:00] ├── git_version
[13:50:00] ├── git_first
[13:50:00] ├── git_feat
[13:50:00] ├── git_fix
[13:50:00] ├── npmPackagePush
[13:50:00] ├── vuepressAddScripts
[13:50:00] ├── webpackAddScripts
[13:50:00] ├── versionPrerelease
[13:50:00] ├── versionPatch
[13:50:00] ├── versionMinor
[13:50:00] └── versionMajor
```

**注意** `gulp-cli init`指令下载的内容为`https://github.com/matiastang/gulp-download-module.git`项目中的内容，包含`.git`文件。如果是新项目就没什么问题，如果是已经关联了`git`的项目，需要自己处理一下（或者直接去项目中拉取代码拷贝`gulpfile.js`和`gulp`文件夹过来）。