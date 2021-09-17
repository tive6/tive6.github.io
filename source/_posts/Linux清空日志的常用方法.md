---
title: Linux清空日志的常用方法
abbrlink: af12c854
date: 2021-09-17 11:26:46
tags:
  - Shell
  - Linux
categories:
  - 开发者笔记
---

常见的日志例如：数据库的logs、nginx的logs，一般都不能直接删除，最好只清空内容，搜索了半天记录一下`清空日志`的常用方法。

![Linux Shell](https://tiven.cn/static/img/img-linux-shell-ZnFr7xgPry5AGM_GP4za9.jpg)

<!-- more -->

## 第一种：cat /dev/null > filename

```sh
cat /dev/null > filename
```


## 第二种：: > filename

```sh
: >  filename
```


## 第三种：> filename

```sh
>  filename
```


## 第四种：echo "" > filename

```sh
echo "" > filename
```


## 第五种：echo > filename

```sh
echo > filename
```


---

欢迎访问：[个人博客地址](//tiven.cn/p/af12c854/ "天問博客")