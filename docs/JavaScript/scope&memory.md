## 基本类型和引用类型

堆和栈的区别

> 栈（stack）为自动分配的内存空间，它由系统自动释放；而堆（heap）则是动态分配的内存，大小不定也不会自动释放。

-   基本类型 Undefined | Null | String | Number | Boolean

    存放在栈内存中的简单数据段,数据大小确定,内存空间大小可以分配,是直接按值存放的,所以可以直接访问。

    在我们进行赋值操作的时候,基本数据类型的赋值（=）是在内存中新开辟一段栈内存,然后再把再将值赋值到新的栈中

-   引用类型 Object

    引用类型（object）是存放在堆内存中的,变量实际上是一个存放在栈内存的指针,这个指针指向堆内存中的地址。每个空间大小不一样,要根据情况开进行特定的分配.

```js
var p = new Object();
p.name = "赵四";
console.log(p.name); // "赵四"
var m = "xxxx";
m.name = "尼古拉斯";
console.log(m); // undefined
```

### 复制变量

-   基本类型 在复制基本类型的时候会新分配一个位置,然后把值复制过去
-   引用类型 复制的时候会新增一个指向(内存)中位置的引用

### 深拷贝与浅拷贝

```js
// 深拷贝与浅拷贝
// 浅拷贝只复制一层的对象属性
var obj = { a: 1, arr: [2, 3] };
var shallowObj = shallowCopy(obj);

function shallowCopy(src) {
    var dst = {};
    for (var prop in src) {
        if (src.hasOwnProperty(prop)) {
            dst[prop] = src[prop];
        }
    }
    return dst;
}
// 深拷贝能复制所有的对象属性
function deepCopy(obj, newObj) {
    newObj = newObj || {};
    for (var key in obj) {
        if (obj[key] === obj) continue;
        if (typeof obj[key] === "object") {
            newObj[key] = obj[key].constructor === Array ? [] : {};
            arguments.callee(obj[key], newObj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
```

注意浅拷贝和直接赋值的区别,浅拷贝实际上也创建了新的对象,且修改新对象的第一层属性的时候不会影响到原对象

## 执行环境以及作用域

每个执行环境都有一个与之关联的变量对象,环境中定义的所有变量和函数都保存在这个对象中

```js
var color = "blue";
function foo() {
    var color = "red";
    (function bar() {
        color === "red" ? (color = "pink") : console.log("赵四阻止了你");
    })();
    console.log("bar的上下文: " + color);
}
console.log("foo的上下文: " + color);
foo();

// 结果
// foo的上下文: blue
// bar的上下文: pink
```

### 作用域链

当查找变量的时候,会先从当前上下文(执行环境)的变量对象中查找,如果没有找到,就会从父级(词法层面上的父级)执行上下文的变量对象中查找,一直找到全局上下文的变量对象,也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。

### 延长作用域链

有些语句可以在作用域链的前端新增一个变量对象

-   try-catch 中的 catch
-   with

## 垃圾收集

### 标记清除

记录变量是否进入执行环境,如果进入则不清空,js 中常用

### 引用计数

跟踪每个值使用的次数,若被引用则加 1,若为 0 则清除

### 管理内存

js 中可以通过给引用类型赋值为 null 来解除引用
