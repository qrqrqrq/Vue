const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // 配置代理跨域
    devServer: {
        proxy: {
            '/api': {// 只对请求路由以/api开头的请求进行代理转发
                target: "http://gmall-h5-api.atguigu.cn",
                // 不需要路径重写
                changeOrigin:"true"//支持跨域
            }
        }
    }

})
