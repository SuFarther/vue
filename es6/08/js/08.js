//对于一些超过两个字符(四字节)的异体字，ES6新增了codePointAt()方法;
//两个字符的异体字,这里用?代替，文档显示不出来，上面土，下面口
// let text =  '?';
// console.log(text.length); //1
// console.log(text.charAt(0)); //?
// console.log(text.charCodeAt(0)); //63
// console.log(text.charCodeAt(1)); //NAN
// console.log(text.codePointAt(0)); //63

// let text = '吉';
// console.log(text.length);//1
// console.log(text.charAt(0)); //吉
// console.log(text.charCodeAt(0)); //21513
// console.log(text.charCodeAt(1)); //NAN
// console.log(text.codePointAt(0)); //21513

//对于超过两字符的码点，可以通过ES6新增的String.fromCodePoint()得到;
//console.log(String.fromCodePoint(134071)); //吉

//ES6提供normalize()方法用于有音标的符号组合形式进行统一;
// console.log('\u01D1'); //0
// console.log('\u004F'); //0
// console.log('\u030C'); //⬇️
// console.log('\u004F\u030C'.normalize() == '\u01D1'.normalize()); //true

//ES6提供了三种判断字符串的方法:includes()、startsWith()和endsWith();
// let text = 'Hello, Mr.Lee!';
// console.log(text.includes('Mr.')); //true，是否找到'Mr.'
// console.log(text.startsWith('ello')); //false，必须从开头找
// console.log(text.endsWith('ee!')); //true，必须从结尾找
// console.log(text.includes('Mr.', 8)); //false，超过位置，第二参数寻找的位置


//repeat()重复字符串，padStart()补全字符串头部，padEnd()补全字符串尾部;
// console.log('x'.repeat(5));//xxxxx
// console.log('xyz'.repeat(3)); //xyzxyzxyz
// console.log('Mr.Lee'.repeat(0)); //空
//
// console.log('x'.padStart(5, 'Mr')); //MrMrx
// console.log('x'.padEnd(5, 'Mr')); //xMrMr


//在ES6之前，字符串内夹杂变量，我们总是通过分离和+号连接解决;
// let name ='Mr.Lee',
//     age = 100,
//     text ='我是'+name+',今年'+age+'岁';
// console.log(text);

//现在可以直接使用(`)反引号配合${var}模版语法格式，直接实现变量解析功能;
// let name ='Mr.Lee',
//     age = 100,
//     text = `我是${name}，今年${age}岁`; // \`转义
// console.log(text);
// let name ='Mr.Lee',
//     age = 100,
//     //支持多行操作
//     text = `我是
//     ${name}，今年
//     ${age}岁`;
// console.log(text);

//如果我们想在字符串中插入表达式，也可以使用${a + b}模版语法;
// text = `一加一等于:${1+1}`;
// console.log(text);

//${${}}这种模版嵌套的方式，也是支持的;
// var flag = 2;
// text = `结果:${flag ? `true${1+1}` : 'false'}`;
// console.log(text);

//可以使用String.raw来得到原生字符串;
text = String.raw `我\n 是`;
console.log(text);
