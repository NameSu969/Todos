<template>
  <div id="app" class="layout">
    <TodoHeader @add-todo="addTodo"></TodoHeader>
    <TodoMain
      :todos="stateComputed"
      :len="todos"
      :isChangeAll="isAllComplated"
      @change-completed="changeCompleted"
      @updata-todo="updataTodo"
      @remove-todo="removeTodo"
      @change-all-state="changeAllState"
    ></TodoMain>
    <TodoFooter
      :state="currentState"
      @change-state="changeState"
      :num="unfinishedComputed.length"
      @remove-all="removeAll"
      :todoLen="finishComputed.length"
    ></TodoFooter>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "../public/style.css";

import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data: function () {
    return {
      todos: [], //{order:1,text:'测试',completed:false}
      currentState: "All",
    };
  },
  computed: {
    // 未完成
    unfinishedComputed() {
      return this.todos.filter((item) => !item.completed);
    },
    // 已完成
    finishComputed() {
      return this.todos.filter((item) => item.completed);
    },
    //监听状态
    stateComputed() {
      switch (this.currentState) {
        case "unfinished":
          return this.unfinishedComputed;
        case "finish":
          return this.finishComputed;
        default:
          return this.todos;
      }
    },
    //监听全选状态
    isAllComplated: function(){
      return this.todos.length == this.finishComputed.length
    }
  },
  methods: {
    //添加todo事项
    addTodo: function (text) {
      this.todos.push({
        order:
          this.todos.length == 0
            ? 0
            : this.todos[this.todos.length - 1].order + 1,
        text: text,
        completed: false,
      });
    },
    //改变todo状态
    changeCompleted: function (order) {
      console.log(order);
      this.todos = this.todos.map((item) => {
        if (item.order === order) {
          return { ...item, completed: !item.completed };
        }
        return { ...item };
      });
      console.log(this.todos);
    },
    // 更新编辑状态
    updataTodo: function (order, newText) {
      console.log(newText)
      // 如果编辑为空删除该事项
      if (newText == "") {
        this.removeTodo(order);
        return;
      }
      this.todos = this.todos.map((item) => {
        if (item.order === order) {
          return { ...item, text: newText };
        }
        return item;
      });
    },
    // 删除指定todo数据
    removeTodo: function (order) {
      this.todos = this.todos.filter((item) => item.order != order);
    },
    // 改变显示状态
    changeState: function (state) {
      console.log(state);
      this.currentState = state;
    },
    // 清除所有已完成
    removeAll: function () {
      // this.todos = this.todos.filter((item) => !item.completed);
      this.todos = this.unfinishedComputed;
    },
    // 勾选所有
    changeAllState: function () {
      if (!this.isAllComplated) {
        this.todos = this.todos.map((item) => {
          return { ...item, completed: true };
        });
      } else {
        this.todos = this.todos.map((item) => {
          return { ...item, completed: false };
        });
      }
    },
  },
};
</script>

<style>
</style>
