---
title: node使用nodemon来监听文件变化
abbrlink: 1f405e26
date: 2021-08-17 23:46:16
tags:
  - node
  - nodemon
categories:
  - 开发者笔记
---

`Nodemon` 是一款非常实用的工具，用来监控你 `node.js` 源代码的任何变化和自动重启你的服务器。`nodemon` 就像是vue里面的开启`热加载`功能一样，开发者只要放心开发，不用修改一点就需要重新启动项目。

![Nodemon](//tiven.cn/assets/img/img-nodemon-01.png)

<!-- more -->

### 安装

```bash
# 全局安装
npm install -g nodemon
# or
# 项目局部安装
npm install -D nodemon
```

### 简单监听文件变化

* 使用 `--watch` 参数，在 `package.json` 中配置`scripts`脚本使用。
* 当然也可以同时监听多个文件，如 `dev:test` 命令。
* 以vue项目为例，监听`vue.config.js`文件的变化。当运行 `npm run dev` 命令后， `vue.config.js`配置改变会自动重启服务。

```bash
  "scripts": {
    "start": "npm run serve",
    "dev": "nodemon --watch vue.config.js --exec \"npm start\"",
    "dev:test": "nodemon --watch vue.config.js --watch babel.config.js --exec \"npm start\"",
  }
```

### 项目配置化监听

* 由于 `nodemon` 监听的文件范围是整个node项目可能有点广，所以通过配置文件监听我们需要的。
* 项目根目录下新建 `nodemon.json` 文件，配置如下：

```javascript
{
// 需要监听的文件后缀名或目录
  "watch": [
    "src/",
    "*.js",
    "*.json",
  ],
  // 当前的开发环境
  "env": {
    "NODE_ENV": "development"
  },
  // 不需要监听的文件或者文件夹
  "ignore": [
    "package.json",
    "nodemon.json",
    "public/*",
    "node_modules/**/node_modules",
    ".git"
  ]
}
```

#### `package.json`中`scripts`脚本配置

```bash
 "scripts": {
    "start": "npx nodemon -x npm run serve",  # 使用nodemon -x 执行脚本， 启动服务
    "serve": "node index"
  },
```

#### 效果：

![Nodemon](//tiven.cn/assets/img/img-nodemon-02.jpg)

* 参考文档：
1. https://www.npmjs.com/package/nodemon

---

欢迎访问：[个人博客地址](//tiven.cn/p/1f405e26/ "天問博客")