<template>
  <li>
    <div class="view" v-if="!isEdit">
      <input
        class="toggle"
        type="checkbox"
        @change="changeHandler(todos.order)"
        :checked="todos.completed"
      />
      <span
        :class="{ line: todos.completed }"
        @dblclick="
          text = todos.text;
          isEdit = true;
        "
        >{{ todos.text }}</span>
      <div
        class="destroy"
        @click.stop="$emit('remove-todo', todos.order)"
      ></div>
    </div>
    <input
      type="text"
      class="edit"
      v-if="isEdit"
      v-focus
      v-model.trim="text"
      @keyup.enter="
        $emit('updata-todo', todos.order, text);
        isEdit = false;
      "
      @blur="
        $emit('updata-todo', todos.order, text);
        text = '';
        isEdit = false;
      "
    />
  </li>
  <!-- autofocus="autofocus" 自动获取输入框焦点-->
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todos"], //接受父组件传值  ==>item
  data: function () {
    return {
      text: "",
      isEdit: false,
    };
  },
  methods: {
    //改变状态的id传到父组件
    changeHandler: function (order) {
      this.$emit("change-completed", order);
    },
  },
};
</script>

<style>
</style>