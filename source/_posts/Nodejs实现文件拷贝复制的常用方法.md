---
title: Nodejs实现文件拷贝复制的常用方法
abbrlink: ba033cf5
date: 2021-08-20 15:52:53
tags:
  - node
  - fs
categories:
  - 开发者笔记
---

做前端开发的童鞋都知道，js是运行在浏览器`沙盒`环境之中，所以`客户端`的js没有权限操作磁盘文件。但是强大的`nodeJS`作为服务器端语言，原生自带`文件系统（fs 模块）`，可以很轻松对文件进行`CRUD`。 本章就是讲述使用nodejs对文件进行`拷贝复制`操作。

![Node-fs](//tiven.cn/assets/img/img-node-fs.jpg)

<!-- more -->

### 1. copyFile

> 异步API：fs.copyFile(src, dest[, mode], callback)
> 异步API：fs.copyFileSync(src, dest[, mode])

*提示：* 默认情况下将创建或覆盖

```js
// 异步
fs.copyFile('./src/index.js','./dist/index.js',function(err){
	if(err) console.log(err)
	else console.log('copy file succeed');
})
// 同步
fs.copyFileSync('01/test.txt', '02/test.txt');
console.log('copy success');
```

### 2. readFile、writeFile

```js
fs.readFile('./src/index.js',function(err,data){
	if(err) throw new Error(err);
	fs.writeFile('./dest/index.js',data,function(err){
		if(err) throw new Error(err);
	})
})
```

### 3. createReadStream、read、write

```js
var file = createReadStream('./src/index.js');
var out = createWriteStream('./dist/index.js');

file.on('data',function(data){
	out.write(data)
});
file.on('end',function(){
	out.end();
})
```

### 4. pipe

```js
let file = createReadStream('./src/index.js');
let out = createWriteStream('./dist/index.js');

file.pipe(out);
```

### 5. cp-file

* 安装

```bash
$ npm install cp-file
```

* 使用

```js
const cpFile = require('cp-file');

(async () => {
	await cpFile('source/unicorn.png', 'destination/unicorn.png');
	console.log('File copied');
})();
```

* 参考文档：
1. http://nodejs.cn/api/fs.html
2. https://www.npmjs.com/package/cp-file

--- 

欢迎访问：[个人博客地址](//tiven.cn/p/ba033cf5/ "天問博客")