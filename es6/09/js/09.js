//ES6提供了u修饰符，对占两个字符特殊字进行正则识别;
// /吉{2}/.test('吉吉'); //true
// /?{2}/.test(''); //false
// /?{2}/u.test(''); //true


// ES6提供了y修饰符，它的作用是当匹配过一次后继续往下匹配;
// let text = 'xxx_xx_x_', patt = /x+_/y;
// console.log(patt.exec(text)); //xxx_
// console.log(patt.exec(text)); //xx_
// console.log(patt.exec(text)); //x_

// let text = 'xxx_xx_x_', patt = /x+_/y;
//对于y修饰符，ES6提供了stikcy属性，用来检测是否存在y修饰符;
//console.log(patt.sticky);

//ES6提供了flags属性,用于返回正则使用的修饰符名称;
// console.log(patt.flags); //y

//.表示匹配所有，除了终止符，比如回车\n换行\n等等，使用s修饰符匹配;
// let text = 'x\nyz', patt = /x.+yz/s;
// console.log(patt.test(text)); //true

//ES6支持修饰符替换，之前的这种写法会直接报错;
//ES6 支持修饰符替换，之前会报错
let regex = new RegExp(/xyz/iu, 'g');
console.log(regex.flags); //g
