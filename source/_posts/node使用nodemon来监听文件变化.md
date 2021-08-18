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

### 使用方法：

1. 安装：`npm install -g nodemon`    # 全局安装
2. 添加配置文件 `nodemon.json`
   
内容如下：

```javascript
由于nodemon 监听的文件范围是整个node项目，有点广，所以通过配置文件监听我们需要的。
{
// 需要监听的文件后缀名
  "watch": [
    "*.js",
    "*.json"
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

### package.json 的配置

```javascript
 "scripts": {
    "start": "npx nodemon -x npm run serve",  // 使用nodemon -x 执行脚本， 启动服务
    "serve": "node index"
  },
```

### 效果：

![Nodemon](//tiven.cn/assets/img/img-nodemon-02.jpg)

* 参考文档：
1. https://www.npmjs.com/package/nodemon
