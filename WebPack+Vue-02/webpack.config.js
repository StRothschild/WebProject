// path 是 node 内置模块
const path = require('path');
// 引入插件模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        // 基于文件的 md5 生成 Hash 名称的可以用来防止缓存
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },

    // 使用 source-map 开发工具来查找出错代码
    devtool: 'inline-source-map',

    // 使用 webpack-dev-server 进行本地开发， webpack-dev-server 会读取内存，不会输出文件
    devServer: {
        contentBase: './dist'
    },

    // 解析模块请求
    resolve: {
        alias: {
            // 在请求(import)模块时， Webpack 默认调用的是 runtime 版的 Vue
            // 所以需要通过 resolve 指定带有编译器的 Vue 完整版本 
            // 在 NPM 包的 dist 目录下有多个 Vue 版本，例如 vue.runtime.esm.js 和 vue.common.js
            // esm 代表 ESModule，common 代表 commonejs。详见 Vue 官方文档
            'vue$': 'vue/dist/vue.esm.js'
        }
    },

    // 加载非 js/json 类型的模块时需要通过配置各种加载器来处理并加载
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'stylus-loader']
                })
            },
            {
                // 使用 style 标签导入 css 文件
                test: /\.css$/,
                use: [
                    'style-loader',          // 将 file-loader 加载的文件以 style 标签添加到 HTML
                    'css-loader'             // 将 css 文件加载
                ]
            },
            {
                test: /\.(jpe|png|gif|svg)$/,
                use: [
                    'file-loader'      // file-loader 可以加载任何类型文件
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'   // vue-loader会把vue文件编译成js 文件
            }
        ]
    },

    // 加载并执行插件
    plugins: [
        // 在输出目录下自动构建新的页面模板并自动导入(默认在body底部)编译后的 js 文件
        new HtmlWebpackPlugin({
            title: 'WebPack&Vue',
            filename: 'index.html',
            template: './src/view/indexTemplate.html'
        }),
        // 清理 dist 目录下所有文件
        new CleanWebpackPlugin(['./dist']),
        // 提取 css 文件 
        new ExtractTextPlugin('[name].[hash].css'),  // 输出的 css 文件名，输出路径默认为 output 中 path 的配置
        // 必须引入此插件才能运行 VueLoader
        new VueLoaderPlugin()
    ]
};