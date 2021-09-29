---
title: 好用到手软的NPM包
abbrlink: 5f5cbec7
date: 2021-09-24 10:58:05
tags:
  - NPM
  - node
categories:
  - 开发者笔记
top: 6
comments: true
---

`npm`是`JavaScript`世界的`包管理`工具，并且是 `Node.js` 平台的默认包管理工具。
在开发过程中经常要使用第三方封装好的`NPM工具包`，所以日积月累都记录下来，以免突然用的时候找不到。

![NPM](https://tiven.cn/static/img/img-npm-01-j8P88uTxHHNAtdwpd6WoH.jpg)

<!-- more -->

## semver

**描述：** `NPM` 的 `semver` 规范相关的工具包，可以判断版本、获取版本。

* 安装

```sh
npm i -D semver
```

* 使用

```js
const semver = require('semver')

// 判断是否符合规范
semver.valid('1.2.3') // '1.2.3'
semver.valid('a.b.c') // null
// 判断 a 版本是否比 b 版本高
semver.gt('1.2.3', '9.8.7') // false
// 判断 a 版本是否比 b 版本低
semver.lt('1.2.3', '9.8.7') // true
// 判断符合某个版本范围的最低版本
semver.minVersion('>=1.0.0') // '1.0.0'
```

* 使用文档：[semver](https://www.npmjs.com/package/semver "点击查看")

--- 

## rimraf

**描述：** 相当于`Linux`系统的 `rm -rf` 命令，总之非常的好用。

* 安装

```sh
npm i -D rimraf
```

* 使用

```js
const rimraf = require('rimraf');

rimraf('./dir/test.js', error => {
  if (!error) {
    console.log('删除成功');
  }
});
```

* 使用文档：[rimraf](https://www.npmjs.com/package/rimraf "点击查看")

--- 

## shelljs

**描述：** 用 `js` 来实现 `shell` 命令

* 安装

```sh
npm i -D shelljs
```

* 使用

```js
const shell = require('shelljs');

// 判断是否有相关开发环境
function hasGitNpm() {
  if (!shell.which('git')) {
    console.log('Sorry, this script requires git');
    shell.exit(1);
  }

  if (!shell.which('npm')) {
    console.log('Sorry, this script requires npm');
    shell.exit(1);
  }
}

hasGitNpm();

// 安装 npm 包
function installPkg(pkg, type) {
  const npm = shell.which('npm');
  if (!npm) {
    console.log('请先安装 npm');
    return;
  }
  const { code } = shell.exec(
    `${npm.stdout} install ${pkg} ${type || '--save'}`
  );
  if (code) {
    console.log(`安装 ${pkg} 失败，请手动安装`);
  }
}

installPkg('lodash');
```

* 使用文档：[shelljs](https://www.npmjs.com/package/shelljs "点击查看")

--- 

## glob / globby

**描述：** `glob` 是一种`文件匹配`模式，起源于 `Unix`，比如我们常见 `*.js` 匹配所有 js 文件就是使用了 `glob` 模式。`globby`是`glob`的增强版，异步更友好。

* 安装

```sh
npm i -D glob
```

* 使用

```js
const glob = require("glob")

// options is optional
glob("**/*.js", options, function (er, files) {
  // files is an array of filenames.
  // If the `nonull` option is set, and nothing
  // was found, then files is ["**/*.js"]
  // er is an error object or null.
})
```

* 使用文档：[glob](https://www.npmjs.com/package/glob "点击查看")

---

## fs-extra

**描述：** Node 内置了 `fs` 模块供开发者和文件系统交互，但是用过的同学都知道，它的能力还是挺有限的。所以，在 fs 的基础上，社区提供了 `fs-extra` 工具包增强文件系统交互，并且提供了 `Promise` 的调用方式。

* 安装

```sh
npm i -S fs-extra
```

* 使用

```js
const fse = require('fs-extra');

(async () => {
  // 确认目录是否存在，如果不存在会创建目录
  await fse.ensureDir('./dir');

  // 复制文件
  await fse.copy('./dir/test.js', './dir/test2.js');

  // 读 JSON 文件
  const aJSON = await fse.readJSON('./dir/a.json');
  console.log(typeof aJSON, aJSON);

  // 写 JSON 文件
  await fse.writeJSON('./dir/test.json', { a: 1 }, { spaces: 2 });

  // 写 JSON 文件，如果目录不存在会创建
  await fse.outputJson('./dir/test.json', { a: 1 }, { spaces: 2 });

  // 删文件
  await fse.remove('./dir/test.json');
})();
```

* 使用文档：[fs-extra](https://www.npmjs.com/package/fs-extra "点击查看")

---

## FingerprintJS

**描述：** `FingerprintJS` 是一个`浏览器指纹库`，可通过查询浏览器属性并从中计算出散列的访问者标识符，从而生成一个`用户指纹`。

* 安装

```sh
npm i -D @fingerprintjs/fingerprintjs
```

* 使用

```js
import FingerprintJS from '@fingerprintjs/fingerprintjs'

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load()

;(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise
  const result = await fp.get()

  // This is the visitor identifier:
  const visitorId = result.visitorId
  console.log(visitorId)
})()
```

* 使用文档：[FingerprintJS](https://www.npmjs.com/package/@fingerprintjs/fingerprintjs "点击查看")

---

## nanoid

**描述：** 一个小巧的、安全的、URL友好的、独特的 JavaScript 字符串 ID 生成器。

* 安装

```sh
npm i -D nanoid
```

* 使用

```js
import { nanoid } from 'nanoid'
nanoid()   //=> "V1StGXR8_Z5jdHi6B-myT"
nanoid(4)  //=> "Mi4S"
```

* 使用文档：[nanoid](https://www.npmjs.com/package/nanoid "点击查看")

---

## uuid

**描述：** 创建随机 `UUID` 。

* 安装

```sh
npm i -D uuid
```

* 使用

```js
const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
```

* 使用文档：[uuid](https://www.npmjs.com/package/uuid "点击查看")

---

## szyutils

**描述：** 前端通用工具库。提供了判断`浏览器类型`、`格式化各种日期`、`获取url参数`、`queryString转对象`、`防抖函数`、`节流函数`等常用函数

* 安装

```sh
npm i -D szyutils
```

* 使用文档：[szyutils](https://www.npmjs.com/package/szyutils "点击查看")

---

## spy-debugger

**描述：** 一站式页面调试、抓包工具。远程调试任何手机浏览器页面，任何手机移动端webview（如：微信，HybridApp等）。支持HTTP/HTTPS，无需USB连接设备。

* 安装

```sh
npm i -g spy-debugger
```

* 使用文档：[spy-debugger](https://www.npmjs.com/package/spy-debugger "点击查看")

---

>积土成山，风雨兴焉；
>积水成渊，蛟龙生焉。

[comment]: <> (---)

欢迎访问：[个人博客地址](https://tiven.cn/p/5f5cbec7/ "天問博客")