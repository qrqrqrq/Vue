import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router'

// 引入路由器
import router from './router/index'

// 使用插件
Vue.use(VueRouter);

// 三级联动---全局组件
import TypeNav from './pages/Home/TypeNav'
Vue.component('TypeNav', TypeNav);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router:router
}).$mount('#app')