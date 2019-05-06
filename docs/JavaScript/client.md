## 能力检测

能力检测又称特性检测。能力检测的目标不是检测特定的浏览器而是识别浏览器的能力

-   能力检测主要通过判断浏览器支持的能力进行兼容
-   要注意不能通过另一个属性判断是否属于 IE 或其他然后来使用另外的接口

### 更可靠的能力检测

```js
function isSortable(object) {
    return typeof object.sort === "function";
}
```

### 能力检测并不是浏览器检测

要注意的是能力检测只能知道是否存在这个方法的实现,并不能因此确定浏览器

## 用户代理检测

争议最大的一种客户端检测技术叫做用户代理检测,一般在服务端通过检测用户代理字符串来确定用户使用的浏览器是一种常用且广为接受的做法

### 编写呈现引擎

```js
var client = function() {
    var engine = {
        ie: 0,
        gecko: 0,
        webkit: 0,
        khtml: 0,
        opera: 0,
        ver: null
    };
    return {
        engine: engine
    };
};
```
