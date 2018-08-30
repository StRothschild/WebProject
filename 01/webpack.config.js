// 导入 path 模块
const path = require('path');

module.exports = {
    // 输入
    entry: path.resolve('webpackMain.js'),       // path.resolve 返回一个以相对于当前的工作目录的绝对路径  

    // 输出
    output: {
        path: path.join(__dirname, '/dist'),     // path.join 将参数组合成一个路径并返回    __dirname 是 Node.js 全局对象上的一个熟悉代表当前文件的绝对路径  
        filename: 'myWebpack.bundle.js'          // 输出的文件名
    },

    // loader
    module: {
        rules: [
            // 在 require() 或 import 语句中解析 '.txt' 的路径时，先使用 raw-loader 转换一下
            { 
                test: /\.txt$/,
                use: 'raw-loader' 
            }
        ]
    },

    // 本地测试服务配置
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