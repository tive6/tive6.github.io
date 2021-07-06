---
title: windows常用shell命令之文件操作
date: 2020-07-06 10:28:51
tags:
  - shell
---

1. Windows的`Shell`命令又是Windows的`CMD`命令。而cmd命令又是原来MS-DOS系统保留下来
2. Windows Shell命令是基于配置好的Path环境变量，对Shell命令在Path路径中依次从前至后搜寻到对应命名的可执行入口

![Shell](//tiven.cn/assets/img/img-shell.jpg)

<!--more-->

### windows常用shell命令

```bash
# 打开命令行窗口
Win + R键
输入 cmd

# 创建文件夹
md folderName
mkdir folderName

# 创建多层文件夹
md 01\02

# 删除空文件夹
rmdir folderName
rd folderName

# 删除有内容文件夹 提示是否删除？
rd /s folderName

# 直接删除
rd /s /q folderName

# 删除单一文件
del 0.js

# 创建文件
type nul > demo.txt

# 创建并编辑文件
echo 'Hello World' > test.js

# 显示一个目录中的文件和子目录
dir

```