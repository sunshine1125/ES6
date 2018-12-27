// var和let的区别：
// 作用域：
//     var作用域是整个封闭函数；
//     let是块级作用域，只在let命令所在的代码块内有效
//     块级作用域：任何一对花括号（{ }）中的语句都属于一个块，在花括号里面用let定义的所有变量在花括号外都是不可见的，我们称之为块级作用域
//     ES6 明确规定，如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错。

    var arr = [];
    for (var i = 0; i < 10; i++) {
        arr[i] = function() {
            console.log(i);
        };
    }
    arr[5](); // 结果10

// var和let的区别：
// 变量提升：
//     var命令会发生“变量提升”现象，即变量可以在声明之前使用，值为undefined
//     let命令所声明的变量一定要在声明之后使用，否则报错

    (function () {
        console.log(a);
        var a = 2;
    })(); //结果：undefined

// 注意：
// 1. 同一个块级作用域内，不允许重复声明同一个变量，var: 覆盖，let: 报错
    var a = 1;
    // let a = 2;
    console.log(a); // 结果：报错：a已经被声明过了

// 2. 函数内不能用let重新声明函数的参数
    function say(word) {
        let word = 'hello Jack';  //报错：用let重新声明word参数
        console.log(word)
    }
    say('hello Lili');