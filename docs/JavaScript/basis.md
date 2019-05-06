## 语法

### 区分大小写

js 中一切都区分大小写

### 标识符

-   第一个字符必须是字母或者下划线(\_)或美元(\$)符号
-   命名请尽量采取驼峰式命名

### 注释

```js
// 单行注释
/* @description 多行注释
 * @params x
 * @params x
 */
```

### 严格模式

启用严格模式,需要在整个脚本上方添加

```js
"use strict";
```

### 语句

每个以\;结尾的都是一条语句

js 中如果不写分号,可能会导致某些未知错误

## 关键字

ECMA-262 指定了一组关键字,这些关键字不能用来当标识符
||||||
| ------ | ------ | ------ | ------ | ------ |
| break | do | instanceof | typeof| case |
| else | new | var | catch| finally |
| return | void | continue | for| switch |
| while | debugger\* | function | this| with |
| default | if | throw | delete| in |
| try |

还指定了一组保留字,可能将来会用上
||||||
| ------ | ------ | ------ | ------ | ------ |
| abstract | enum | int | short| boolean |
| export | interface | static | byte| extends |
| long | super | char | final| native |
| synchronized | class | float | package | throws |
| const | goto | private | transient| debugger |
| implements | protected | volatile | double | import |
| public |

## 变量

JavaScript 是一门动态语言。
换句话说,每个变量只是一个保存值的占位符而已

```js
var message = "hello world";
message = 1;
function sayHello() {
    var msg = "hello!"; // 局部变量
}
alert(msg); // 报错
function sayHi() {
    msg = "hi!"; // 全局变量
}
alert(msg); // hi! 有效但不推荐
```

## 数据类型

ECMAScript 中有五种基本的数据类型

-   Undefined
-   Null
-   Boolean
-   Number
-   String

还有一种复杂数据类型

-   Object

### typeof

对变量使用 typeof 可能会返回以下

-   undefined 这个值未定义
-   boolean 这个值是一个布尔值
-   string 这个值是一个字符串
-   number 这是一个数值
-   object 这个值是对象或者 null
-   function 这个值是一个函数

> typeof 是一个操作符而非函数

### undefined

未声明或者声明时没有初始化的变量的值为 undefined
,但是对未声明的值只能进行 typeof 操作

```js
var message;
alert(message); // undefined
alert(age); // 报错
```

### null

null 类型表示一个空对象指针

```js
var message;
alert(message == null); // true
alert(message === null); // false
```

### boolean

| 数据类型  | 转化为 true    | 转化为 false |
| --------- | -------------- | ------------ |
| Bollean   | true           | false        |
| String    | 任何非空字符串 | ""           |
| Number    | 任何非 0 数值  | 0 和 NaN     |
| Object    | 任何对象       | null         |
| undefined |                | undefined    |

### number

要注意一点,因为精度的问题
会出现下面这种情况

```js
var a = 0.1;
var b = 0.2;
a + b == 0.3; // false
NaN == NaN; // false
```

另外,请注意 parseInt() | parseInt() | Number()三种转化成数值类型的区别

### string

.length() // 获取字符串的长度

字符串创建了之后就不能改变,每次更新字符串都要先销毁原来的字符串

.toString() // 将值转化成字符串

### object

```js
var o = new Object();
```

Object 的每个实例都有下列属性和方法

-   constructor 保存用于创建当前对象的函数
-   hasOwnProperty(propName) 检查给定的属性在**当前对象**(不是当前对象的原型)中是否存在

```js
o.hasOwnProperty("name");
```

-   isPrototypeOf(object) 判断传入对象是否是当前对象的原型
-   proptyIsEnumerable(propName) 检查给定的属性是否可以枚举
-   toLocaleString() 返回对象的字符串表示
-   toString() 返回对象的字符串表示
-   valueOf() 返回对象的字符串数值或布尔值表示

## 操作符

### 一元操作符

```js
// 执行前置递减和前置递增的负效应
var age = 18;
var num = 2;
console.log(--age + num); // 19
console.log(age-- + num); // 20
console.log(~age); // -19
```

### 布尔操作符

-   && 如果左边为真,则执行右边操作
-   || 如果左边为真,则跳过右边操作,反之执行右边操作

## 语句

```js
if() {
    //
} else {

}

do {

} while ();

while() {

};

for(var i = 0, len = xx.length; i < len; i++) {
    //
}

for(var key in obj) {
    //
}

switch() {
    case xx:
        //
        break;
    default:
        //
}
```

## 函数

```js
function func(arg1, arg2, ...) {
    // arguments[]
}
```
