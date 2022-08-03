// 对于axios进行二次封装
import axios from 'axios';

// 引入进度条
import nprogress from 'nprogress'
// start：进度条开始    done：进度条结束
// 引入进度条样式
import "nprogress/nprogress.css";

const requests = axios.create({
    // 基础路径，发起请求时候，路径当中会出现api
    baseURL: "/api",
    // 请求超时时间
    timeout: 5000,
})

// 请求拦截器:发请求前做一些事
requests.interceptors.request.use((config) => {
    // config：配置对象，对象里有一个属性很重要，headers请求头
    nprogress.start();
    return config;
})

// 响应拦截器：服务器数据返回之后做一些事情
requests.interceptors.response.use((res) => {
    // 成功的回调函数：服务器相应数据回来以后响应拦截器可以检测到，做一些事情
    nprogress.done();
    return res.data;
}, (err) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('fail'))
})

export default requests;