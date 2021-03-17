//数组解构赋值，有两种基本的写法:1.分行解构;2单行解构;
// let info = ['Mr.Lee',30,'女'];  //数组赋值
// let [name,age,gender] = info;  //数组解构赋值



// let info = ['Mr.Lee',100,'男'],
//     [name,age,gender] = info; //同上
//
// console.log(info);

//单行结构,以上均可输出name值
// let [name,age,gender] = ['Mr.Lee',100,'男'];
// console.log(name);


//数组层次也需要匹配
// let [name,[age,gender]] = ['Mr.Lee',[30,'女']];
// console.log(name+','+age);

//用逗号作为占位符不赋值
// let [,,gender] = ['Mr.Lee',30,'男'];
// console.log(gender);

//当gender没有赋值时,采用默认值
// let [name,age,gender = '男'] = ['Mr.Lee',30];
// console.log(gender);

// 还有一种...var的语法，可以将没有赋值的内容都赋值给这个变量;
// 不定元素,将其余都赋值给other
// let[name,...other] =['Mr.Lee',100,'男'];
// console.log(...other);

//对象的解构方式和数组大同小异，定义一个对象字面量，然后解构赋值;
//定义对象字面量
// let obj = {
//     name : 'Mr.Lee',
//     age: 100,
// };
//解构对象至变量
// let {name,age} = obj;
//({name,age} = obj);
//直接输出变量
// console.log(name);
// console.log(age);


//如果说，解构的变量名是已经存在的变量，那会导致如何?
// let obj = {
//     name : 'Mr.Lee',
//     age : 20,
// },name = 'Mr.Wang'; //被替代
//
// ({name,age}=obj);
// console.log(name);

//对象变量解构也可以设置一个默认值，在没有赋值时输出默认值;
// let obj = {...};
// let {name,age,gender= '女'} =obj;
// console.log(gender); //如果没有默认值则undefined

//如果不想要对象属性名作为解构变量，可以通过键值对的方式更改变量名;
// let {name: myName, age : myage} = obj; //name将失效

// 在对象字面量里，还嵌套了对象，解构时也用相同的方法是解开即可;
// let obj = {
//     name : 'Mr.Lee',
//     age : 30,
//     info : {
//         id:1,
//         gender:'男'
//     }
// };
//
// let {info: {id,gender}} = obj;
// console.log(gender);

//对象的解构也支持单行的简写模式
let {name,age} = {name : 'Mr.Lee',age : 100};