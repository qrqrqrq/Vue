// 求和功能相关的配置
const countOptions = {
    namespaced: true,
    actions: {
        addOdd(context, value) {
            if (context.state.sum % 2 != 0) context.commit("ADD", value);
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit("ADD", value);
            }, 1000);
        },
    },
    mutations: {
        ADD(state, value) {
            state.sum += value;
        },
        MINUS(state, value) {
            state.sum -= value;
        },
    },
    state: {
        sum: 0, //当前的和
        school: "尚硅谷",
        subject: "前端",
    },
    getters: {
        bigSum(state) {
            return state.sum * 10;
        },
    },
};
export default countOptions;
