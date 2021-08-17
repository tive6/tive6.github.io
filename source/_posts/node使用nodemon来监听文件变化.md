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

知识边界: `nodemon` 就像是vue里面的开启`热加载`功能一样，开发者只要放心开发，不用修改一点就需要重新启动项目，进行测试

<!-- more -->

### 使用方法：

1.     安装：npm install nodemon -D
2.     添加配置文件 nodemon.json,内容如下：

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

![Nodemon](https://img-blog.csdnimg.cn/20201218110706478.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxNDk5Nzgy,size_16,color_FFFFFF,t_70)