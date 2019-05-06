## timer 定时器

定时器是全局变量，所以不需要引入

其中除了 setTimeout 和 setInterval 之外
有一个特殊的定时器

他将在任何他后面的方法或语句执行之后执行

> 这里需要了解事件循环的概念

```js
console.log("before immediate");

setImmediate(arg => {
    console.log(`executing immediate: ${arg}`);
}, "so immediate");

console.log("after immediate");

// before immediate
// after immediate
// executing immediate: so immediate
```

## Buffer 缓冲器
