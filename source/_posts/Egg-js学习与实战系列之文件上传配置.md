---
title: Egg.js学习与实战系列 · 文件上传配置
abbrlink: a31793d2
date: 2021-09-18 17:41:20
tags:
  - Egg.js
  - node
  - Upload
categories:
  - 开发者笔记
---

在使用`Egg.js`搭建文件上传服务时，遇到了几个一般新手都会遇到的坑。
经查阅官方文档，Egg框架中默认使用`egg-multipart`插件进行文件上传，所以上传文件前需要做相关的配置。

![EggJS](https://tiven.cn/static/img/img-eggjs-upload-MELXmFxfW1mefQpRNM_1g.jpg)

<!-- more -->

## 上传文件提示： `filetype undefined` （图片可以上传，不报错）

* 原因：没有给egg指定上传文件的类型

**解决方法：** 在`config`中添加如下配置

```js
// config/config.default.js
config.multipart = {
  mode: 'file',  // 对应文件类型 
}
```

## 上传 `txt` 文件提示：`Invalid filename`

* 原因：`egg-multipart`有对上传文件的后缀名限制的白名单(whitelist)，`.txt`后缀没有在默认whitelist中，导致上传失败。

* 默认白名单：

```js
const whitelist = [
  // images
  '.jpg', '.jpeg', // image/jpeg
  '.png', // image/png, image/x-png
  '.gif', // image/gif
  '.bmp', // image/bmp
  '.wbmp', // image/vnd.wap.wbmp
  '.webp',
  '.tif',
  '.psd',
  // text
  '.svg',
  '.js', '.jsx',
  '.json',
  '.css', '.less',
  '.html', '.htm',
  '.xml',
  // tar
  '.zip',
  '.gz', '.tgz', '.gzip',
  // video
  '.mp3',
  '.mp4',
  '.avi',
];
```

**解决方法：** 在`config`中添加如下配置

```js
// config/config.default.js
config.multipart = {
  fileExtensions: [
    '.txt',
  ],
}
```

参考文档：
* https://eggjs.org/zh-cn/plugins/multipart.html

---

欢迎访问：[个人博客地址](https://tiven.cn/p/a31793d2/ "天問博客")