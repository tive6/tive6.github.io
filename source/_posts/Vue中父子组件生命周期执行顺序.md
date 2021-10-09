---
title: Vue中父子组件生命周期执行顺序
tags:
  - Vue
  - JS
categories:
  - 开发者笔记
abbrlink: 367439f7
date: 2021-07-24 14:29:22
---

在使用以`Vue`为架构的项目中，当业务逻辑越来越复杂，页面的组件层级结构也会随之增加。所以要想有清晰的逻辑思路，就肯定需要对各种父子组件钩子函数加载时机和执行顺序了如指掌。
![Vue](https://tiven.cn/static/img/img-vue-life.jpg-ud5s5Y7dLx-rFwDKzOqe6.jpg)

<!-- more -->
Vue生命周期的官网定义：每个 `Vue` 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

Vue生命周期总共分为：`初始化` 前后，`创建` 前后，`更新` 前后，`销毁` 前后。

### 常用的生命周期钩子函数

* `beforeCreate`：在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
* `created`：在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，property 和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，`$el` property 目前尚不可用。
* `beforeMount`：在挂载开始之前被调用：相关的 `render` 函数首次被调用。
* `mounted`：实例被挂载后调用，这时 `el` 被新创建的 `vm.$el` 替换了。如果根实例挂载到了一个文档内的元素上，当 `mounted` 被调用时 `vm.$el` 也在文档内。
* `beforeDestroy`：实例销毁之前调用。在这一步，实例仍然完全可用。
* `destroyed`：实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

#### 进入页面：页面组件实例化 --> DOM挂载 

```html
parent  beforeCreate
parent  created
parent  beforeMount
child   beforeCreate
child   created
child   beforeMount
child   mounted
parent  mounted
```

#### 离开页面：实例销毁 --> DOM卸载

```html
parent  beforeDestroy
child   beforeDestroy
child   destroyed
parent  destroyed
```

Vue官网生命周期图示：
![Vue](https://tiven.cn/assets/img/img-vue-life.png)

---

欢迎访问：[个人博客地址](https://tiven.cn/p/367439f7/ "天問博客")