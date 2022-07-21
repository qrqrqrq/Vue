const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
    transpileDependencies: true,
    // 关闭语法检查
    lintOnSave: false,

    // 开启代理服务器(方式一)
    // devServer: {
    //     proxy: "http://localhost:5000",
    // },

    // 开启代理服务器(方式二)
    devServer: {
        proxy: {
            "/atguigu": {
                target: "http://localhost:5000",
                pathRewrite: { "^/atguigu": "" },
                // 用于支持websocket
                ws: true,
                // 用于控制请求头中host字段
                changeOrigin: true,
            },
            "/car": {
                target: "http://localhost:5001",
                pathRewrite: { "^/car": "" },
                // 用于支持websocket
                ws: true,
                // 用于控制请求头中host字段
                changeOrigin: true,
            },
        },
    },
});
