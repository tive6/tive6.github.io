---
title: UmiJS学习与实战系列 · 打包去掉console，开启Gzip压缩
abbrlink: cfb603e2
date: 2021-09-07 09:50:43
tags:
  - UmiJS
  - React
categories:
  - 开发者笔记
---

`UmiJS`项目打完包体积比较大，首次加载比较慢，为了解决这个问题，执行`build`时移除`console`，并开启了`Gzip压缩`。

![UmiJS](https://tiven.cn/static/img/img-umi-build-Xyri6RdMqoZNIqAKWdUd8.jpg)

<!-- more -->

## 安装插件

```sh
# 安装 `babel-plugin-transform-remove-console` 插件
npm i -D babel-plugin-transform-remove-console

# 安装 `compression-webpack-plugin` 插件
npm i -D compression-webpack-plugin
```

## 配置

* 在 `.umirc.ts` 或 `config/config.ts` 中进行配置

```js
import { defineConfig } from 'umi'
import CompressionPlugin from 'compression-webpack-plugin'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  // ...
  // 打包时移除 console
  extraBabelPlugins: [isProd ? 'transform-remove-console' : ''],
  chainWebpack: function (config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          chunks: 'all',
          minSize: 1000,
          minChunks: 2,
          automaticNameDelimiter: '.',
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test({ resource }) {
                return /[\\/]node_modules[\\/]/.test(resource)
              },
              priority: 10,
            },
          },
        },
      },
    })
    if (isProd) {
      // Gzip压缩
      config.plugin('compression-webpack-plugin').use(CompressionPlugin, [
        {
          test: /\.(js|css|html)$/i, // 匹配
          threshold: 10240, // 超过10k的文件压缩
          deleteOriginalAssets: false, // 不删除源文件
        },
      ])
    }
  },
  // ...
})
```

---

欢迎访问：[个人博客地址](//tiven.cn/p/cfb603e2/ "天問博客")