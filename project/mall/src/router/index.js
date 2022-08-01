// 配置路由的地方
import VueRouter from 'vue-router'
// 引入路由组件
import Home from '../pages/Home'
import Search from '../pages/Search'
import Login from '../pages/Login'
import Register from '../pages/Register'

// 解决编程式导航路由跳转到当前路由(参数不变), 多次执行会抛出NavigationDuplicated的警告错误

// 1.先把VueRouter原型对象的push|replace保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 2.重写replace和push
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this,location,resolve,reject)
    } else {
        originPush.call(this,location,()=>{},()=>{})
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(
        this,
        location,
        () => {},
        () => {}
        );
    }
};

// 配置路由
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta:{show:true}
        },
        {
            name:"search",
            path: "/search/:keyword",
            component: Search,
            meta:{show:true}
        },
        {
            path: "/login",
            component: Login,
            meta:{show:false}
        },
        {
            path: "/register",
            component: Register,
            meta:{show:false}
        },
        // 重定向：在项目跑起来的时候，访问/立马定向到首页
        {
            path: "*",
            redirect:"/home"
        },
        
    ]
})