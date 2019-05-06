## 将 ts 和 vue 集成

首先安装`vue-cli^3.0`，我使用 npm 安装

`npm install -g @vue/cli`

安装好了之后使用`vue ui`进入可视化生成目录界面

## tsx 写法

```tsx
import { Component, Prop, Watch, Emit, Vue } from "vue-property-decorator";
import "./index.less";

interface Item {
  text: string;
  complete: boolean;
}

@Component({
  name: "TodoItem"
})
export default class TodoItem extends Vue {
  @Prop(Object) public item!: Item;
  @Prop(Number) public index!: number;
  @Prop(Number) public edittingIndex!: number;

  public edittingContent = "";

  @Watch("edittingIndex")
  public edittingChange(index) {
    if (index === this.index) {
      this.edittingContent = this.item.text;
    } else {
      this.edittingContent = "";
    }
  }

  @Emit("on-save")
  public save(index, content, event) {
    event.stopPropagation();
    return {
      index,
      content
    };
  }

  @Emit()
  public onEdit(event) {
    event.stopPropagation();
    return this.index;
  }

  @Emit("on-cancel")
  public cancel(event) {
    event.stopPropagation();
  }

  @Emit("on-complete")
  public complete() {
    return this.index;
  }

  protected render() {
    return (
      <li class="item-warp">
        {this.edittingIndex === this.index ? (
          <div>
            <a-input v-model={this.edittingContent} style="width: 200px" />
            <a-icon
              type="check"
              nativeOn-click={this.save.bind(
                this,
                this.index,
                this.edittingContent
              )}
            />
            <a-icon type="close" nativeOn-click={this.cancel} />
          </div>
        ) : (
          <div>
            <span
              style={
                this.item.complete ? { textDecoration: "line-through" } : {}
              }
              on-click={this.complete}
            >
              {this.item.text}
            </span>
            <a-icon type="edit" nativeOn-click={this.onEdit} />
          </div>
        )}
      </li>
    );
  }
}
```

## vuex 写法

```vue
<template>
  <div class="todo">
    <ul>
      <TodoItem
        v-for="(item, index) in list"
        :key="index"
        :item="item"
        :index="index"
        :edittingIndex="edittingIndex"
        @on-save="handleSave"
        @on-edit="handleEdit"
        @on-cancel="handleCancel"
        @on-complete="handleComplete"
      ></TodoItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import TodoItem from "../components/todo-item";
import { State, Mutation } from "vuex-class";

@Component({
  name: "todo",
  components: {
    TodoItem
  }
})
export default class Todo extends Vue {
  @State("todoList") public list;
  @Mutation("updateList") public updateList;
  @Mutation("updateComplete") public handleComplete;

  public edittingIndex = -1;

  public handleSave({ index, content }) {
    this.updateList({ index, content });
    this.handleCancel();
  }

  public handleEdit(index) {
    this.edittingIndex = index;
  }
  public handleCancel() {
    this.edittingIndex = -1;
  }
}
</script>
```
