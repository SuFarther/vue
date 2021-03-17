//ES6支持模块化设计，也能其它后端语言一样使用导入导出的功能;
// import {name,sum,Person} from  './module.js';
// console.log(name);
// console.log(sum(10,20));
// console.log((new Person('Mr.Lee').run()));

//也支持使用*号,将所有导出的内容全部加载进来
// import  * as module from './module.js';
//
// console.log(module.name);
// console.log(module.sum(10,20));
// console.log((new module.Person('Mr.Lee').run()));

//支持别名设定，设定别名后，源名即失效了；
// import  {name as user} from './module.js';
// console.log(user); //name无效了

//可以给导出设置一个默认值，导入部分就可以不用花括号了;
// import name from  './module.js';
// import name, {sum,Person} from './module.js';
// console.log(name);
// console.log(sum(10,20));
// console.log((new Person('Mr.Lee').run()));

const  name = require('./common.js');
console.log(name);
