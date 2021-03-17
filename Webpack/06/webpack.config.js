/*
    webpack配置文件，每次执行会自动读取这里的配置
 */

const path = require('path');
//html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //出口文件
    entry: './src/index.js',

    //出口文件
    output: {
        //文件名
        filename: "main.js",
        //路径，绝对路径
        path : path.resolve(__dirname, './dist')
    },


    //模块
    module : {
        //规则
        rules: [
            {
                //规则获取需要部署的文件后缀
                test: /\.css$/,
                //style-loader 将 css 字符串插入到 javascript
                //通过浏览器工具样式被动态插入到<style>标签内
                //css-loader 将 css 文件编译成字符串给 style-loader 处理
                //所以，这里数组的执行顺序是从右到左执行，否则失败;
                use : ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                 //less-loader 会先将.less 文件转换为.css 文件，然后再向左边处理
                use : ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(png|jpg|gif)/,
                loader: 'file-loader', //加载一个loader
                // use: ['file-loader'],
                options: {
                    limit : 10240,
                    name : './img/[name].[ext]' //写入img目录，且按原名和后缀,
                }
            },
            {
                test: /\.html$/,
                use : ['html-loader'] //自动交给url-loader处理
            },

        ]
    },

    //devServer
    devServer: {
        publicPath : '/dist',
        port : 3000,
        stats : 'minimal',
        //clientLogLevel : 'none'
    },

    //插件
    plugins: [
      new HtmlWebpackPlugin({
          template: "./src/index.html", //值为默认值,源文件
          filename: "index.html" //值为默认值,打包生成的文件名
      })
    ],

    //devTool
    devtool: 'inline-source-map',

    // devServer: {
    //     contentBase: './dist',
    // },
    //devServer，publicPath 可以忽略
    devServer: {
        //publicPath : '/dist',
        port : 3000,
        stats : "minimal",
    },

    //生成模式
    mode : "development",

};