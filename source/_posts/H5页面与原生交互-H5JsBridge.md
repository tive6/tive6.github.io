---
title: H5页面与原生交互-JsBridge
abbrlink: 5790753b
date: 2021-09-28 10:58:42
tags:
  - JS
  - JsBridge
categories:
  - 开发者笔记
top: 5
---

在这个`流量为王`移动互联的时代，大部分互联网公司为了加快项目迭代开发，`H5`在移动端开发的比重逐步增加，`webview`也越来越吃香。
因此，开发过程中必定涉及H5页面与原生交互，自然而然就引出了`JsBridge`。

![JsBridge](https://tiven.cn/static/img/img-js-bridge-7r0NxR6_ZISmidvaZ_CaM.jpg)

<!-- more -->

## 前言  
原生开发一般分为 Android 和 IOS，所以H5端为了兼容开发，一般使用封装好的插件，去统一调用原生端提供的`jsbridge`方法。
推荐插件：`h5-jsbridge`

## 安装

```sh
npm i -S h5-jsbridge
```

## 使用

```js
import JsBridge from 'h5-jsbridge'

/**
 * 函数描述：js注册方法给app调用
 *
 * jsBridge.registerHandler(name, callback(data, appCallback))
 * @param {String} name 方法名
 * @param {Function} callback 回调函数
 * @param {Any} callback.data app返回的数据
 * @param {Function} callback.appCallback app返回的回调
 * @return
 */
JsBridge.registerHandler('funName', function (data, appCallback) {
  console.log(data)
}) 

/**
 * 函数描述：js调用app方法
 *
 * JsBridge.callHandler(name, params, callback)
 * @param {String} name 方法名
 * @param {Object} params 参数
 * @param {Function} callback 回调函数
 * @return
 */
JsBridge.callHandler('funName', { event: 'click' }, function (data) {
  console.log(data)
})
```

## 封装

```js
// client.js
import JSBridge from 'h5-jsbridge';

export default {
  // JS 注册方法，原生端调用
  registerHandler (params, cb) {
    try {
      JSBridge.registerHandler(
        params.funName,
        (data) => {
          cb && cb(data);
        },
      );
    } catch (e) {
      console.log(`Params：${JSON.stringify(params)} \nError：${e}`);
    }
  },
  // JS 调用 原生端 API
  callHandler (params, cb) {
    try {
      JSBridge.callHandler(
        params.funName,
        params.data,
        (data) => {
          cb && cb(data);
        },
      );
    } catch (e) {
      console.log(`Params：${JSON.stringify(params)} \nError：${e}`);
    }
  },
}
```

## 页面调用

```js
import Client from './client.js';

/*
* eg: 
* 关闭webview
* */

Client.callHandler({
  funName: 'H5ToNative',
  data: { type: 'CloseView', params: { type: 'close' } },
})
```

**提示：** 
* 其中 `funName` 和 `data` 都是由原生端定义的。
* 如果项目业务比较多，交互场景各不相同时，可以给`funName`加上命名空间`namespace`。


参考文档：
* https://www.npmjs.com/package/h5-jsbridge

---

欢迎访问：[个人博客地址](//tiven.cn/p/5790753b/ "天問博客")