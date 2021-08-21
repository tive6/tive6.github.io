---
title: Prettier学习与实践
abbrlink: e718e7a3
date: 2021-08-22 00:32:21
tags:
---

最近把 `Prettier` 的文档详细看了一遍，结合过去两年的一些思考，有了更多的理解，希望这篇文档让大家对 Prettier 有一个全方位的理解。我一向倡导的学习方式就是阅读官方文档，好的技术一定有好的文档。而阅读官方文档分成三个阶段：

![Prettier](//tiven.cn/assets/img/img-prettier-01.jpg)

<!-- more -->

## 0.前言

1.  刚开始接触的时候，通篇阅读。对要学的东西有一个宏观认识和理解。

理解，就是要明白一项技术的设计初衷、背后的哲学。学习任何一项技术、语言、框架之初，都要问自己几个问题：

- 为什么要出现这个新东西？之前同类或类似的东西有什么不好吗？
- 这个东西带来哪些新思想和设计哲学，解决了之前哪些不容易解决的问题？
- 发明人对我们有什么建议，可以让我们更好地利用这个东西？

带着上面的问题去阅读文档。有不理解的部分不用怕，因为不可能第一遍读文档就理解全部。不理解的部分要记下来，便于今后返回来查阅。很多人都不注意上面这些问题，而是上来就应用，人家用我就用，或者公司要求用，或者追时髦用。按照自己以前的经验和想法用别人按不同思想开发出来的技术，越用越难受，然后就得出结论：这个东西不成熟，坑很多。2\. 开始实践。只有实践才出真知。也只有实践才能对之前以为自己理解的部分又更深入的认识，也只有实践才能把之前不理解的部分想明白。有些概念必须在实际问题环境中才能看明白想清楚。这时候，遇到问题要返回去查阅文档相对应的部分。因为你在第一阶段已经对文档结构有了了解。3.在用了一段时间后，认为自己已经算是“熟悉”了。在不忙的时候，回过头重新把文档再通读一遍。这时候你会发现自己站在了一个新的高度，也会发现文档中的一些观点是自己以前没有注意的，这种感觉就对了。这篇文档就算是我在第 3 阶段之后的一篇总结，分享给大家。

## 1.为什么用 Prettier？代码风格最不好管理的地方在哪里？

代码风格是所有程序员都要遇到的问题，不管是团队协作还是个人练习。就连不懂开发的老板都会装逼一下，强调一定要注意代码风格。往往很多公司想到提高代码质量和开发效率，首先就想到从代码风格入手。但现实中却很少看到代码风格管理很好的团队。因为在大多数时候，代码风格起于讨论，也止于讨论，虎头蛇尾有始无终。**无法确定一个让所有人都满意的方案，就很难执行下去**。就算勉强少数人服从了大多数，但在实际开发过程中还会遇到各种各样的问题。例如不同开发人员用不同的 IDE，用相同 IDE 的又因为设置不同默认的缩进也不同。自己又懒得去设置，或者不会设置，最后就乱了。好不容易实现了功能，每次代码审查前还要手动去修改这些细节的东西，实在头疼。那如何解决呢？针对这种情况的办法，我国政府早就郑重提出了：**搁置争议，共同开发**。吵来吵去，大家各自还为石油头疼。放着宝贵的资源在海底，看着中东那帮家伙发财，太傻了。Prettier 也郑重提出：大家不要吵！用这种风格还是那种风格是半斤八两的关系，但是最后用没用上却是 0 和 1 的关系。咱们先提高代码的可读性和可维护性再说，具体什么风格我给你们定。大家都遵循 Prettier 给出的方案就好了，保证一切顺利进行下去。这就是 Prettier 的**opinionated**！咱们在下一节详细讲。

## 2.什么是 Prettier\?

Prettier 在自己官网首页列出这么三点：

- An opinionated code formatter
- Supports many languages
- Integrates with most editors
- Has few options

官方首先告诉你，Prettier 是一个 Opinionated 的代码格式化工具。所以要掌握 Prettier 的精髓就是要理解这个单词。什么是 Opinionated？我在知乎很多回答中都提到这个词，对于理解框架或技术非常重要。很多框架在文档开始就会告诉你它是**Opinionated**还是**Unopinionated**。例如看 Angular 官方的[Style Guide](https://link.zhihu.com/?target=https%3A//angular.io/guide/styleguide "Style Guide: ")：

> Looking for an opinionated guide to Angular syntax, conventions, and application structure\? Step right in\! This style guide presents preferred conventions and, as importantly, explains why.

甚至于，框架都可以按照是否 Opinionated 分为两大类：Java 服务器端开发的同学，打开 Spring Boot 的文档：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs062kkCl8fEpbtPhxqsLkxkM9GyvUiaGXsKyEgKe42QYwetxudLcr8knA/640?wx_fmt=jpeg)

熟悉 Node 开发的同学，打开 [http://expressjs.com](https://link.zhihu.com/?target=http%3A//expressjs.com "http://expressjs.com: ")：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0gvevb8YpR71tIvRzUae1Ij4aVGSghVWdDtveGTZgmSPXzkv1WNy4Bg/640?wx_fmt=jpeg)

熟悉前端三大框架的同学问自己一个问题：Angular 和 React/Vue 在开发体验上有什么区别？Angular 其实是 Opinionated，规定了你的代码结构，让你最好按照它给你指定的方式组织代码。React 则没管这么多，相对比较自由。也就是[这篇文章](https://link.zhihu.com/?target=https%3A//learnwebtutorials.com/comparison-react-angular-vue-frameworks "这篇文章: ")中说的：

> Angular is a full-featured “opinionated” framework. That means you have to do things the Angular way, which makes is more difficult and more rewrite to add into existing apps.  
> React and Vue are “non-opinionated” frameworks. Technically, they are not frameworks. But rather “libraries”. They are easier to add into existing web apps without a heavy rewrite. You can drop bits and pieces of them into existing app and migrate them over little at a time.

Prettier 说自己是一个 Opinionated code formatter，就是说：你必须认同我的观点，按照我说的做。否则你就别用我，硬着头皮用就会处处不爽！在我上一篇文章下可以看到这样的评论：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0fC8IznuaEML3NWiavGq33MNL5ibDytF60Et45MTxTQMObz9QHkNKh9QA/640?wx_fmt=jpeg)

官方说的第 2 条：支持很多语言。看这幅图就行了：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0Nd5NEahuIfUkJyZRwKHhon8wp5iaVDkqRojKsQ4JFdxR4Wzwh40h2CA/640?wx_fmt=jpeg)

图中右侧的是 Community Plugins，其中包含我比较关心的 Java。但是 Java 支持的并不好。Java Plugin 是我一直推广的 jHipster 团队开发的，Github 仓库地址在[这里](https://link.zhihu.com/?target=https%3A//github.com/jhipster/prettier-java "这里: "),处于 Alpha 阶段，而且 JHipster 自己也没有正式使用。官方说的第 3 条：可以和很多 IDE 集成。看这幅图就行了：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0qqoBHDlGib7gVHMlFcd4Ajrp1Ma6EjXTVCGqWPuQLjEnCY6WlyO7Wpw/640?wx_fmt=jpeg)

我会在后面章节给出 Webstorm 和 VSCode 的配置和使用方法。第 4 条：Has few options，其实就是 Opinionated 的最直接体现。除了必要的设置项，不会再给你们更多。给你设置项越多，你们越乱，你们就会继续争吵！苹果手机就一个 Home 键，老子就这样，接受不了的滚去安卓。安卓三个键，左侧是返回键，右侧是属性键？你换手机的时候可不一定是这样，你还要手动设置成自己习惯的。偶尔用一下别人的安卓，可能就和你的不一样。键多了就形成了混乱，还是一个键好。这也是 Prettier 的设计哲学，Prettier 就是代码格式化工具中的 Apple。Prettier 的原理非常简单：不管你写的代码是个什么鬼样子，Prettier 会去掉你代码里的所有样式风格，然后用统一固定的格式重新输出。输出时基本上只考虑一个参数，就是 line length。例如你写的这行代码：

```
foo(arg1, arg2, arg3, arg4);
```

一行装得下这么多代码，所以就不需要改。如果你写了下面代码：

```
foo(reallyLongArg(), omgSoManyParameters(),IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

太长了，Prettier 就会重新改成这样输出：

```
foo(  reallyLongArg(),  omgSoManyParameters(),  IShouldRefactorThis(),  isThereSeriouslyAnotherOne());
```

咱们再仔细探究一下这个过程。不管你之前写的代码是什么样，首先必须符合语法规范。Prettier 先把你的代码转换成一种中间状态，叫 AST\(Abstract Syntax Tree\)。用 Prettier 提供的[Playground](https://link.zhihu.com/?target=https%3A//prettier.io/playground "Playground: ")更直观一些：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0X7XNqC2ZPRo0pYnTuJ37nibI6Lvl2v4VMuo9LpouW66p1kHibQGvNdeg/640?wx_fmt=jpeg)

上图左侧是手写代码，中间是 AST\(去掉了任何代码风格\)，右侧是重新输出的结果。Prettier 就是在这个 AST 上重新按照自己的风格输出代码。

## 3.先练练手

这里先介绍一下最简单的使用方法，让大家有一个直观感受。如果你正在学习 JavaScript/Typescript，你的工程里只有几个 JS/TS 文件，可以这样用。但实际工程阶段肯定是不会这么用的。Prettier 如何和其他工具整合，以及如何设置，我们后面会讲到。

### NPM

```
mkdir learn-prettier && cd learn-prettiernpm initnpm install prettier --save-dev --save-exact// 在learn-prettier/src目录下创建index.js文件，然后自己写一些JS代码。JS代码用上文那个超长的foo(......)就可以，自己也可以改的更乱一些，但必须符合JS语法。npx prettier --write src/index.js// 在看格式化之后的index.js，已经重新输出成固定格式了。
```

### Yarn

```
mkdir learn-prettier && cd learn-prettieryarn inityarn add prettier --dev --exact// 在learn-prettier/src目录下创建index.js文件，然后自己写一些JS代码。JS代码用上文那个超长的foo(......)就可以，自己也可以改的更乱一些，但必须符合JS语法。yarn prettier --write src/index.js// 在看格式化之后的index.js，已经重新输出成固定格式了。
```

_npm init 命令会问你一些问题，以便于生成 package.json，一路回车采用默认值就行。_你也可以把 package.json 内容改改，改的乱一些，但要符合 JSON 格式。然后执行下面命令看看 package.json 也被重新输出了：

```
npx prettier --write package.json
```

其实...,你也知道，很少有人会通过命令行用，现在大家都用 WebStorm 呢，好像更牛 X 的人在用 VS Code。下面咱们就看看 WebStorm 和 VS Code 怎么整合 Prettier。

## 4.IDE 整合

IDE 或 Editor，这里只介绍 WebStorm 2018.1 以上版本和 VS Code。老版本的 IDEA 或 Webstorm 也可以用，但是最好还是升级吧。  
WebStorm 的设置适用于 JetBrains 家族的其他 IDE，例如 IntelliJ IDEA、PHPStorm、PyCharm...

### WebStorm

首先安装 Prettier Plugin

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0VFYDBjT14Y5kibeKib46G7tFzDJ7XrxRKtqsMZlJdHbkvuDCJfKBAMRw/640?wx_fmt=jpeg)

### 手动格式化

快捷方式：

- 最直接方式  
  Mac：Alt + Shift + Cmd + P  
  Windows: Alt + Shift + Ctrl + P
- 或 Mac:CMD + Shit + A  
  Windows:Ctrl + Shift + A，然后输入 Prett...
- 或 Double Shift\(连按两次 Shift\)，然后选择 Action，然后输入 Prett...

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs01vQGXpDd2Ig0micUbdYkLSiaIqr3rI8ypwGbiazicxBib5DtWxs5mBiamG6g/640?wx_fmt=jpeg)

上面的方式就是执行了`npx prettier \--write`或`yarn prettier \--write`，可以格式化文件、文件夹下的所有文件、或选中的一段代码。

### 保存文件时自动格式化

如果想在保存文件的时候自动让 Prettier 格式化代码，需要 File Watcher。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0VKzALBtfry0KULeyjQ1schB4aNxiaxl0YlH4erusvmhGUYm7FGGNg5A/640?wx_fmt=jpeg)

点+，然后选择 Prettier。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs08apM6fHDPbyXe1fG1bKx4LacevldiaMn4Uph1MjlWGkl3ztTCHnwymg/640?wx_fmt=jpeg)

### VS Code

安装[Prettier Extention](https://link.zhihu.com/?target=https%3A//marketplace.visualstudio.com/items%3FitemName%3Desbenp.prettier-vscode "Prettier Extention: ")

### 手动格式化

快捷方式：Mac：CMD + Shift + P -> Format Document WIndows：Ctlr + Shift + P -> Format Document

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs01LUTk3xG1H0HzeDaNtYqianzdJAvDqic8SoaFLe6MDFDjX3L9iaMGMANA/640?wx_fmt=jpeg)

如果安装其他格式化代码的 Extension，VS Code 会在右下角提示：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0K2RL9WtiaWAJHSNnQx5A7GNIAE7CiagsZU4ERRCNuKOTIQibgA8jWIgKw/640?wx_fmt=jpeg)

点击 Configure...比如我就安装了三个可以格式化代码的 Extension：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0p1I1zxFRuyTWY7RhgETXEDOLVNWk3YPzqUFc3eXnGK4Cpa93vBtPPg/640?wx_fmt=jpeg)

选择 Prettier 就可以了。这时候 settings.json 会增加下面内容：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0WqyoxSQe5bPk4ibxLVuLWDmbyDXdor8UvaOvWFsDdQtcQujoBrwM8cQ/640?wx_fmt=jpeg)

javascript 和 typescript 的默认 Formmater 用哪个 Extension。当然这需要你在.js 和.ts 文件上分别设置一次才可以产生上面的设置。

### 保存文件时自动格式化

打开 VS Code 的设置界面  
Mac：CMD + ,  
Windows：Ctrl + ,选上这个配置项：

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs09wW1Qhwickmib1zkccThickIuyTDm73HpfP3k0YwrXibJlCBuR1CQ9Hevw/640?wx_fmt=jpeg)

其实...,你又想了，IDE 整合了 Prettier 也不是很方便，能不能提交代码的时候自动执行格式化？这样的话，我平时写代码根本不需要关心啥格式了，保证入库的代码让 Code Review 的人别骂我就好。下面咱们就看看怎么样让 Git 在 Commit 前先执行 Prettier。

### 5.Git 整合

既然要和 Git 整合，首先确保你当前的工程在用 Git。和 Git 整合，有四种方法：

- lint-staged，
- pretty-quick
- pre-commit
- precise-commits

其中除了 pre-commit 之外，都是 npm 的 module，需要先 npm install ...。我们只介绍 lint-staged 用法。当你需要 Prettier 和其他 Linters 一起用的时候，也用 lint-staged。先 npm install 吧：

```
// 先别运行这两行，下面会有更简单的办法npm install huskynpm install lint-staged
```

其实，更简单的操作是运行下面这一行：

```
// 这一行就可以安装husky和lint-stage，并且配置好husky。npx mrm lint-staged
```

[husky](https://link.zhihu.com/?target=https%3A//github.com/typicode/husky "husky: ")，你没猜错就是哈士奇的英文。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0sK2NibpuPxDJwaibxBXtgHFDxxM5jP4I2dLfAPficSg8aO0BdCvVhMFCg/640?wx_fmt=jpeg)

二哈在这里的作用就是咬住 Git 的[hooks](https://link.zhihu.com/?target=https%3A//githooks.com/ "hooks: ")不放。我们这里只关心 pre-commit 这一个 hook。mrm 之后，你的 package.json 多了这些内容：

```
"devDependencies": {    "husky": "^3.0.5",    "lint-staged": "^9.2.5"  },  "husky": {    "hooks": {      "pre-commit": "lint-staged"    }  },  "lint-staged": {    "*.{js,css,json,md}": [      "prettier --write",      "git add"    ]  }
```

现在你可以修改 js、css、json、md 文件，把他们搞乱！然后 `git add .`，然后再 `git commit \-m 'Test Prettier'`试试了。我现在正在用 Markdown 写这篇文章，Prettier 也能帮我格式化。

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0CX8axSuIbeRWj0AxcJN2LIjGFia1GxkObhlA7Dx7Zfmd9v2l2VFypAQ/640?wx_fmt=jpeg)

Prettier 和 IDE 以及 Git 都整合的很好，帮助我们自动格式化了代码。这时候你又有新的疑问了：Prettier 和已有的各种 Linters 是什么关系？以前一直用 JSLint 或 TSLint，甚至还会用到 StyleLint。现在 Prettier 支持 JS、TS、CSS，能够自动重新格式化这些代码，还有必要用各种 Linters 吗？如果 Prettier 和 ESLint/TSLint 一起用又会怎么样呢？

## 6.Prettier 和各种 Linters 是什么关系？如何配合使用？

各种 Linters 是按照规则\(Rules\)去检查代码的，遇到不符合规则的代码就会提示你，有的规则还能自动帮你解决冲突。这些规则分为两类：

- Formatting rules

例如 ESlint 的[max-len](https://link.zhihu.com/?target=http%3A//eslint.org/docs/rules/max-len "max-len: ")规则，设置单行长度不能超过 80 字符。  
incorrect code:

```
/*eslint max-len: ["error", { "code": 80 }]*/  var foo = { "bar": "This is a bar.", "baz": { "qux": "This is a qux" }, "difficult": "to read" };
```

correct code:

```
JavaScript   /eslint max-len: ["error", { "code": 80 }]/var foo = {  "bar": "This is a bar.",  "baz": { "qux": "This is a qux" },  "easier": "to read"};
```

再例如 ESLint 的[keyword-spacing](https://link.zhihu.com/?target=http%3A//eslint.org/docs/rules/keyword-spacing "keyword-spacing: ")规则，关键字前后必须有空格。  
incorrect code:

```
JavaScript   /eslint keyword-spacing: ["error", { "before": true }]/if (foo) {    //...}else if (bar) {    //...}else {    //...}
```

correct code:

```
JavaScript   /eslint keyword-spacing: ["error", { "before": true }]/   /eslint-env es6/if (foo) {    //...} else if (bar) {    //...} else {    //...}
```

当 ESLint 遇到上面的 incorrect code 的时候，会提示你违反规则，让你修改代码以符合规则。而 Prettier 则不会这么麻烦，它根本不管你之前符不符合什么规则，都先把你的代码解析成 AST，然后按照它自己的风格给你重新输出代码。换句话说，Prettier 对应的是各种 Linters 的 Formatting rules 这一类规则。而且你用了 Prettier 之后，就不会再违反这类规则了！不需要你自己手动修改代码。

- Code-quality rules

例如 ESLint 的[no-unused-vars](https://link.zhihu.com/?target=http%3A//eslint.org/docs/rules/no-unused-vars "no-unused-vars: ")规则，不允许没用的变量定义出现。incorrect code:

```
/*eslint no-unused-vars: "error"*//*global some_unused_var*/// It checks variables you have defined as globalsome_unused_var = 42;var x;// Write-only variables are not considered as used.var y = 10;y = 5;// A read for a modification of itself is not considered as used.var z = 0;z = z + 1;// By default, unused arguments cause warnings.(function(foo) {    return 5;})();// Unused recursive functions also cause warnings.function fact(n) {    if (n < 2) return 1;    return n * fact(n - 1);}// When a function definition destructures an array, unused entries from the array also cause warnings.function getY([x, y]) {    return y;}
```

correct code:

```
/*eslint no-unused-vars: "error"*/var x = 10;alert(x);// foo is considered used heremyFunc(function foo() {    // ...}.bind(this));(function(foo) {    return foo;})();var myFunc;myFunc = setTimeout(function() {    // myFunc is considered used    myFunc();}, 50);// Only the second argument from the descructured array is used.function getY([, y]) {    return y;}
```

Prettier 对这类规则束手无策。而且这类规则也正是各种 Linters 的重点，因为它们真的能帮你发现很多低级的 Bug。所以，Prettier 并不会取代各种 Linters，而是能避免你的代码和这些 Linters 定义的 Formatting rules 冲突。Linters 检查出来违反 Code-quality rules 的情况后还需要你自己根据业务逻辑和语法手动修改。Prettier 帮你格式化代码，但是不会帮你挑出潜在的错误。那么既要让 Prettier 帮你格式化代码，还想让 Linters 帮你挑出潜在的 Code-quality 类错误，怎么办？就需要 Prettier 和 Linters 配合使用。Prettier 和 Linters 的整合需要做两件事：

1.  禁用 Linters 自己的 Formatting rules，让 Prettier 接管这些职责。这些配置有现成的 Config，Linters 的配置继承这个 Config 就可以了。
2.  让 Linters 执行时首先能够调用 Prettier 格式化带啊，然后再检查 Code-quality 类规则。这是 由 Linters 的 Plugin 实现的。

具体去看 Prettier 的[文档](https://link.zhihu.com/?target=https%3A//prettier.io/docs/en/integrating-with-linters.html "文档: ")。

## 7.配置

最后一节，咱们开始说 Prettier 的配置项。Prettier 反复强调自己是一个 Opinionated code formatter，而且只有 few\(很少\) options。这意味着：Prettier 不是一个你想如何设置就如何设置的代码风格格式化工具，不能任由你改变其输出风格。其最主要的目的就是让团队停止争吵，配置项越多，就离这个主要目的越远，团队就会一直讨论应该如何配置。这就是 Prettier 的哲学，而且广受欢迎。在 Prettier 的 Issue 里看[这个](https://link.zhihu.com/?target=https%3A//github.com/prettier/prettier/issues/40 "这个: ")：reactjs 团队成员，Redux 和 Create React App 的合作者发表了自己的观点：反对继续增加配置项

![图片](https://mmbiz.qpic.cn/mmbiz_jpg/iagNW4Zy9Cyb3DXvkMJKLYqZETGqCcDs0zZEdU0XBjTgo3xkymbfEVnXscYkKv2yYKKmFSWMmzNjp9xzOYRSRPQ/640?wx_fmt=jpeg)

就已有的配置项，Prettier 官方都明确说了其中很多都不是他们想要的，是迫不得已加上的。之前说到 AST 的时候用了一下 Playground，这些配置在[Playground](https://link.zhihu.com/?target=https%3A//prettier.io/playground "Playground: ")里很容易看到和测试。全部配置项文档在[这里](https://link.zhihu.com/?target=https%3A//prettier.io/docs/en/options.html "这里: ")。最近在发现有人写了一个专门的配置[工具](https://link.zhihu.com/?target=https%3A//github.com/leggsimon/create-prettier-eslint "工具: ")：prettier-eslint这个工具有两种用法：

```
// 创建工程初始化的时候用npm init prettier-eslint// 或直接使用npx create-prettier-eslint
```

另外补充一点，TSLint已经不再维护了，明年起将停止更新。前端代码不管TS还是ES，都用ESLint吧。具体看作者在[Medium上的Blog](https://link.zhihu.com/?target=https%3A//medium.com/palantir/tslint-in-2019-1a144c2317a9 "Medium上的Blog: ")和[相关Issue](https://link.zhihu.com/?target=https%3A//github.com/palantir/tslint/issues/4534 "相关Issue: ")。

### 参考资料

The End

欢迎自荐投稿到《前端技术江湖》，如果你觉得这篇内容对你挺有启发，记得点个 **「在看」**哦


点个『在看』支持下 ![图片](https://mmbiz.qpic.cn/mmbiz_gif/ibsfLhQMgy09JhlUaCQZm4kXHBSlPxPOOpOcfiaNmJRjoem28z1x3CbXNG2eQNK8Tic1Yyf1WqKZ3VibvSicNtwcguQ/640?wx_fmt=gif)