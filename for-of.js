// for....of
// for...of 一种用于遍历数据结构的方法。它可遍历的对象包括数组，对象，字符串，set和map结构等具有iterator 接口的数据结构

// 几种传统的遍历数组的方式以及缺陷
// 方式一：for循环，缺点：代码不够简洁
    var arr = [1, 2, 3, 4, 5];
    for (let i = 0; i< arr.length; i++) {
        console.log(i); // 0 1 2 3 4
    }
// 方式二：forEach循环，缺点：无法中断停止整个循环
    arr.forEach(function (value, index) {
        console.log(`${value}, ${index}`);
        // 1, 0
        // 2, 1
        // 3, 2
        // 4, 3
        // 5, 4
    });

// 方式三：for...in, 常用于对象的循环，如果用于数组的循环，每次循环得到的i是字符串类型的，而不是预料中的数字类型，还得进行数据转换
    for (let i in arr) {
        console.log(typeof i) // string
    }

// for...of
    for (let i of arr) {
        console.log(i); // 1 2 3 4 5
        console.log(typeof i) // number
    }

// for...of的优势
// 写法比for循环简洁很多；
// 可以用break来终止整个循环，或者continute来跳出当前循环，继续后面的循环；
// 结合keys( )获取到循环的索引，并且是数字类型，而不是字符串类型。

// 循环可以终止
      for(let i of arr) {
            if (i === 3) {
                // 终止整个循环
                break;
            }
            console.log(i); // 1 2
      }

// 可跳过当前循环
    for(let i of arr) {
        if (i === 3) {
            // 终止整个循环
            continue;
        }
        console.log(i); // 1 2 4 5
    }

// 得到数字类型的索引
    for(let i of arr.keys()) {
        console.log(i); // 0 1 2 3 4
    }

// 遍历字符串
    var str = 'abcdefg';
    for(let s of str) {
        console.log(s); // a b c d e f g
    }

// 遍历DOM List