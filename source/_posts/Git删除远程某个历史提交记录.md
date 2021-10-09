---
title: Git删除远程某个历史提交记录
tags:
  - Git
categories:
  - 开发者笔记
abbrlink: b87d03eb
date: 2021-07-13 15:02:06
---

在开发中经常会遇到在本地测试的代码或者隐私信息，一不小心提交到了远程仓库，即便立即删除了再提交，但是上次的提交记录在远程依旧可以查看。 特别是像账号密码、key文件这种，很可能造成隐私泄露。

![Git](https://tiven.cn/static/img/img-git-logo-dHEX-4INSJrbE5YrfaHQk.jpg)

<!-- more -->

分两种情况：

## 一、删除最后一次提交

这种情况比较简单，主要操作分两步：

* 第一步：回滚上一次提交

```bash
git reset --hard HEAD^
```

* 第二步：强制提交本地代码

```bash
git push origin master -f
```
由于本地`reset`之后本地库落后于远程几个版本，所以需要使用`-f`强制提交。

## 二、删除指定commit提交（非最后一次提交）

图例：
![Git](https://tiven.cn/static/img/img-git-commit-01-x25faB9jG9u_m7xUxh28f.jpg)

*假定：* 现在我们要删除`commit--2`这条提交记录

1. 第一步：查看提交日志，获取要删除记录`commit--2`的`前一次`提交`commit--1`的提交ID

***特别提示：*** `rebase -i`的ID一定是删除记录的前一次的提交ID

```bash
git reflog
```

展示如下内容：

```bash
b08ec3f HEAD@{4}: commit: commit--3
39841d1 HEAD@{5}: commit: commit--2
35f96e1 HEAD@{6}: commit: commit--1
```

拿到对应的提交ID为`35f96e1`

2. 第二步：`rebase`操作

```bash
git rebase -i 35f96e1
```

* 执行完这个命令后，就可以看到 `35f96e1` 后的所有 commit 记录。如下图
* 默认是使用 vim 编辑器打开了commit log list。然后我们就可以针对我们不需要的某些 log 进行删除。
* 把原本的 `pick` 单词修改为 `drop` 就表示该ID对应的 commit log 我们需要删除。
* vim保存退出。

![Git](https://tiven.cn/static/img/img-git-commit-02-JbyV5dXmPuE3pRQ66ofY_.jpg)


3. 第三步：解决冲突，强制推送更新到远程

```bash
git add .                   # 冲突时使用
git commit -m "new commit"  # 冲突时使用
git rebase --continue       # 冲突时使用
git push origin master -f
```

再查看远程的提交记录，发现`commit--2`就没有了。

---

欢迎访问：[个人博客地址](https://tiven.cn/p/b87d03eb/ "天問博客")