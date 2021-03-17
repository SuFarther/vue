//ES6提供了Map数据集合，是一种以键值对存储的有序列表;
//创建Map集合
// let map = new Map();
// map.set('name','Mr.Lee');//.set添加，支持.set(...).set(...)
// map.set('age',100);
// console.log(map); //{"name" => "Mr.Lee", "age" => 100}
// console.log(map.get('name'));//.get获取 Mr.Lee


//我们也可以通过构造函数传递参数的方式进行初始化集合，比如接受一个数组;
//通过构造参数初始化集合
// let map = new Map([
//    ['name','Mr.Lee'],
//    ['age',20]
// ]);

// 使用has()检测、delete()删除、clear()清空等对Map集合的操作;
// console.log(map.has('name')); //true
// console.log(map.size); //2
// map.delete('name'); //删除
// map.clear(); //清空
// console.log(map);

//我们可以使用forEach来遍历Map集合，至于for遍历，下个章节说;
// map.forEach(function (value,key,m){
//    console.log(key+'---'+ value);
// });


//Map集合还提供针对对象的Weakmap集合，添加非对象类型会报错;
//WeakMap不支持遍历，内部隐藏(无法查看内容)，不支持foreach和size;
//对于应用场景来说，存放对象的弱引用，不用担心对象被回收后引发的问题;
//弱引用
let wm = new WeakMap(),
    obj = {};

wm.set(obj);
console.log(wm.has(obj)); //true
//移出引用
obj = null;

console.log(wm.has(obj)); //false 回收了