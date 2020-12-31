import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive('focus',{
  inserted: function(el){
    el.focus();
    console.log('自定义focus指令');
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
