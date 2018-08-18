// 导入 path 模块
const path = require('path');

module.exports = {
    entry: path.resolve('main.js'),    // path.resolve 返回一个以相对于当前的工作目录的绝对路径  

    devServer: {
        contentBase: 'src/main/resources/static',
        proxy: {
            // 前端请求 http://localhose:8080/api/vi/test 代理后变成 http://newsrec.netease.com/zhimei/api/vi/test
            "/api": {
                target: "http://newsrec.netease.com/zhimei",
                changeOrigin: true    //changes the origin of the host header to the target URL
            }
        }
    },
};