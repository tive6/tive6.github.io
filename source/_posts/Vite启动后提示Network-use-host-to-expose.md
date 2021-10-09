---
title: 'Vite启动后提示Network: use `--host` to expose'
abbrlink: a57bb1ad
date: 2021-05-07 10:02:25
tags:
  - Vite
  - Vue
categories:
  - 开发者笔记
---

当使用 `Vite` 构建项目后，发现只有`localhost` + `端口` 服务，没有 `IP` + `端口`服务。
运行`npm run dev`，终端提示`Vite启动后提示Network: use '--host' to expose`。

![Vite](https://tiven.cn/static/img/img-vite-01-qXyz73DxsLe-cWhwRDezi.jpg)

<!-- more -->

## package.json中脚本配置

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "serve": "vite preview"
}
```

## 问题复现

当运行 `npm run dev | serve` 命令时，会显示一下内容。

```sh
> vite-vue-demo@1.0.0
> vite | vite preview

vite v2.5.1 build preview server running at:

> Local: http://localhost:3000 | 5000/
> Network: use `--host` to expose
```

## 解决 

* 配置`vite.config.js`

```js
export default defineConfig(({ mode })=>({
  // ..
  server: {
    host: '0.0.0.0',
  },
  // ..
}))
```

* 配置`package.json`

```json
"scripts": {
  "dev": "vite --host",
  "build": "vite build",
  "serve": "vite preview --host"
}
```

## 执行`npm run dev`命令

```sh
vite v2.5.1 dev server running at:

> Local:    http://localhost:3000/
> Network:  http://xxx.xx.xxx.xx:3000/
```

---

欢迎访问：[个人博客地址](https://tiven.cn/p/a57bb1ad/ "天問博客")