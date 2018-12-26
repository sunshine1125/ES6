// 数值的扩展

// 被移植的函数 - 目的：减少全局性的函数，把全局函数合理地规划到其他对象下，渐渐实现语言的模块化
// 在ES5中，我们存在几个全局函数 isNaN函数，isFinite函数，parseInt函数，parseFloat函数等
// 但是在ES6的标准中，isNaN方法被移植到了Number对象上，也就是原本属于全局对象window下的函数，现在属于Number对象上了，同样被处理的函数还有isFinite函数，parseInt函数，parseFloat函数

// Number.isNaN函数
    console.log(isNaN(2.5)); // false
    console.log(Number.isNaN(2.5)); // false
    // 区别
    console.log(isNaN('abc'));//结果：true
    // 'abc'无法转为一个数值，返回true
    console.log(Number.isNaN('abc')); //结果：false
    // 'abc'是字符串，Number.isNaN不做类型转换，只对数值类型有效，直接返回false

// Number.isFinite函数
// 用来检查一个数值是否非无穷
    console.log(Number.isFinite(1)); // 结果：true，数值1是有穷，即非无穷
    console.log(Number.isFinite(Infinity)); // 结果：false，Infinity表示无穷大的特殊值
    console.log(Number.isFinite('abc')); // 结果：false，只对数值类型有效，非数值一律返回false
    // 区别
    console.log(Number.isFinite(true)); // 结果：false
    console.log(isFinite(true)); // 结果：true，传统方法先调用Number()将非数值的值转为数值，再进行判断

// Number.parseInt函数
// 作用没有变化
    console.log(parseInt('12.3abc')); // 结果：返回数值12
    console.log(Number.parseInt('12.3abc'));// 结果：返回数值12

// Number.parseFloat函数
// 作用保持不变
    console.log(parseFloat('12.36abc')); // 结果：返回数值12.36
    console.log(Number.parseFloat('12.36abc'));// 结果：返回数值12.36

// 新增的函数

// Number.isInteger函数
// 用来判断是否是整数
    console.log(Number.isInteger(3.2)); // 结果：false
    console.log(Number.isInteger(3)); // 结果：true
// 注意：在javascript内部对整数和浮点数采用一样的存储方式，因此小数点后如果都是0的浮点数，都会被认为是整数
    console.log(Number.isInteger(3.0)); // 结果：true
    console.log(Number.isInteger(3.00)); // 结果：true

// Number.EPSILON常量
// 定义一个极小的数值
    console.log(Number.EPSILON); // 结果：2.220446049250313e-16
// Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了
// 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。
// 我们知道浮点数计算是不精确的，如果浮点数计算得到的误差不超过Number.EPSILON的值，就表示可以接受这样的误差
    console.log(0.1 + 0.2); // 结果：0.30000000000000004

// 安全整数和Number.isSafeInteger函数
// JavaScript能够准确表示的整数范围在-2^53到2^53之间，超过这个范围，无法精确表示这个值，便称之为不安全
    console.log(Math.pow(2, 53)); // 结果：9007199254740992
    console.log(9007199254740992); // 结果：9007199254740992
    console.log(9007199254740993); // 结果：9007199254740992
    console.log(9007199254740992 === 9007199254740993); // 结果：true
// 为此，ES6定义了两个常量来表示这个范围的最大值和最小值：Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER
    console.log(Number.MAX_SAFE_INTEGER === 9007199254740992); // 结果：false
    console.log(Number.MAX_SAFE_INTEGER === 9007199254740991); // 结果：true
    console.log(Number.MIN_SAFE_INTEGER === -9007199254740992); // 结果：false
    console.log(Number.MIN_SAFE_INTEGER === -9007199254740991); // 结果：true
// Number.isSafeInteger函数则是用来判断一个整数是否落在这个范围之内
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)); // 结果：true
    console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER+1)); // 结果：false

// ES6给数值带来的扩展，除了对Number对象进行了扩展，还对Math对象进行了扩展。
// ES6给Math对象新增了17个函数，我们只挑选几个常用的学习一下

// Math.trunc函数
// 用于去除一个数的小数部分，返回整数部分
// 如果传入的参数是整数，就直接返回整数，如果是小数，就去除小数部分，返回整数部分
    console.log(Math.trunc(2)); // 结果：2
    console.log(Math.trunc(2.1)); // 结果：2
// Math.sign函数
// 用来判断一个数到底是正数、负数、还是零
// 传入的参数如果是正数，结果返回1；如果是负数，结果返回-1；如果是0，结果返回0；如果是一个非数值类型的参数，结果返回：NaN。
    console.log(Math.sign(2)); // 结果：1
    console.log(Math.sign(-2)); // 结果：-1
    console.log(Math.sign(0)); // 结果：0
    console.log(Math.sign('aaa')); // 结果：NaN
// Math.cbrt函数
// 用于计算一个数的立方根
    console.log(Math.cbrt(8)); // 结果：2
    console.log(Math.cbrt(64)); // 结果：4

// 除了这三个函数以外，剩下的新增函数都是一些高中时期的数学方法，用到的时候再去查好了
// Math.acosh(x) 返回 x 的反双曲余弦。
// Math.asinh(x) 返回 x 的反双曲正弦。
// Math.atanh(x) 返回 x 的反双曲正切。
// Math.clz32(x) 返回 x 的 32 位二进制整数表示形式的前导 0 的个数。
// Math.sinh(x) 返回x的双曲正弦。
// Math.cosh(x) 返回 x 的双曲余弦。
// Math.expm1(x) 返回 eˆx - 1。
// Math.fround(x) 返回 x 的单精度浮点数形式。
// Math.hypot(...values) 返回所有参数的平方和的平方根。
// Math.imul(x, y) 返回两个参数以 32 位整数形式相乘的结果。
// Math.log1p(x) 返回 1 + x 的自然对数。
// Math.log10(x) 返回以 10 为底的x的对数。
// Math.log2(x) 返回以 2 为底的 x 的对数。
// Math.tanh(x) 返回 x 的双曲正切。