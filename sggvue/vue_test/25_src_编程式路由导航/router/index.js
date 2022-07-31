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
            name: "guanyu",
            path: "/about",
            component: TheAbout
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
                            name: "xiangqing",
                            path: "detail",//(params参数要用/:id/:title占位)
                            component: TheDetail,

                            // props的第一种写法：值为对象，该对象中的所有key:value都会以props形式传给TheDetail组件
                            /* props: {
                                a: 1,
                                b:'hello'
                            } */

                            // props的第二种写法：值为布尔值，若布尔值为真就会把该路由组件收到的所有params参数以props形式传给TheDetail组件
                            /* 
                               props: true, */
                            
                            // props的第三种写法：值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title,
                                    a: 1,
                                    b:'hello'
                                }
                            }
                        }
                    ],
                },
            ],
        },
    ],
});
