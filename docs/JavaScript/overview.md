## 定义

一个完整的 JavaScript 由三个不同的部分构成

-   核心 (ECMAscript)

    由 ECMA-262 定义的 ECMAscript 与浏览器没有依赖关系,浏览器只是他的宿主环境。
    事实上,ECMA-262 定义的只是这门语言的基础

-   文档对象模型 (DOM)

    提供访问和操作网页内容的方法和接口

-   浏览器对象模型 (BOM)

    提供与浏览器交互的方法和接口

## 在 HTML 中使用

-   使用`<script>`元素

```html
<script src="../../xxx.js"></script>

<script src="xxx.com/xxx.js"></script>
```

-   嵌入 JavaScript 与外部 JavaScript

```html
<script type="text/javascript">
    var msg = "hello world";
</script>

<script src="xxx.com/xxx.js"></script>
```

-   禁用 JavaScript 的场景

```html
<noscript>
    <p>抱歉,您的浏览器不支持JavaScript</p>
</noscript>
```
