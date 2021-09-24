---
title: JS常见易错点
abbrlink: a8974376
date: 2020-09-18 17:38:14
tags:
  - JS
categories:
  - 开发者笔记
top: 4
---

`Javascript`是一门`弱类型`语言，很灵活，学习门槛低，容易上手。但同时也容易出现误区，遇到很多坑。本篇就专门用来记录日常开发中的易错点。

![Javascript](https://tiven.cn/static/img/img-js-01-an40onMK-Y-Y6IeYxOwDH.jpg)

<!-- more -->

## 参数为`引用类型`的函数

* eg：

```js
let object = { a: 0 }; 
function fun(obj) {
  obj.a = 1;       
  obj = { a: 2 };  
  obj.b = 2;       
}
fun(object);
console.log(object);
// 对于这个输出结果估计很多人都容易出错  
// 你想的结果：
{ a: 2, b: 2 }
// 实际的结果：
{ a: 1 }
```

### 解析：
1. `obj.a = 1` 引用类型可直接修改新增属性值
2. `obj = { a: 2 }` 改变了引用类型指向
3. `obj.b = 2` 新的obj属性值改变 和 `原object` 无关

---

欢迎访问：[个人博客地址](https://tiven.cn/p/a8974376/ "天問博客")