const Mock = require('mockjs');


const obj = [{
    name : 'Mr.Lee',
    age : 20,
    gender : '男'
}]

const arr = [1,2,3,4]


const data = Mock.mock({
    //重复 count 次组成新数组
   'list|1-10' : [{
       'obj|1-3' : obj,
       'arr|2' : arr
   }]
})

console.log(data);
console.log(JSON.stringify(data,null,4));