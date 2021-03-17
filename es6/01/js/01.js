//块级区域
// let count = 30;
// {
//     var value = 10;
//     let count = 20;
// }
// console.log(value);
// console.log(count);

//上述例子直观表现为:1.var出了块级区域有效;2.let出了块级区域无效;
//var声明具有变量提升能力，不管在哪里声明，均视为作用域顶部声明;
//let声明不具备变量提升能力，离开区块的作用域后，则变量立刻失效;
//那么，哪种更好?let更适合局部变量，非常容易掌控且不会导致凌乱;

//而 let 声明方式，就算在后面声明，前面的输出依然是引用错误;
//console.log(value); //undefined
//var value;  //变量提升导致逻辑怪异

//console.log(count); //引用错误
//let count;


//在一个区块内部，只要使用 let 声明，这个区域就形成了封闭的作用域;
//如果在 let 声明前使用变量，这段区域被称为“临时死区(或暂时性死区)”;
// if (true){
//     //死区开始
//     value = 20;
//     console.log(value);
//     //死区结束
//     let value = 10;
//     console.log(value);
// }

//“临时死区”简称:TDZ，这段区域使用 typeof 也会报错;
//一般情况下，typeof 来判断未声明的变量，只会输出 undefined;
//console.log(typeof value);
//let value;

//var 声明可以重复声明同一个变量，后面会取代前一个变量;
//let 声明不可以重复声明一个变量，会直接报错，就算其中一个是 var;
//let value = 20; //两个let报错,let和var各以一个也报错
//var value = 20; //报错,更换顺序报错


//当然，如果一个在作用域外部，一个在作用域内部，则可以并存;
// let value = 20;
// {
//     let value = 10; //不建议相同，会乱的 }
// }
//console.log(value);

//在循环中，var 和 let 的区别尤为明显，let 只在循环内部有效;
//var 全局有效，导致后续再使用 i 会引起干扰，而 let 则不会;
// for (let i = 0;i<10;i++){
//     console.log(i);
// }
// console.log(i); //var   10;let声明，则声明，报错


//如果在循环体内设置函数方法，体外输出 var 会得到不想要的值;
//var list = [];

//for (let i=0;i<10;i++){ //把这里改成 let，则会得到想要的值
    //list[i] = function (){
        //console.log(i);
   // }
//}
//list[5](); //这里不管设置多少，结果都是 10

//const声明的作用是:创建一个只读的常量，一旦声明不可改变;
//和let声明一样，const声明的常量无法提升，也存在临时死区;
//和let不同的是，const声明后必须立刻赋值，否则会报错;
const  PI = 3.14;
console.log(PI); //常量约定俗称大写

