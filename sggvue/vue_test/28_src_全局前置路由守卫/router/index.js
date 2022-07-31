// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import TheAbout from "../pages/TheAbout.vue";
import TheHome from "../pages/TheHome.vue";
import TheNews from "../pages/TheNews.vue";
import TheMessage from "../pages/TheMessage.vue";
import TheDetail from "../pages/TheDetail.vue";

// 创建,暴露一个路由器
const router =  new VueRouter({
    routes: [
        // 一级路由
        {
            name: "guanyu",
            path: "/about",
            component: TheAbout,
        },
        {   
            name:"zhuye",
            path: "/home",
            component: TheHome,
            // home的子路由
            children: [
                {
                    name:"xinwen",
                    path: "news",
                    component: TheNews,
                    meta:{isAuth:true}

                },
                {
                    name:"xiaoxi",
                    path: "message",
                    component: TheMessage,
                    meta:{isAuth:true},
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

// 全局前置路由守卫---初始化时调用及每次路由切换之前被调用
router.beforeEach((to, from, next) => {
    /* if (to.path === '/home/news' || to.path === '/home/message') {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert("学校名不对，无权限查看")
        }
    }else {
        next()
    } */
    // 简化：if (to.path === '/home/news' || to.path === '/home/message')
    if (to.meta.isAuth) {
        if (localStorage.getItem('school') === 'atguigu') {
            next()
        } else {
            alert("学校名不对，无权限查看")
        }
    }else {
        next()
    }
})
export default router;
