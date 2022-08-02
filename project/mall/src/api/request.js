// 对于axios进行二次封装
import axios from 'axios';
const request = axios.create({
    baseURL: "/api",
    timeout:5000,
})