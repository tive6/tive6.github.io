---
title: 好用到手软的NPM包
abbrlink: 5f5cbec7
date: 2021-09-24 10:58:05
tags:
  - NPM
  - node
categories:
  - 开发者笔记
top: 5
comments: true
---

`npm`是`JavaScript`世界的`包管理`工具，并且是 `Node.js` 平台的默认包管理工具。
在开发过程中经常要使用第三方封装好的`NPM工具包`，所以日积月累都记录下来，以免突然用的时候找不到。

![NPM](https://tiven.cn/static/img/img-npm-01-j8P88uTxHHNAtdwpd6WoH.jpg)

<!-- more -->

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