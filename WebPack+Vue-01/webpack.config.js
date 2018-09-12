const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        printfn: './src/printfn.js'
    },
    output: {
        // 基于文件的 md5 生成 Hash 名称的可以用来防止缓存
        filename: '[name].[hash].js',
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
                test: /\.styl$/,
                // 从下至上执行各个 loader，stylus 被编译成 css 并嵌入 html
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'stylus-loader'
                    }
                ]
                // 简略写法1
                //loader: 'style-loader!css-loader!stylus-loader'
                // 简略写法2
                //use: ['style-loader','css-loader','stylus-loader']
            },
            {
                // 使用 link 标签导入 css
                test: /\.css$/,
                use: [
                    'style-loader/url',      // 将 file-loader 加载的文件以 link 标签添加到 HTML
                    'file-loader'            // 将 css 文件当成普通文件加载
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
        // 清理 static 目录下所有文件
        new CleanWebpackPlugin(['./static'])
    ]
};