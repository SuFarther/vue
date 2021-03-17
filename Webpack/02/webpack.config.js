// webpack 构建时，会自动读取此文件


//获取当前路径
const path = require('path');

console.log(__dirname)
module.exports = {
    //入口文件
    entry: './src/index.js',

    //出口文件
    output: {
        //文件名
        filename : 'main.js',
        //路径,要绝对路径
        path : path.resolve(__dirname,'./dist')
    },
    //生成模式
    mode : "development"
};
