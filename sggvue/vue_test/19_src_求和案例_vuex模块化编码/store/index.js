//该文件用于创建Vuex里最为核心的store

// 引入Vuex
import Vuex from "vuex";
// 引入Vue
import Vue from "vue";

import countOptions from "./count";
import personOptions from "./person";
// 使用插件
Vue.use(Vuex);

// 创建、暴露store
export default new Vuex.Store({
    modules: {
        countOptions,
        personOptions,
    },
});
