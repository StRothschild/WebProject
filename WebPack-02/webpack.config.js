const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        printfn: './src/printfn.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'static')
    },

    // 使用 source-map 开发工具来查找出错代码
    devtool: 'inline-source-map',

    // 使用 webpack-dev-server 进行本地开发， webpack-dev-server 会读取内存，不会输出文件
    devServer: {
        contentBase: './static'
    },

    // 加载非 js/json 类型的资源需要通过配置各种加载器
    module: {
        rules: [
            {
                test: /\.css$/,
                // 注意 loader 的加载顺序是从右往左，所以此处应该 style-loader 在前
                use: [
                    'style-loader',    // 将css-loader加载的样式内联到 HTML
                    'css-loader'       // css文件加载器
                ]
            },
            {
                test: /\.(jpe|png|gif|svg)$/,
                use: [
                    'file-loader'      // file-loader 可以加载任何类型文件
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'       // 加载 xml 文件
                ]
            }
        ]
    },

    // 加载并执行插件
    plugins: [
        // 在输出目录下自动构建新 index.html 并自动导入构建后的 js 文件
        new HtmlWebpackPlugin({
            title: 'WebPack Dev'
        }),
        // 清理 static 目录下所有文件
        new CleanWebpackPlugin(['static'])
    ]
};