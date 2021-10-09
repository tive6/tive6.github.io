---
title: chromedrive下载安装和配置
abbrlink: 30ab5f
date: 2021-08-23 11:09:58
tags:
  - Python
  - Selenium
categories:
  - 开发者笔记
---

`ChromeDriver`是google提供的自动化测试接口，是`Selenium`和chrome浏览器进行通信的桥梁，`Selenium`别名是'WebDriver'，`Selenium`通过JsonWireProtocol协议和`ChromeDriver`进行通信，`Selenium`实质上是对这套协议的底层封装，同时提供外部 `WebDriver` 的上层调用类库。

![Selenium](https://tiven.cn/static/img/img-selenium-01-7royM43zcP0bEKzSOe1Cq.jpg)

<!-- more -->

## Selenium介绍

`Selenium`是一个Web的自动化测试工具，最初是为了网站自动化测试而开发的，`Selenium`可以直接运行在浏览器上，他支持所有的主流浏览器，可以接受指令，让浏览器自动加载页面，获取需要的数据，甚至页面截屏。


## ChromeDriver 下载

![ChromeDriver](https://tiven.cn/static/img/img-chromedriver-01-qMzLmubGCZhYZ0L6oFRZY.jpg)

1. 查看使用的Chrome浏览器版本
2. 下载对应版本的chromedrive, 版本可参照Chrome版本与chromedriver兼容版本对照表

| Chrome Version | ChromeDriver Version |
|:---:|:---:|
| 86.0.4240.22 | 86 |
| 85.0.4183.87 | 85 |
| 85.0.4183.83 | 85 |
| 85.0.4183.38 | 85 |
| 84.0.4147.30 | 84 |
| 83.0.4103.14 | 83 |
| 81.0.4044.138 | 81 |
| 81.0.4044.69 | 81 |
| 81.0.4044.20 | 81 |
| 80.0.3987.106 | 80 |
| 80.0.3987.16 | 80 |
| 79.0.3945.36 | 79 |
| 79.0.3945.16 | 79 |
| 78.0.3904.105 | 78 |
| 78.0.3904.70 | 78 |
| 78.0.3904.11 | 78 |
| 77.0.3865.40 | 77 |
| 77.0.3865.10 | 77 |
| 76.0.3809.126 | 76 |
| 76.0.3809.68 | 76 |
| 76.0.3809.25 | 76 |
| 76.0.3809.12 | 76 |
| 75.0.3770.90 | 75 |
| 75.0.3770.8 | 75 |
| 74.0.3729.6 | 74 |
| 73.0.3683.68 | 73 |
| 72.0.3626.69 | 72 |
| 2.46 | 71-73 |
| 2.46 | 71-73 |
| 2.45 | 70-72 |

3. 下载地址：

* [国内淘宝下载源](http://npm.taobao.org/mirrors/chromedriver/ "下载")
* [google的chromedriver官方下载地址](http://chromedriver.storage.googleapis.com/index.html "下载")

4. 下载完解压，`chromedriver.exe`文件放到Python安装目录下的`scripts`文件夹下，就相当于配置了`系统环境变量`。

## 使用

```bash
from selenium import webdriver
proxy="127.0.0.1:8888"
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument("--headless")   #设置无头模式
chrome_options.add_argument('--proxy-server={}'.format(proxy))  #设置代理
# 没有配置path系统环境变量可以指定chromedriver的路径
driver=webdriver.Chrome('D:\dev\chromedriver\chromedriver.exe', chrome_options=chrome_options)
# 配置了path全局变量，则第一个参数可忽略
driver=webdriver.Chrome(chrome_options=chrome_options)
```

---

欢迎访问：[个人博客地址](https://tiven.cn/p/30ab5f/ "天問博客")
