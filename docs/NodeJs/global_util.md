## Global Object

所有模块都提供这些对象。 以下变量虽然看起来是全局的，但其实并不是。 它们仅存在于模块范围内

-   Buffer 类 处理二进制
-   \_\_dirname
-   \_\_filename
-   clearImmediate(immediateObject)
-   clearInterval(intervalObject)
-   clearTimeout(timeoutObject)
-   console
-   exports
-   global
-   module
-   process
-   require()
-   setImmediate(callback[, ...args])
-   setInterval(callback, delay[, ...args])
-   setTimeout(callback, delay[, ...args])
-   URL
-   URLSearchParams
-   WebAssembly

## util

提供了大部分方便的方法

需要引入 util

```js
const util = require("util");
```
