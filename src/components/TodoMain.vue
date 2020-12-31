<template>
  <div class="main">
    <span
      class="toggle-all"
      v-show="len.length"
      :class="{active: isChangeAll}"
      @click="$emit('change-all-state')"
    ></span>
    <ul class="todo-list">
      <TodoItem
        class="todo-item"
        v-for="item in todos"
        :key="item.order"
        :todos="item"
        @change-completed="$emit('change-completed', $event)"
        @remove-todo="$emit('remove-todo', $event)"
        @updata-todo="updataTodo"
      ></TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "TodoMain",
  props: ["todos", "len","isChangeAll"],
  components: {
    TodoItem,
  },
  // data: function () {
  //   return {
  //     text: "",
  //     isEdit: false,
  //   };
  // },
  methods: {
    updataTodo: function (a, b) {
      console.log(a,b);
      this.$emit("updata-todo", a, b);
    },
  },
};
</script>

<style>
</style>