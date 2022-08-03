import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

// 引入两个小仓库
import home from '@/store/home'
import search from '@/store/search'


// 对外暴露Store类的一个实例
export default new Vuex.Store({
    // 实现vuex仓库模块式存储开发
    modules: {
        home,
        search
    }
})