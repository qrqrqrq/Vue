//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//关闭Vue的生产提示
Vue.config.productionTip = false;

// 不太标准的安装事件总线，通过给Vue原型上添加名为x的组件实例vc

// const Demo = Vue.extend({});
// const d = new Demo();

// Vue.prototype.x = d;

//创建vm
new Vue({
    el: "#app",
    render: (h) => h(App),

    // 标准安装全局事件总线：实现任意组件之间通信
    // $bus就是当前应用的vm
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
});
