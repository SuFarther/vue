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