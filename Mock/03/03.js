const Mock = require('mockjs');


const obj = [{
    name : 'Mr.Lee',
    age : 20,
    gender : '男'
}]

const arr = ['a','b','c','d','小苏']




//创建模拟数据
const data = Mock.mock({
    'list|1-10' : [{
        'obj|1-3' : obj,
        'arr|1-2' : arr,
        'reg|1' : /[a-z]/,
        cname : '@cname',
        city :  '@city',
        full : '@cname - @city',
        id   : '@id',
        title : '@ctitle',
        color : '@color',
        image : '@image',
        ip   : '@ip',
        url  : '@url',
        string : '@string',
        int  : '@integer',
        date  : '@datetime'
    }]
});

//自行扩展,各种商店名称
Mock.Random.extend({
    cstore() {
        return this.pick([
            '宠物店',
            '美容店',
            '小吃店',
            '数码店',
            '快餐店'
        ]);
    }
})

//扩展调用
console.log(Mock.mock('@cstore'));

//第一种输入占位符的方式
//console.log(Mock.Random.cname());


//第二种输入占位符的方式
//console.log(Mock.mock('@cname'));


//随机ID
//console.log(Mock.mock('@id'));

//随机中文标题，不带 c 就是英文
// console.log(Mock.mock('@ctitle'));


//随机颜色,十六进制
//console.log(Mock.mock('@color'));

//随机图片,给你一个图片地址
//console.log(Mock.mock('@image'));

//随机ip地址
//console.log(Mock.mock('@ip'));

//随机url地址
//console.log(Mock.mock('@url'));

//随机字符串
//console.log(Mock.mock('@string'));

//随机数值
//console.log(Mock.mock('@integer'));

//随机日期
//console.log(Mock.mock('@datetime'));
