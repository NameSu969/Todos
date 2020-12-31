<template>
  <div class="footer">
    <span class="todo-count">剩余{{ num }}件</span>
    <ul class="filters">
      <li>
        <a href="javascript:;" :class="{ active: state ===  'All'}" @click="$emit('change-state','All')">所有</a>
      </li>
      <li>
        <a href="javascript:;" :class="{ active: state ===  'unfinished' }" @click="$emit('change-state','unfinished')">未完成</a>
      </li>
      <li>
        <a href="javascript:;" :class="{ active: state ===  'finish'}" @click="$emit('change-state','finish')">已完成</a>
      </li>
    </ul>
    <span class="clear-completed" @click="$emit('remove-all')" v-show="todoLen">清除已完成</span>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ['state','num','todoLen'],
};
</script>

<style>
</style>