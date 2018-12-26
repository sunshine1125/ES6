// Set结构

// Set是ES6给开发者带来的一种新的数据结构，你可以理解为值的集合。
// 我们平时见到的数组Array也是一种数据结构，但是Set跟其他数据结构不同的地方就在于：它的值不会有重复项。

// 基本用法
    var s = new Set();
    console.log(s); // Set {}

// Set本身是一个构造函数，你可以理解为一个类，使用的时候需要用new来创建一个实例
    var s1 = new Set([1, 2, 3]);
    console.log(s1); // Set {1, 2, 3}
// 用数组[1, 2, 3]作为参数传入，得到的变量s为Set {1, 2, 3}
// 除此之外，还可以这样定义
    var s2 = new Set();
    // 使用add方法添加成员
    s2.add(1);
    s2.add(2);
    s2.add(3);
    console.log(s2); // Set {1, 2, 3}

// 成员值唯一
// 不过，为Set 结构添加成员值的时候，要注意一点是，set结构的成员值是没有重复的，每个值都是唯一的
    var s3 = new Set();
    s3.add(1);
    s3.add(1);
    console.log(s3); // Set { 1 }

// 很明显，set结构会自动忽略相同的值，只会保留一个相同的值

// Set 结构除了提供add方法用于添加成员以外，还提供了:

// size属性
// 获取成员的个数
    console.log(s2.size); // 3

// delete()方法
// 用于删除Set结构中的指定值，删除成功返回：true，删除失败返回：false
    console.log(s2.delete(2)); // true
    console.log(s2.delete(4)); // false
    console.log(s2); // Set { 1, 3 }

// clear()方法
// 清除所有成员
    s3.clear();
    console.log(s3); // Set {}

// has()方法
// 判断set结构中是否含有指定的值，如果有，返回true，如果没有，返回false
    console.log(s2.has(1)); // true
    console.log(s2.has(4)); // false

// entries()方法
// 返回一个键值对的遍历器
    var s4 = new Set(['a', 'b', 'c']);
    console.log(s4.entries()); // SetIterator { [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }

// keys() 和 values() 方法
// keys()方法：返回键名的遍历器。
// values()方法：返回键值的遍历器。
    console.log(s4.keys()); // SetIterator { 'a', 'b', 'c' }
    console.log(s4.values()); // SetIterator { 'a', 'b', 'c' }

// for...of遍历
    for (let [i, v] of s4.entries()) {
        console.log(i + ' ' + v);
        // a a
        // b b
        // c c
    }

// forEach()方法遍历
// 遍历每一个成员
    s4.forEach(function (key, value) {
        console.log(value, key);
    });

// 用途之一：数组去重，Set结构不会含有重复成员，就会自动忽略相同的元素，只保留一个相同的值。
    let arr = [1, 2, 2, 3, 4, 5, 5];
    let s5 = new Set(arr);
    let newArr = Array.from(s5); // Array.from()可以将类似数组的对象或者可遍历的对象转换成真正的数组
    console.log(newArr); // [ 1, 2, 3, 4, 5 ]

// WeakSet结构
// WeakSet结构同样不会存储重复的值，不同的是，它的成员必须是对象类型的值。（严格来说是：具有 iterable 接口的对象）
// 数组的成员必须是对象类型的值，否则就会报错。
    //初始化一个WeakSet对象
    const a = [[1, 2], [3, 4]];
    const ws = new WeakSet(a);
    console.log(ws); // WeakSet {[1, 2], [3, 4]}

// WeakSet 结构有以下三个方法。
//
// WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员。
// WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员。
// WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。

// WeakSet 结构不可遍历.因为它的成员都是对象的弱引用，随时被回收机制回收，成员消失。
// 所以WeakSet 结构不会有keys( )，values( )，entries( )，forEach( )等方法和size属性