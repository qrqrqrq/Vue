// 当前这个模块：API进行统一管理
import requests from "./request";

//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数

export const reqCategoryList = () => 
    // 发请求:axios发请求返回结果是Promise对象
    requests({
        url: '/product/getBaseCategoryList',
        method:'get'
    })
