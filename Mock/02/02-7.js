const Mock = require('mockjs');
//Mock.js的语法规范包括两个部分:数据模板定义规范和数据占位定义规范;
//数据模板定义的规范包含3个部分:属性名、生成规则和属性值;
//'属性名|生成规则' : 属性值 //'name|rule' : value
const data = Mock.mock({
    //生成布尔值，概率为 min/(min + max)
   'list|1-10' : [{
       'flag|1-10' : true
   }]
})

console.log(data);
console.log(JSON.stringify(data,null,4));