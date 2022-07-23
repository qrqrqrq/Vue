//该文件用于创建Vuex里最为核心的store

// 引入Vuex
import Vuex from "vuex";
// 引入Vue
import Vue from "vue";
// 使用插件
Vue.use(Vuex);
// 准备actions---用于响应组件中的动作
const actions = {
    // add : function () {}中的 : function 可以省略
    // add(context, value) {
    //     context.commit("ADD", value);
    // },
    // minus(context, value) {
    //     context.commit("MINUS", value);
    // },
    addOdd(context, value) {
        if (context.state.sum % 2 != 0) context.commit("ADD", value);
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit("ADD", value);
        }, 1000);
    },
};
// 准备mutations---用于操作数据(state)
const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    MINUS(state, value) {
        state.sum -= value;
    },
};
// 准备state---用于存储数据
const state = {
    sum: 0, //当前的和
    school: "尚硅谷",
    subject: "前端",
};
// 准备getters---用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10;
    },
};

// 创建、暴露store
export default new Vuex.Store({
    actions: actions,
    mutations,
    state,
    getters,
});
