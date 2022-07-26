// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import TheAbout from "../pages/TheAbout.vue";
import TheHome from "../pages/TheHome.vue";

// 创建一个路由器
export default new VueRouter({
    routes: [
        {
            path: "/about",
            component: TheAbout,
        },
        {
            path: "/home",
            component: TheHome,
        },
    ],
});
