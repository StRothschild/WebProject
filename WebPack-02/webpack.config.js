const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'static')
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
    }
};