// 人员管理功能相关的配置
import axios from "axios";
import { nanoid } from "nanoid";
const personOptions = {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            // indexOf() 方法返回调用它的 String 对象中第一次出现的指定值的索引
            if (value.name.indexOf("王") === 0) {
                context.commit("ADD_PERSON", value);
            } else {
                alert("添加的人必须姓王！");
            }
        },
        addPersonServer(context) {
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                (response) => {
                    context.commit("ADD_PERSON", { id: nanoid(), name: response.data });
                },
                (error) => {
                    alert(error.message);
                }
            );
        },
    },
    mutations: {
        ADD_PERSON(state, value) {
            console.log("mutations中的ADD_PERSON被调用了");
            state.personList.unshift(value);
        },
    },
    state: {
        personList: [{ id: "001", name: "joeyee" }],
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name;
        },
    },
};
export default personOptions;
