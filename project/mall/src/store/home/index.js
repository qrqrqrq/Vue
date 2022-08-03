// home的小仓库
import { reqCategoryList } from "@/api";
// 响应组件中用户的动作，书写业务逻辑，处理异步
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        // console.log(result);
        if (result.code === 200) {
            commit("CATEGORYLIST", result.data.slice(0, 16))
        }
    }
}

// 修改state中的数据
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
}

// 保存具体的数据
const state = {
    categoryList: []
}

// 用于将state中的数据加工
const getters = {}


// 对外暴露Store类的一个实例
export default {
    actions,
    mutations,
    state,
    getters
}