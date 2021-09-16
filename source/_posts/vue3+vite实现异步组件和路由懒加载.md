---
title: vue3 + vite实现异步组件和路由懒加载
abbrlink: d41c4425
date: 2021-09-09 09:54:56
tags:
  - Vite
  - Vue
  - import
categories:
  - 开发者笔记
---

在 `Vue2` 中，异步组件处理使用 `import` 就可以很轻松实现。但是在`Vue 3.x` 中，对异步组件的使用跟 `Vue 2.x` 完全不同了。

![Vue3.0异步组件](//tiven.cn/static/img/img-vue-dynamic-ZAvXFiJm_SFrFwQNt41CW.jpg)

<!-- more -->

* 变化主要有三点：

1. 异步组件声明方法的改变：`Vue 3.x` 新增一个辅助函数`defineAsyncComponent`，用来显示声明异步组件
2. 异步组件高级声明方法中的 `component` 选项更名为`loader`
3. `loader`绑定的组件加载函数不再接收`resolve`和`reject`参数，而且必须返回一个`Promise`

## 辅助函数`defineAsyncComponent`

在 Vue 2.x 中，声明一个异步组件只需这样：

```js
const asyncPage = () => import('./views/home.vue')
```

但是，到了 `Vue 3.x` 上面的用法就不适用了。

* 例子：

```html
<template>
	<div>
		<h1>Async Components</h1>
		<p>异步组件测试</p>
    <child></child>
	</div>
</template>

<script>
const child = () => import('@/components/async-component-child.vue')

export default {
  name: 'async-components',
  components:{
    'child': child
  }
};
</script>
```

异步加载的组件将不会再页面显示，且控制台会报错。

在 `Vue 3.x` 中，异步组件的导入需要使用辅助函数`defineAsyncComponent`来进行显式声明。如下：

```html
<template>
	<div>
		<h1>Async Components</h1>
		<p>异步组件测试</p>
    <child></child>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const child = defineAsyncComponent(() => import('@/components/async-component-child.vue'))

export default {
  name: 'async-components',
  components:{
    'child': child
  }
};
</script>
```

* Vue 3.x 引入`defineAsyncComponent`辅助函数的原因：
  **翻译如下：**

        现在，在 Vue 3 中，由于函数组件被定义为纯函数，异步组件定义需要通过将其包装在一个新的 defineAsyncComponent helper 中来显式定义。

## `component` 选项更名为`loader`

Vue 2.x 中异步组件的声明有更高级的声明方式。

```js
const asyncPageWithOptions  = {
  component: () => import('./views/home.vue'),
  delay: 200,
  timeout: 3000,
  error: ErrorComponent,
  loading: LoadingComponent
}
```

所以，下面的异步组件声明

```js
const asyncPage = () => import('./views/home.vue')
```

等价于

```js
const asyncPageWithOptions  = {
  component: () => import('./views/home.vue')
}
```

同样的，Vue 3.x 中也可以这样声明异步组件。只是，其中的`component`需要改为`loader`。

```js
const asyncPageWithOptions  = defineAsyncComponent({
  loader: () => import('./views/home.vue'),
  delay: 200,
  timeout: 3000,
  error: ErrorComponent,
  loading: LoadingComponent
})
```

## 组件加载函数不再接收`resolve`和`reject`参数，而且必须返回一个`Promise`

此外，Vue 3.x 的异步组件加载函数将不再接收`resolve`和`reject`，而且必须始终返回`Promise`

```js
// 2.x version
const oldAsyncComponent = (resolve, reject) => {
  /* ... */
}

// 3.x version
const asyncComponent = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      /* ... */
    })
)
```

也就是说，工厂函数接收 `resolve` 回调的方式定义异步组件在 `Vue 3.x` 不能使用了：

```js
export default {
  components: {
    asyncPage: resolve => require(['@/components/list.vue'], resolve)
  },
}
```

## 与路由懒加载的区分

但如果是用`vite`工具来构建项目，在本地开发使用`import`做`路由懒加载`，可以正常加载，但是会报警告；打包到生产环境会报错，页面不会正常展示。

#### 路由懒加载实现方法：

1. `defineAsyncComponent`方法

```js
// router/index.js
import { defineAsyncComponent } from 'vue'
const _import = (path) => defineAsyncComponent(() => import(`../views/${path}.vue`));

const routes = [
	{
		path: '/async-component',
		name: 'asyncComponent',
		component: _import('home'),
	}
];
```

2. `import.meta.glob`方法

```js
// 1.上面的方法相当于一次性加载了 views 目录下的所有.vue文件，返回一个对象
const modules = import.meta.glob('../views/*/*.vue');
const modules ={
    "../views/about/index.vue": () => import("./src/views/about/index.vue")
}

// 2.动态导入的时候直接，引用
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // ...
    {
      path: 'xxxx',
      name: 'xxxxx',
      // 原来的方式，这个在开发中可行，但是生产中不行
      // component: () => import(`../views${menu.file}`),
      // 改成下面这样
      component: modules[`../views${filename}`]
    }
    // ...          
  ],
})
```

#### 异步组件的写法

```html
<template>
	<div>
		<h1>Async Components</h1>
		<p>异步组件测试</p>
    <child></child>
	</div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const child = defineAsyncComponent(() => import('@/components/async-component-child.vue'))

export default {
  name: 'async-components',
  components:{
    'child': child
  }
};
</script>
```

**总结：** 简单来说，写在`路由`配置文件中的异步加载就是`路由懒加载`的用法，而写在`组件内部`的异步加载就是异步组件用法。

---

欢迎访问：[个人博客地址](//tiven.cn/p/d41c4425/ "天問博客") 