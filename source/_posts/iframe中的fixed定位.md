---
title: iframe中的fixed定位
tags:
  - CSS
  - iframe
categories:
  - 开发者笔记
abbrlink: 702202dd
date: 2019-09-02 16:20:46
---

`position` 属性规定元素的定位类型。任何元素都可以定位，不过绝对或固定元素会生成一个块级框，而不论该元素本身是什么类型。相对定位元素会相对于它在正常流中的默认位置偏移。
其中`fixed` 生成绝对定位的元素，相对于`浏览器窗口`进行定位。但是页面中如果嵌套了`iframe`，该是怎么定位呢？一起来看看。

![CSS](//tiven.cn/assets/img/img-css-fixed.jpg)

<!-- more -->

* 主页面`index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>iframe中的fixed定位</title>
  <style>
      * {
          padding: 0;
          margin: 0;
      }

      html, body {
          height: 100%;
          background-color: #f1f1f1;
      }
  </style>
</head>
<body>

<br>
<br>

<iframe src="./innerPage.html" frameborder="0" width="100%" height="200px"></iframe>

</body>
</html>
```

* `iframe`嵌套页面`innerPage.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>innerPage</title>
  <style>
      * {
          padding: 0;
          margin: 0;
      }

      html, body {
          height: 100%;
          background-color: #f8ac59;
      }

      .fixed-box {
          width: 100px;
          height: 100px;
          background-color: #1ab394;
          position: fixed;
          bottom: 20px;
          right: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
      }
  </style>
</head>
<body>

<br>
<br>

<h1>这是一个iframe页面区域</h1>

<div class="fixed-box">
  iframe inner
  fixed-box
</div>

</body>
</html>
```

* 浏览器展示效果

![iframe-Fixed](//tiven.cn/assets/img/img-iframe-fixed.png)

## 总结

`fixed`相对于`浏览器窗口`进行定位。其中`iframe`是一个独立的窗口，所以在`iframe`中的`fixed`定位，是相对于当前所在的`iframe`。

---

欢迎访问：[个人博客地址](//tiven.cn/p/702202dd/ "天問博客")

