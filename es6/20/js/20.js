//什么是代理?即:给目标对象封装一层拦截，外界访问必须先通过这层拦截;
//举个例子:猎头招聘，你自己发布招聘会暴露自身信息，而通过中介则安全的多;
// 首先，我们先来看下代理Proxy的语法:

//目标对象
let obj = {
    name : 'Mr.Lee',
    age  : 20,
    gender : '男'
}

//创建一个代理,参数1拦截的是目标对象,参数2拦截行为
//参数2如果是空对象,代理直接会调用目标对象
// let  p = new Proxy(obj,{
//     //get方法用于拦截某个属性的读取操作
//     //这里直接return,通过代理对象无法访问目标对象的任何属性都是false
//    get(target, property) {
//        return 'fail';
//    }
// });

//代理对象访问name为fail
// console.log(p.name);


//如果想让代理对象公布出合适的信息，可以通过get()两个参数来实现;
//通过属性判断,可以获取目标对象属性的值
//并且还可以各种操作,比如验证、修改等
// let p = new Proxy(obj,{
//     get(target,property){
//         if(property === 'age'){
//             return target[property] - 80;
//         }
//     }
// })
//
// //对外公布年龄
// console.log(p.age);

//我们也可以通过set()方法来对代理对象的属性进行赋值，有三个参数;
//set 可以拦截某个属性的赋值操作，比 get 多了参数 3

// let p = new Proxy(obj,{
//     set(target, property, value) {
//         if (property === 'age') {
//             if (!Number.isInteger(value) || value > 150) {
//                 throw new TypeError('年龄数据不合法!'); }
//             target[property] = value;
//         }
//     }
// })


//代理并不是复制克隆目标对象,只是拦截目标对象更改默认行为
//代理可以使用set()和get()方法,对目标对象的数据进行过滤和验证
//代理对象中任何未公开或不存在的属性，可自定义返回内容,比如fail或已屏蔽
//代理也可以阻止赋值的默认行为: 直接return  false,就禁止赋值
// set(target,property,value){
//     return false;
// }

//通过代理对象对属性进行赋值
// p = 25;
// console.log(p.age);
// console.log(obj.age); //目标对象也被更改