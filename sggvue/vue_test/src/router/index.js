// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import TheAbout from "../pages/TheAbout.vue";
import TheHome from "../pages/TheHome.vue";
import TheNews from "../pages/TheNews.vue";
import TheMessage from "../pages/TheMessage.vue";
import TheDetail from "../pages/TheDetail.vue";

// 创建,暴露一个路由器
export default new VueRouter({
    routes: [
        // 一级路由
        {
            path: "/about",
            component: TheAbout,
        },
        {
            path: "/home",
            component: TheHome,
            // home的子路由
            children: [
                {
                    path: "news",
                    component: TheNews,
                },
                {
                    path: "message",
                    component: TheMessage,
                    children: [
                        {
                            path: "detail",
                            component: TheDetail,
                        },
                    ],
                },
            ],
        },
    ],
});
