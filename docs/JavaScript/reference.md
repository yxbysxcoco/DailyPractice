## Object 类型

```js
// 创建对象的两种方法
// 构造函数法
var person = new Object();
// 对象字面量法
var people = {
    name: "zhaosi"
};
// 访问对象属性的两种方法
people.name;
people["name"];
// 使用方括号来访问变量可以通过变量的形式
var propName = "name";
people[propName];
```

## Array 类型

```js
// 创建数组的方式
var arr = new Array("1", 2, 3);
var arr = new Array(20); // 创建length为20的数组
// 也可以省略new
var arr = Array();
Array.isArray(arr); // true
// 你也可以用instanceof检测,但是instanceof只适合全局环境下的arr
arr instanceof Array; // true
// 使用join可以将数组拼接成一个字符串
arr.join("|"); // x | x | ...
```

### 栈方法

```js
var arr = [1, 2, 3];
arr.push(1); // 1 2 3 1
arr.pop(); // 1 2 3
```

### 队列方法

```js
var arr = [1, 2, 3];
arr.unshift(1); // 1 1 2 3
arr.shift(); // 1 2 3
```

### 重排序方法

```js
var arr = [1, 3, 2];
arr.reverse(); // 2 3 1
var values = [0, 1, 5, 10, 15];
values.sort();
// 0, 1, 10, 15, 5
// 可以给sort传入一个比较函数制定排序规则
function compare(val1, val2) {
    if (val1 < val2) return -1;
    else if (val1 > val2) return 1;
    else return 0;
}
values.sort(compare);
// 0 1 5 10 15
```

### 操作方法

```js
var arr = [1, 2];
arr.concat(1, 2);
// 1 2 1 2
arr.splice(0, 2);
// 1 2
arr.splice(0, 0, 2);
// 2 1 2
arr.splice(0, 1, 3);
// 3 1 2
```

### 位置方法

```js
var arr = [1, 2, 3, 4, 4, 4];
arr.indexOf(3); // 2
arr.lastIndexOf(4); // 5
```

### 迭代方法

-   every
-   fliter
-   forEach
-   map
-   some

### 归并方法

-   reduce
-   reduceRight

## Date 类型

-   Date.parse()
-   Date.UTC()
-   Date.now()
-   ...

## RegExp 类型

-   g 全局,而非在发现第一个匹配项时停止
-   i 表示不区分大小写
-   m 表示多行模式
-   . 表示末尾
-   [] 表示一个组

```js
var re = new RepExp("cat", "i");
re.test(string);
re.exec(string); // 会含有index
```

## Function 类型

```js
var func = function() {
    //
};

function func() {
    //
}
```

### 没有重载

函数也是继承自 Object, 在 js 中万物皆引用, 所以如果使用类似重载的语法会覆盖掉之前的定义

### 函数声明与函数表达式

函数声明会有一个函数声明提升的过程,因此可以在脚本刚开始的时候就使用这个函数

### 函数内部属性

-   arguments
-   this

函数的 this 在定义的时候尚不明确,只有在调用的时候在知道,如下几种调用方式

```js
function func() {
    console.log(this);
}
func(); // this --> window

var p = new Object();
p.f = func();
p.f(); // this --> p
```

## 基本包装类型

### Boolean 类型

注意下面这几点区别

```js
var bObj = new Boolean(false);
var bBool = false;

typeof bObj; // object
typeof bBool; // boolean
bObj instanceof Boolean; // true
bBool instanceof Boolean; // false
```

### Number 类型

```js
var num = new Number(10);
num.toFixed(); // "10"

var nObj = new Number(1);
var nNum = 1;

typeof nObj; // object
typeof nNum; // boolean
nObj instanceof Number; // true
nNum instanceof Number; // false
```

### String 类型

-   length 返回字符串的长度
-   charAt 返回在位置 1 的字符
-   slice 一个参数时除去前几个字符 两个参数时截取 arg1 到 arg2 位置的字符
-   substring 会把所有负值的参数转化成 0
-   substr
-   indexOf
-   lastIndexOf
-   trim 过滤所有空格

## 单体内置对象

### Global 对象

终极兜底对象

### Math 对象

提供了一些数学公式方法
