// 数组的扩展

// Array.of()函数
// 将一组值，转换成数组，这个方法的主要目的，是弥补数组构造函数Array()的不足。因为参数个数的不同，会导致Array()的行为有差异
//     console.log(Array(3)) // 结果：[, , ,]
//     console.log(Array()) // 结果：[]
//     console.log(Array(3, 11, 8)) // 结果：[3, 11, 8]
//     console.log(Array.of(1, 2, 3, 4, 5, 6)); // 结果：[1, 2, 3, 4, 5, 6]

// Array.from( )函数
// 可以将类似数组的对象或者可遍历的对象转换成真正的数组
//     let arrayLike = {
//         '0': 'a',
//         '1': 'b',
//         '2': 'c',
//         length: 3
//     };

    // ES5的写法
    // var arr1 = [].slice.call(arrayLike);
    // console.log(arr1); // ['a', 'b', 'c']

    // ES6的写法
    // let arr2 = Array.from(arrayLike);
    // console.log(arr2); // ['a', 'b', 'c']

// Array.from函数其中一个用处就是将字符串转换成数组
//     let str = 'hello';
//     console.log(Array.from(str)); // 结果：["h", "e", "l", "l", "o"]

// find( )函数
// 找出数组中符合条件的第一个元素
//     let arr = [1,2,3,4,5,6];
//     arr.find(function(value){
//         return value > 2;
//     }); // 结果：3

// copyWithin()函数
// 数组实例的copyWithin方法，在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组。
// 也就是说，使用这个方法，会修改当前数组。
// Array.prototype.copyWithin(target, start = 0, end = this.length)
//     console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4)); // [4, 2, 3, 4, 5]

// findIndex( )函数
// 返回符合条件的第一个数组成员的位置
//     let arr = [7,8,9,10];
//     arr.findIndex(function(value){
//         return value > 8;
//     }); // 结果：2

// fill( )函数
// 用指定的值，填充到数组
//     let arr = [1,2,3];
//     console.log(arr.fill(4)); // 结果：[4,4,4]
// 如果我们想部分填充的话，fill()函数提供了一些参数，用于指定填充的起始位置和结束位置
//     let arr = [1,2,3];
//     console.log(arr.fill(4,1,3)); // 结果：[1,4,4], 从位置1的元素开始填充数字4，截止到位置3之前

// entries()函数
// 对数组的键值对进行遍历，返回一个遍历器，可以用for..of对其进行遍历。
//     console.log(['a', 'b'].entries());
    for(let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem);
    }
    //0 "a"
    //1 "b"

// keys()函数
// 对数组的索引键进行遍历，返回一个遍历器
    for(let index of ['a', 'b'].keys()) {
        console.log(index);
    }
    //0
    //1

// values()函数
// 对数组的元素进行遍历，返回一个遍历器
    for(let elem of ['a', 'b'].values()) {
        console.log(elem);
    }
    //a
    //b
