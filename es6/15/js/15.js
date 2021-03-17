//创建一个 Set 集合
// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(2);
// set.add('2');
// set.add('c');
// console.log(set); //Set{1,2,'2','c'}
// console.log(set.size); //4


//PS:向集合添加 5 个元素，只有四个有效，并且 2 和字符串’2’不冲突，空对象也不冲突;

//我们也可以通过构造函数传递参数的方式进行初始化集合，比如接受一个数组;
//通过构造参数初始化集合
// let set = new Set([1,2,2,3,3,4,5]);
// console.log(set); //Set {1, 2, 3, 4, 5}

// 使用has()方法查找是否存在指定元素，注意2和’2’是两个元素，不会隐式转换;
// let set = new Set([2,'2']);
// // console.log(set.has(2)); //true
// // console.log(set.has('2'));//true
// console.log(set.delete(2)); //删除元素
// console.log(set);
// console.log(set.clear());//清空 undefined

// let set = new Set([1,2,3,4]);
// let array = [...set];
// console.log(array); //[1,2,3,4]


//我们可以使用for或者forEach来遍历Set集合;
//for...of 遍历

// let set = new Set([1,2,3,4]);
// for (let i of set) {
//     console.log(i); //1,2,3,4
// }

//forEach 变量
//在 Set 集合中 key 和 value 都是值
//s 表示 set 集合本身
// set.forEach(function (key,value,s){
//     console.log(value); //1,2,3
// });

//Set集合还提供针对对象的WeakSet集合，添加非对象类型会报错;
// Weak Set集合支持add()、has()和delete()方法;
//Weak Set 不支持遍历，内部隐藏(无法查看内容)，不支持 foreach 和 size;
//对于应用场景来说，存放对象的弱引用，不用担心对象被回收后引发的问题;

//强引用
// let set = new Set(),
//     obj = {1:1};
// set.add(obj);
// console.log(set); //引用存在
// //移出应用
// obj = null;
// console.log(set); //引用依然存在


//弱引用
let ws = new WeakSet(),
    obj = {1:1};
ws.add(obj);
console.log(ws.has(obj)); //true 引用存在
//移出应用
obj = null;
console.log(ws.has(obj)); //false 随着销毁而释放
