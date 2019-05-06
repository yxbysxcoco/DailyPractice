## 节点层次

html 最终会以树的结构进行渲染,即 dom 树

### node 类型

-   appendChild() 向 dom 树中添加一个节点
-   insertBefore 插入到节点中的某个位置

```js
someNode.insertBefore(newNode, someNode.lastChild); // 插入到最后一个子节点前面
someNode.insertBefore(newNode, null); // 插入到最后一个子节点
someNode.insertBefore(newNode, someNode.firstChild); // 插入到第一个子节点
```

-   removeChild 移除子节点

### document 类型

js 中通过 document 表示文档

-   document.URL 包含页面完整的 URL
-   document.domain 包含页面的域名
-   getElementById
-   getElementsByTagName

### Element 类型

-   getAttribute 取得特性,如 id,style
-   setAttribute 设置特性
