---
title: JS调用浏览器的打印功能
abbrlink: e9eb7987
date: 2021-09-23 09:43:52
tags:
  - JS
  - 打印 
categories:
  - 开发者笔记
---

最近做一个后台管理系统，其中有个用户需求要求调用`浏览器打印`的功能去打印订单，本来以为需要用户手动（`Ctrl+P`）、或者打开`右键菜单`，再选择打印功能。后来经过查询文档，JS提供了调用浏览器打印功能的API。

![JS 打印](https://tiven.cn/static/img/img-js-print-zZAKwhw2hYdbZ6bMy1WkN.jpg)

<!-- more -->

页面（全屏弹窗）内容设计如上图所示：

其中页面右下方有两个按钮：
* `打印`按钮，调用浏览器的默认打印功能
* `取消`按钮，关闭当前全屏展示的弹窗

## 打印按钮点击事件

```js
window.print();
```

这样可以调用浏览器打印功能，但是打印预览页面上会出现右下方的两个按钮，这肯定是用户不想看到的。
因此还需要根据`CSS媒体查询`来区分：

## 调起打印时去掉部分元素（打印按钮）

```css
/* 给需要去除的元素添加 `not-print-content` 类样式 */

@media print {
  .not-print-content {
      display: none;
  }
}
```

## 去掉页眉页脚

```css
/* 使用css去除 */
@page { margin: 0; }
```

* `谷歌浏览器`可在`打印预览` > `更多设置` > `选项` 中去除 `页眉和页脚` 的勾选
* 如果表头或者表格中设置了背景颜色，需要在更多设置中勾选`背景图形`选项

![打印预览](https://tiven.cn/static/img/img-print-01-X6aUE_SEGiOHXHQO6F0KQ.jpg)

## `IE`去掉页眉页脚的方法

```js
//打印按钮事件
function print() {
  if (!!window.ActiveXObject || "ActiveXObject" in window) {
    //是否ie
    remove_ie_header_and_footer();
  }
  window.print();
}
//去掉页眉页脚
function remove_ie_header_and_footer() {
  var hkey_path =
    "HKEY_CURRENT_USER\\Software\\Microsoft\\Internet Explorer\\PageSetup\\";
  try {
    var RegWsh = new ActiveXObject("WScript.Shell");
    RegWsh.RegWrite(hkey_path + "header", "");
    RegWsh.RegWrite(hkey_path + "footer", "");
  } catch (e) {}
}
```

---

欢迎访问：[个人博客地址](https://tiven.cn/p/e9eb7987/ "天問博客")