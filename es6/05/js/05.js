//ES6之前函数是无法给参数设置默认值的，而ES6支持了这个特性;
// function fn(name,
//             age = 100,
//             arr=[],
//             obj={},
//             callback =function (){}
// ){
    //参数1是必须传递
    //其余参数有默认值,可选传递
    // console.log(arr);
//     console.log(obj);
//     console.log(callback('callback'));
// }
//
// fn('Mr.Lee',200,[1,2,3],{key:1},function (info){
//     return info;
// });

//函数参数到默认值,也可以是另一个函数的返回值
// function pi() { return 3.14;
// }
// function fn(r, p = pi()) { //pi()返回值交给p
//     console.log(r * r * p);
// }
// fn(10);
// console.log(fn(10));


//如果只想传递第二往后的参数，参数一保持默认值，可用undefined占位;
// function fn(name = 'Mr.Lee', age) { //null，空都不行 console.log(name);
//     console.log(age);
// }
// fn(undefined, 100);

//支持参数二使用参数一的值作为默认值，反之不可以;
// function fn(x,y =x){ //(y = x, x)错误
//     console.log(y);
// }
// fn(1);

// function fn(name, ...other) { //不定参数之后不可再有参数 console.log(other);
// }
// fn('Mr.Lee', 100, '男');


function fn() {}
let fn2 = function () {}; let obj = {
    fn3 : function () {}
};
console.log(fn.name); console.log(fn2.name); console.log(obj.fn3.name);
console.log((new  Function()).name); //匿名函数 anonymous

