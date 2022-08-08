import Vue from 'vue'
import App from './App.vue'

// 引入VueRouter
import VueRouter from 'vue-router'

// 引入路由器
import router from './router/index'

// 使用插件
Vue.use(VueRouter);

// 引入store
import store from '@/store'

// 三级联动---全局组件
import TypeNav from '@/components/TypeNav'
Vue.component('TypeNav', TypeNav);

//引入MockServe.js里的数据
import '@/mook/mockServe';
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
    router: router,
    //   注册仓库:组件实例身上会多一个$store属性
    store
}).$mount('#app')
