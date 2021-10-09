---
title: node执行cmd或shell命令
abbrlink: a3283e55
date: 2021-10-08 15:12:55
tags:
  - Shell
  - node
categories:
  - 学习笔记
top: 4
---

在实现`前端工程化`的过程中，经常需要在一个js脚本中去执行其他`node`/`npm`或者其他`shell`命令。本篇就介绍两种`node`调用`shell`的方法。

![Node执行Shell命令](https://tiven.cn/static/img/img-node-02-1jXsPFoG01-MrGe6Xa7Rr.jpg)

<!-- more -->

## 一、node原生模块：`child_process`

* node原生API介绍：
`child_process.exec()`: 衍生 shell 并在该 shell 中运行命令，完成后将 stdout 和 stderr 传给回调函数。
`child_process.execFile()`: 与 child_process.exec() 类似，不同之处在于，默认情况下，它直接衍生命令，而不先衍生 shell。
`child_process.fork()`: 衍生新的 Node.js 进程并使用建立的 IPC 通信通道（其允许在父子进程之间发送消息）调用指定的模块。
`child_process.execSync()`: child_process.exec() 的同步版本，其将阻塞 Node.js 事件循环。
`child_process.execFileSync()`: child_process.execFile() 的同步版本，其将阻塞 Node.js 事件循环。
  
* 使用

```js
const process = require("child_process");

// 执行 npm run build 命令
;(function() {
  process.exec('npm run build', (error, stdout, stderr) => {
    if (!error) {
      // 成功
    } else {
      // 失败
    }
  });
})();
```

## 二、npm包：`shelljs`

* 安装

```sh
npm i -D shelljs
```

* 使用

```js
const shell = require('shelljs');

// 同步
// 执行 git status 命令
const { code } = shell.exec('git status');

/*
* 返回一个对象
* 可以根据 code 值来判断当前命令是否执行成功
* code === 0 代表成功
* */

// 异步回调
// 执行 git add . 命令
shell.exec('git add .', function(code, stdout, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
  if (code===0) {
    console.log('成功')
    // do something
  }
});
```

参考文档：
* http://nodejs.cn/api/child_process.html
* https://www.npmjs.com/package/shelljs

---

欢迎访问：[个人博客地址](https://tiven.cn/p/a3283e55/ "天問博客")