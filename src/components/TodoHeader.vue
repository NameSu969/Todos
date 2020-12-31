<template>
    <div class="header">
        <h1 class="title">待办事项</h1>
        <input type="text" class="new-todo"  placeholder="需要做什么?" v-model.trim="text" @keyup.enter="add">
    </div>
</template>

<script>
export default {
    name: 'TodoHeader',
    data: function(){
        return {
            text: '',
        }
    },
    methods: {
        add: function(){
            if(this.text == '') return;
            this.$emit('add-todo',this.text);
            this.text='';
        }
    }
}
</script>

<style>

</style>