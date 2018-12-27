// 字符串的扩展
// 新特性： 模板字符串
    let name = "Jacky";
    let occupation = "doctor";
    // 模板字符串拼接
    let str2 = `He is ${name},he is a ${occupation}`;
    console.log(str2); // He is Jacky,he is a doctor

//  1. 可以定义多行字符串
        let str3 = `write once ,
                   run anywhere`;
//  2. ${}中可以放任意的javascript表达式
//     - ${ }中可以是运算表达式
            var a = 1;
            var b = 2;
            var str4 = `the result is ${a+b}`;
            console.log(str4); // the result is 3
//    - ${ }中可以是对象的属性
            var obj = {"a":1, "b":2};
            var str5 = `the result is ${obj.a + obj.b}`;
            console.log(str5); // the result is 3.
//    - ${ }中可以是函数的调用
            function fn() {
                return 3;
            }
            var str6 = `the result is ${ fn() }`;
            console.log(str6); // the result is 3

// 新特性：标签模板
    var username = "张三";
    var height  = 1.8;
    var weight = 100;

    tagFn`他叫${username},身高${height}米，体重${weight}斤。`;
    // 标签 + 模板字符串
    // 定义一个函数，作为标签
    function tagFn(arr,v1,v2, v3) {
        console.log(arr);
        // [ '他叫', ',身高', '米，体重', '斤。' ]
        console.log(v1);
        // 张三
        console.log(v2);
        // 1.8
        console.log(v3)
        // 100
    }

// 新特性：repeat函数
// 将目标字符串重复N次，返回一个新的字符串，不影响目标字符串
    var m = "a";  // 目标字符串
    var n =  m.repeat(3);
    console.log(m); // 结果：a
    console.log(n); // 结果： aaa

// 新特性： includes函数
// 判断字符串中是否含有指定的子字符串，返回true表示含有和false表示未含有。第二个参数选填，表示开始搜索的位置。
    var name2 = "tina";    // 目标字符串
    console.log(name2.includes('a')); // true, 含有
    console.log(name2.includes('b')); // false, 不含有
    console.log(name2.includes('t', 1)); // false, 从第2个字符开始搜索, 不含有

// 新特性：startsWith函数
// 判断指定的子字符串是否出现在目标字符串的开头位置，第二个参数选填，表示开始搜索的位置。
    var name3 = "tina";  // 目标字符串
    console.log(name3.startsWith('t')); // true，出现在开头位置
    console.log(name3.startsWith('a')); // false，不是在开头位置
    console.log(name3.startsWith('i',1)); // true，从第2个字符开始

// 新特性： endsWith函数
// 判断子字符串是否出现在目标字符串的尾部位置，第二个参数选填，表示针对前N个字符。
    var name4 = "abcdefg";    //目标字符串
    console.log(name4.endsWith('a')); // false，不在尾部位置
    console.log(name4.endsWith('g')); // true，在尾部位置
    console.log(name4.endsWith('e',5)); // true，只针对前5个字符

// 新特性：String.raw函数
// 返回字符串最原始的样貌，即使字符串中含有转义符，它都视而不见，直接输出
    console.log(`hello\nworld`); // hello
                                // world
    console.log(String.raw`hello\nwolrd`); // hello\nworld

// 新特性：codePointAt函数
// JavaScript 内部，字符以 UTF-16 的格式储存，每个字符固定为2个字节。
// 对于那些需要4个字节储存的字符（Unicode 码点大于0xFFFF的字符），JavaScript 会认为它们是两个字符
    var s = "𠮷";
    var s1 = "我";
    console.log(s1.length); // 1
    console.log(s1.charAt(0)); // 我
    console.log(s.length); // 2
    console.log(s.charAt(0)); // ''
    console.log(s.charAt(1)); // ''
    console.log(s.charCodeAt(0)); // 55362
    console.log(s.charCodeAt(1)); // 57271
    console.log(s.codePointAt(0)); // 134071，码点的十进制数

// 新特性：String.fromCodePoint函数
// 函数的参数是一个字符对应的码点，返回的结果就是对应的字符，哪怕这个字符是一个4字节的字符，也能正确实现
    console.log(String.fromCodePoint(134071)) // 结果："𠮷"
    console.log(String.fromCodePoint(98)) // 结果："b"