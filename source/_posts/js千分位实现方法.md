---
title: js千分位实现方法
abbrlink: fad9e8e5
date: 2021-09-08 14:28:22
tags:
  - JS
categories:
  - 开发者笔记
---

在做大数据可视化需求时，经常遇到比较大、比较长的数据，产品就要求对展示的数字进行`千分位`处理。

<!-- more -->

## 1. toLocaleString方法

```javascript
let num = 1234567890;
console.log(num.toLocaleString()); //  "1,234,567,890" 
let float = 12345.12;
console.log(float.toLocaleString()); //  "12,345.12" 
let str = '1234567890';
console.log(str.toLocaleString()); //  '1234567890'
```

**注意：** `toLocaleString`只能针对 `Number` 类型的数据进行千分位处理

## 2. 正则匹配

```javascript
// 正则匹配方法一
let num = 1234567890;
let reg = /\d{1,3}(?=(\d{3})+$)/g;   
String(num).replace(reg, '$&,'); //"1,234,567,890"

// 正则匹配方法二
let num = 1234567890;
let reg = /\B(?=(\d{3})+$)/g;   
String(num).replace(reg, ','); //"1,234,567,890"

```

**说明：** 如果想知道具体怎样的分组方式，可在 [https://regexper.com/](https://regexper.com/ "正则测试") 上测试

1. `?=` 表示正向引用
2. `$&` 表示与正则表达式相匹配的内容，可查看replace()
3. `\B` 非单词边界

## 3. for循环

```javascript
// for循环方法一
function format(num){  
  num = String(num);//数字转字符串  
  let str = '';//字符串累加  
  for (let i = num.length- 1, j = 1; i >= 0; i--, j++){  
      if (j%3 == 0 && i != 0){ //每隔三位加逗号，过滤正好在第一个数字的情况  
          str += num[i] + ','; //加千分位逗号  
          continue;  
      }  
      str += num[i]; //倒着累加数字
  }  
  return str.split('').reverse().join(""); //字符串=>数组=>反转=>字符串  
} 
let num = 1234567890;
format(num); //"1,234,567,890"

// for循环方法二
function format(num){  
  num = String(num);//数字转字符串
  let str = '';//字符串累加
  for (let i = num.length- 1, j = 1; i >= 0; i--, j++){  
      if (j%3 == 0 && i != 0){ //每隔三位加逗号，过滤正好在第一个数字的情况
          str = ',' + num[i] + str; //加千分位逗号
		 continue; 
      }  
      str = num[i] + str; //累加数字
  }  
  return str;
}
let num = 1234567890; 
format(num); //"1,234,567,890"
```

## 4. slice+while循环

```javascript
function format(num) {
  let arr = [],
      str = String(num),
      count = str.length;

  while (count >= 3) {
    arr.unshift(str.slice(count - 3, count));
    count -= 3;
  }

  // 如果是不是3的倍数就另外追加到上去
  if(str.length % 3) arr.unshift(str.slice(0, str.length % 3));

  return arr.toString();
}
let num = 1234567890; 
format(num); //"1,234,567,890"
```

## 5. reduce

```javascript
function format(num) {
  var str = num+'';
  return str.split("").reverse().reduce((prev, next, index) => {
    return ((index % 3) ? next : (next + ',')) + prev;
  })
}
let num = 1234567890; 
format(num); //"1,234,567,890"
```

---

欢迎访问：[个人博客地址](//tiven.cn/p/fad9e8e5/ "天問博客")