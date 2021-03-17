const Mock = require('mockjs');


const obj = [{
    name : 'Mr.Lee',
    age : 20,
    gender : '男'
}]


const data = Mock.mock({
    //从对象中随机抽取 min-max 属性
   'list|1-10' : [{
       'obj|1-3' : obj
   }]
})

console.log(data);
console.log(JSON.stringify(data,null,4));