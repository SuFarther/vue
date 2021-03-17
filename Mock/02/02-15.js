const Mock = require('mockjs');

//支持函数

const obj = [{
    name : 'Mr.Lee',
    age : 20,
    gender : '男'
}]

const arr = [1,2,3,4]


function fn(){
   console.log("Hello,Vue!")
}


const data = Mock.mock({
    //重复 min-max 次组成新数组
   'list|1-10' : [{
       'obj|1-3' : obj,
       'arr|1-2' : arr,
       'fn|1' : fn,
       'reg|1' : /[a-z]/
   }]
})

console.log(data);
console.log(JSON.stringify(data,null,4));