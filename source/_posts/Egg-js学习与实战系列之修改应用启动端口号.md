---
title: Egg.js学习与实战系列 · 修改应用启动端口号
tags:
  - Egg.js
  - node
categories:
  - 开发者笔记
abbrlink: 9836898b
date: 2021-09-12 21:41:21
---

默认情况`egg.js`启动的端口是`7001`，如果该端口被占用，想修改其他端口的话，那么就要进行如下配置：

<!-- more -->

* 在 `config/config.default.js` 配置如下代码：

```javascript
/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // code start
    config.cluster = {
        listen: {
            path: '',
            port: 8001,
            hostname: '127.0.0.1', // 0.0.0.0
        }
    }
    // code end
    
    return {
        ...config,
    };
};
```

---

欢迎访问：[个人博客地址](//tiven.cn/p/9836898b/ "天問博客")