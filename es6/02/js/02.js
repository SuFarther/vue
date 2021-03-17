//浏览器环境有一个顶层对象window，其属性和var的全局变量等价;
//如果是window对象的内置属性，则输出默认值，而非内置则undefined;
//var如果设置了window对象的内置属性作为变量，则会直接覆盖;
//console.log(window.name); //空,内置属性
//console.log(window.abcd); //undefined,非内置

//console.log(name); //空,内置全局
//console.log(abcd); //报错

//console.log(window.name ===  name); //true,等价

//var value = 10;
//console.log(window.value); //var的全局变量即window的属性

//var name = 'Mr.Lee';
//console.log(window.name); //内置属性被覆盖

//如果在块级区域不使用let，就会造成全局变量污染的问题;
//{{{...}}}块级作用域支持多层嵌套，每一层均为封闭的，只作用于此;

// {{{
//     {let value = 10;}
//     console.log(value); //报错
// }}}

//ES6之前，采用自我立即执行匿名函数的方式来防止变量污染;
// (function (){
//    var value = 10;
// }());
//
// console.log(value); //报错

//只不过块级作用域内的函数声明，还是可以在全局可访问，并没有封闭;
// {
//     function fn(){
//         console.log('块级函数');
//     }
// }
// fn(); //正常访问


//那么此时，推荐使用函数表达式的方式去构建函数即可;
{
    let fn = function (){
        console.log('块级函数');
    }
    fn();
}
