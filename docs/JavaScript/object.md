## 理解对象

### 属性类型

-   数据属性
    -   [[Configurable]] 可配置
    -   [[Enumerable]] 可枚举
    -   [[Writable]] 可修改
    -   [[Value]] 包含这个属性的数据值

```js
var person = {};
Object.defineProperty(person, "name", {
    configurable: false,
    value: "zhaosi"
});
person.name; // zhaosi
```

-   访问器属性
    -   [[Configurable]] 可配置
    -   [[Enumerable]] 可枚举
    -   [[Get]]读取属性的时候调用
    -   [[Set]]写入属性的时候调用

访问器属性不能直接定义,必须通过 difineProperty

```js
var person = {
    _name: "赵四"
};
Object.defineProperty(person, "name", {
    get: function() {
        return this._name
    }
    set: function(val) {
        if(typeof val != "string") {
            console.log("修改失败")
        }else {
            this._name = val
        }
    }
});
person.name // 赵四
person.name = 1 // 修改失败
```

### 读取属性特性

-   getOwnPropertyDescriptor

## 创建对象

### 工厂模式

```js
function createP(name, age, job) {
    var o = new Object()
    o.name = name
    o.age = age
    o.job = job
    return o
}
var p1 = createP("赵四", 11, "码农")
...
```

### 构造函数模式

```js
function Person(name, age) {
    this.name = name
    this.age = age
}
var p1 = new Person("赵四", 10)
...
```

使用 new 操作符调用构造函数实际上会经历下面四个阶段

-   创建一个新对象
-   将构造函数的作用域赋给新对象, 因此 this 指向这个新对象
-   执行构造函数中的代码给这个函数添加属性
-   返回这个新对象

因此在上面例子中的 p1 会有一个构造函数(constructor)属性,这个属性指向 Person

下面是构造函数的三种用法

```js
// 当作构造函数使用
var p = new Person("赵四", 18);
// 当作普通函数使用
Person("赵四", 18); // 添加到window 因为this指向是指向window的
// 在另一个对象的作用域中使用
var o = new Object();
Person.call(o, "赵四", 18); // 因为this指向这个对象
o.name; // 赵四
```

但是构造函数显然就会存在一个问题,比如如果这个对象有一个方法在函数中调用了,那么每新建一个实例都要实现一遍这个方法,因此推出了一个新的模式

### 原型模式

```js
function Person() {}
Person.prototype.name = "赵四";
Person.prototype.sayName = function() {
    return this.name;
};
var p = new Person();
p.sayName(); // 赵四
```

### 原型链

在理解原型链之前,我们先来创建一个构造函数

```javascript
function People() {}
```

然后我们用这个构造函数创建一个新的实例

```javascript
var people = new People();
```

让我们打印一下这个 people 是个什么东西

```javascript
people {

}
```

我们都知道构造函数有一个 prototype,那么这个 prototype 是什么

```javascript
console.log(People.prototype === people.__proto__); // true
```

也就是说这个构造函数的 prototype 指向构造函数创建实例的原型

那么这个原型上面的构造函数,自然也就是这个构造函数了

```javascript
console.log(People === people.__proto__.constructor); // true
```

显然我们知道所有的对象都继承自 Object

```javascript
console.log(people.__proto__.__proto__ === Object.prototype); // true
```

那么很简单,如下图

![图解原型链](/../prototype.png)

这个时候我们就知道原型链是什么了,原型链就是上图中这个蓝色的线

每个实例对象（object）都有一个私有属性（称之为**proto**）指向它的原型对象（构造函数的 prototype 属性指向的对象）。该原型对象也有一个自己的原型对象(**proto**) ，层层向上直到一个对象的原型对象为 null。这就是原型链。

我们可以通过

-   hasOwnProperty

来判断某个属性存在这个对象中还是存在这个对象的原型中

如果我们只是给原型添加一个属性或者方法,那么尽管在之前就有这个原型的实例,这个实例也会立刻拥有这个方法。
但是如果重写整个原型,那么就等于切断了联系。

```js
function Person() {}
var p = new Person();
Person.prototype.sayName = function() {
    return "赵四";
};
p.sayName; // 赵四
Person.prototype = {
    sayHi: function() {
        return "Hi";
    }
};
p.sayHi(); // error
```

### 动态原型模式

```js
function Person(name, age) {
    this.name = name;
    this.age = age;
    Person.prototype.sayHello = function() {
        return "hello";
    };
}
```

### 寄生构造函数模式

```js
function P(name, age, job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    return o;
}
var p1 = new P("赵四", 11, "码农");
```

### 稳妥构造函数模式

```js
function P(name, age, job) {
    var o = new Object();
    o.sayName = function() {
        return name;
    };
    return 0;
}
var p1 = P("赵四", 11, "码农");
```

## 继承

### 原型链继承方式

利用原型让一个引用类型继承另一个引用类型的属性和方法

```js
function Parent() {
    this.propName = "爸爸";
}
Parent.prototype.getOwnType = function() {
    return this.propName;
};
function Child() {
    this.name = "儿子";
}
Child.prototype = new Parent();
Child.prototype.getChild = function() {
    return this.name;
};
var c = new Child();
c.getOwnType(); // 爸爸
```

### 借用构造函数继承方式

```js
function SuperType(name) {
    this.name = name;
    this.colors = ["red", "pink"];
}
function SubType(name) {
    SuperType.call(this, name);
}
```

### 组合继承

```js
function SuperType(name) {
    this.name = name;
    this.color = "red";
}
SuperType.prototype.sayName = function() {
    return this.name;
};
function SubType(name) {
    SuperType.call(this, name);
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
```

### 原型式继承

```js
var person = {
    name: "赵四"
};
var anotherP = Object.create(person);
```

### 寄生式继承

```js
function createAnother(o) {
    var clone = object(o);
    clone.sayName = function() {
        return this;
    };
    return clone;
}
```

### 寄生组合式继承

```js
function SuperType(name) {
    this.name = name;
}
SuperType.prototype.sayName = function() {
    return this.name;
};
function SubType(name) {
    SuperType.call(this, name);
}
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
```
