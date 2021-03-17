// let key = 1;
// let value = 'Mr.Lee';
//
//
// //解构操作,变量互换
// [key,value] = [value,key];
//
// console.log(key);
// console.log(value);

//如果函数的返回值是一个数组或对象，直接将函数进行赋值解构;
// function  fn(){
//     return ['Mr.Lee',100,'男'];
// }
// let[name,age,gender] = fn();
// console.log(fn());

// function fn(){
//     return {
//         name:'Mr.Lee',
//         age:100,
//         gender:'男'
//     }
// }
//
// let {name,age,gender} = fn();
// console.log(fn());

//当函数进行参数传递的时候，可以进行数组和对象字面量方式的传参;
// function fn([name,age,gender]){
//     console.log(name);
// }
//
// fn(['Mr.Lee',100,'男']);

// function  fn({name,age,gender}){
//     console.log(name);
// }
//
// fn({
//     name: 'Mr.Lee',
//     age: 100,
//     gender: '男'
// })

//除了对象和数组可以使用解构，字符串类型的数据也可以解构;
// let [x,y,z] = 'ABC';
// console.log(x); //A

// let {length: len} = 'ABC'; //长度
// console.log(len); //输出3

