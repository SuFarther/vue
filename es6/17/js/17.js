//迭代器(Iterator)，用于给数据结构提供统一的访问遍历的机制;
//ES6之前的迭代器比较麻烦，而现在引入了生成器对象，让迭代器更加容易;
//首先创建一个生成器方法，方法名前面加上*号，迭代的内容之前使用yield;

//生成器
// function *cit(){
//     yield 1;
//     yield 2;
//     yield 3;
//
//     //PS:1,2,3 是我们要遍历的值;下面我们要创建迭代器;
// }

//迭代器对象的.next()方法，类似指针，每次执行将下移一行;
//迭代器
// let it = cit();
// console.log(it.next()); //1,false
// console.log(it.next()); //2,false
// console.log(it.next()); //3,false
// console.log(it.next()); //undefined,true

//生成器结合循环语句，并且进行传递数组进行迭代;
// function *cit(items)
// {
//     for (let i= 0; items.length;i++){
//         yield items[i]
//     }
// }
//
// let it = cit([1,2,3,4,5]);
// console.log(it.next().value);
//PS:如果作为匿名函数使用:let cit = function *(items);


//默认迭代接口
//很多数据结构类型拥有默认迭代接口，比如:Array、Map、Set等等;
//对于原生就支持迭代器的数据结构，我们不用自己编写生成器迭代器;
//最简单的迭代方式，就是使用for...of迭代语句去遍历即可;
//对于Array数组类型，它提供了有关三个方法:keys()、values()和entries();
let items = [1,2,3,4,5];
console.log(items.keys()); //key, Object [Array Iterator]
console.log(items.values()); //value, Object [Array Iterator]
console.log(items.entries());//key+value, Object [Array Iterator]

// 最简单的迭代方式，就是使用for...of迭代语句去遍历即可;
//for..of 遍历得到 value 值
// for (let i  of items.values()){
//     console.log(i); //1,2,3,4,5
// }

//虽然for...of特别方便，不过你想要用.next()语法也是支持的;
let values = items.values();
console.log(values.next());