//async也是处理异步的，它是对Promise的一种扩展，让异步更加方便;
//优势:async是基于Promise的，虽然是异步操作，但看上去像同步;
//首先，我们先来看下async的基本语法;
//await 关键字:等待异步执行完毕后回调;
// let p = new Promise((resolve, reject) => {
//   if(false){
//       resolve('执行成功!');
//   }else{
//       reject('执行失败!');
//   }
// })
//
//
// let as = async () => {
//     let result = await p;
//     console.log(result); };
// //执行 async 函数
// as();

// PS:上面语法，用 ES5 过渡一下，帮助理解，具体如下:
//     4. 如果有三个异步需要列队输出，我们用async语法来处理一下;
// async function as() {}
// let as = async function () {}


//多个异步，按输出顺序加载，没有 then，清晰很多
// let p1 = new Promise((resolve, reject) => {
//     //模拟异步1
//     setTimeout(()=>{
//         resolve('1.返回异步通信');
//     },3500);
// })

// let p2 = new Promise((resolve, reject) => {
//     //模拟异步2
//     setTimeout(()=>{
//         resolve('2.返回异步通信');
//     },800);
// })
//
// let p3 = new Promise((resolve, reject) => {
//     //模拟异步3
//     setTimeout(()=>{
//         resolve('3.返回异步通信');
//     },1500);
// })


// async function  as(){
//     let r1 = await p1,
//         r2 = await p2,
//         r3 = await p3;
//
//     console.log(r1);
//     console.log(r2);
//     console.log(r3);
// }
//
// as();

// PS:await 关键字只能在 async 函数内部，否则不可识别; PS:从上面的例子中，能感受到语义和清晰度都得到了很大提升，更像同步代码;
//批量异步列队，类似 Promise.all()
// async  function  as(){
//     let all = [await  p1,await  p2,await p3];
//     console.log(all);
// }
// as();

//async函数如果设置了返回值，这个值是Promise对象。
//返回值是 Promise 对象
//相当于 Promise.resolve()
// async  function  as(){
//     return 'hello,async!';
// }
//
// as().then(value => {
//    console.log(value);
// });

let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('执行成功');
    },1500);
})

async  function as(){
    return await  p1;
}
console.log(as()); //得到的是 Promise 对象的 pending 状态
as().then(value => { //这里还是需要then
    console.log(value);
})
