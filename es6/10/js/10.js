//ES6明确二进制、八进制和十六进制分别用0b、0o、0x作为前缀;
// console.log(Number('0b11')); //3
// console.log(Number('0o11')); //9
// console.log(Number('0x11')); //17

// ES6提供了Number.isFinite()、Number.isNaN()判断无穷大和NaN;
//非数值为 false，数值为 true
// console.log(Number.isFinite(100)); //true
//NaN 为 true，其余为 false
// console.log(Number.isNaN(100));//false

//ES6提供了Number.parseInt()、Number.parseFloat()转换整型和浮点型;
// console.log(Number.parseInt('55.55a')); //55
// console.log(Number.parseFloat('55.555b'));//55.555b

// ES6提供了Number.isInteger()，来判断参数是否是一个整型;
// console.log(Number.isInteger(100));//true

//ES6提供了一个常量，值特别小，用于判断是否得到正确结果;
// console.log(Number.EPSILON); //2.220446049250313e-16
// console.log(Number.EPSILON.toFixed(30)); //直观的看 0.000000000000000222044604925031
// console.log((0.1+0.2-0.3)<Number.EPSILON); //true

//ES6+新增了一个指数运算符 **，并且可以进行赋值运算;
// console.log(2**4); //16,4个2相乘
// let num = 2;
// num **= 5;
// console.log(num); //32,5个2相乘

//ES6对Math对象新增了一些方法.trunc()、.sign()、cbrt()、clz32();
//.imul()、.fround()、.hypot()、expm1()、.log1p()、log10()、log2();
console.log(Math.trunc(5.55)); //去掉小数部分
console.log(Math.sign(-5)); //判断是否为正、负、0还是NaN
console.log(Math.cbrt(2)); //求出一个值的立方根
console.log(Math.clz32(1)); //求一个数的32位二进制
console.log(Math.imul(2,-4)); //两个数整数形式相乘的结果带符号
console.log(Math.fround(1.555)); //求一个数单精度浮点形式
console.log(Math.hypot(3, 4)); //求出所有参数平方和的平方根
console.log(Math.expm1(-1));//返回 Math.exp(x)-1
console.log(Math.log1p(1));//求 ln(1+x),Math.log(1+x)
console.log(Math.log10(1));//求 10 为底的 x 的对数
console.log(Math.log2(3));//求 2 为底的 x 的对数



