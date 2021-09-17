---
title: UmiJS学习与实战系列 · 非根目录配置部署
abbrlink: acd6a378
date: 2021-09-07 18:24:15
tags:
  - UmiJS
  - React
categories:
  - 开发者笔记
---

当使用`Vue`、`React`等框架来构建项目，一般都是生成的`SPA应用`（单页面应用）。
如果一个`域名`（服务器）要部署多个这种`SPA应用`，就需要做打包配置，页面才能正常的加载和访问。

![UmiJS-Deploy](https://tiven.cn/static/img/img-umi-deploy-r2j-FfC28xsCmnEDZ1Rux.jpg)

<!-- more -->

## 项目打包配置

* 在 `.umirc.ts` 或 `config/config.ts` 中配置

```js
import { defineConfig } from 'umi'

export default defineConfig({
  // ...
  history: {
    type: 'browser',  // 浏览器history模式，无 # 号   
  },
  base: '/admin/',
  publicPath: '/admin/',
  // ...
})
```

* `history`：type，可选 browser、hash 和 memory。

* `base` 设置路由前缀，通常用于部署到非根目录。
比如，你有路由 / 和 /web，然后设置了 `base` 为 `/admin/`，那么就可以通过 `/admin/` 和 /admin/web 访问到之前的路由。
  
* `publicPath` 配置 webpack 的 `publicPath`。当打包的时候，webpack 会在静态文件路径前面添加 `publicPath` 的值，当你需要修改静态文件地址时，比如使用 CDN 部署，把 `publicPath` 的值设为 CDN 的值就可以。如果使用一些特殊的文件系统，比如混合开发或者 cordova 等技术，可以尝试将 `publicPath` 设置成 `./` 相对路径。
如果你的应用部署在域名的子路径上，例如 `https://www.tiven.cn/admin/ ，你需要设置 `publicPath` 为 `/admin/`
  
**注意：** 相对路径 `./` 有一些限制，例如不支持多层路由 /foo/bar，只支持单层路径 /foo

### 运行 `npm run dev`

* 结果展示：

```sh
> start
> umi dev

  App running at:
  - Local:   http://localhost:8000 (copied to clipboard)
  - Network: http://xx.xxx.xx.xx:8000

```

### 访问时会自动加上添加的目录


* 例如 http://localhost:8000/admin/

## nginx部署配置

```nginx
# 静态服务
server {
    listen       8080;
    server_name  127.0.0.1;

    location / {
        root   /data/www/tiven-web; // 打包后的静态文件目录
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
}

# 反向代理
location /admin/ {
    proxy_pass   http://127.0.0.1:8080/;
}
```

---

欢迎访问：[个人博客地址](//tiven.cn/p/acd6a378/ "天問博客")