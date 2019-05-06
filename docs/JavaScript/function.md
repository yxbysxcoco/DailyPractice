## 声明

```js
// 带有声明提升的声明
function sayHi() {
    // ...
}
// 拉姆达表达式,又叫匿名函数
var sayHi = function() {
    //
};
```

## 递归

```js
// 正确使用递归
function factorial(num) {
    if (num == 1) return 1;
    else return arguments.callee(num - 1) * num;
}
```

## 闭包

-   闭包是指有权访问另一个函数作用域中的变量的函数

```js
// 闭包实现一个计数器
var m = function() {
    var n = 0;
    return function() {
        return ++n;
    };
};
m = null;
```

```js
// 闭包的副作用
function func() {
    var res = new Array();

    for (var i = 0; i < 10; i++) {
        res[i] = function() {
            return i;
        };
    }

    return res;
}
// func()  10, 10, 10 ...
function func() {
    var res = new Array();

    for (var i = 0; i < 10; i++) {
        res[i] = (function(num) {
            return function() {
                return num;
            };
        })(i);
    }

    return res;
}
```

闭包的优点

-   避免全局变量
-   可以实现模块化
-   可以用来创建类

闭包的缺点

由于被返回的函数会持有父级函数的作用域的变量,这会阻止垃圾回收机制的运行,会带来内存的消耗。尤其在 IE 中可能导致内存泄露。
所以需要手动清空

## 模仿块级作用域

-   js 没有块级作用域的概念,所以在块语句中定义的变量实际上是通过函数来实现的
-   js 甚至可以多次声明一个变量, 它只会对后续的声明视而不见, 但是却会执行后续声明的变量初始化

```js
(function() {
    // 这里是块作用域
})();
```

## 私有变量

任何在函数中定义的变量都可以看做是私有变量

-   我们把能访问私有变量和私有函数的公有方法称为特权方法

```js
function Obj() {
    var name = "赵四";

    this.publicMethod = function() {
        return name;
    };
}
```

### 静态私有变量

```js
(function() {
    var val = 10;
    Func = function() {};
    Func.prototype.getVal = function() {
        return val;
    };
})();
```

### 模块模式

-   模块模式是为单例创建私有变量和特权方法
-   js 一般通过字面量来创建单例

```js
var singleO = {
    name: "赵四"，
    method: function() {

    }
}
// 模块模式通过给单例添加私有变量和特权方法来使他增强
var singleO = function() {
    var privateName = "道格拉斯"

    return {
        publicName: "赵四",
        publicMethod: function() {
            return privateName
        }
    }
}()
```

### 增强的模块模式

-   通过将返回对象字面量的模块模式改为返回一个新创建的对象来达到模块模式的增强
