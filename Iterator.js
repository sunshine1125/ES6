// Iterator 遍历器

// for...of为什么不能遍历Object对象
    //定义一个的Object对象
    let obj = {'name': '郑州'};

    // for(let v of obj){
    //     console.log(v); // 报错，obj is not iterable(可遍历，可迭代)
    // }

// 原来，要想被for...of正常遍历的，都需要实现一个遍历器Iterator。
// 而数组，Set和Map结构，早就内置好了遍历器Iterator（又叫迭代器），它们的原型中都有一个Symbol.iterator方法；
// 而Object对象并没有实现这个接口，所以使得它无法被for...of遍历
    // 数组
    console.log(Array.prototype[Symbol.iterator]); // [Function: values]
    // 字符串
    console.log(String.prototype[Symbol.iterator]); // [Function: [Symbol.iterator]]
    // Set结构
    console.log(Set.prototype[Symbol.iterator]); // [Function: values]
    // Map结构
    console.log(Map.prototype[Symbol.iterator]); // [Function: entries]
    // Object对象
    console.log(Object.prototype[Symbol.iterator]); // undefined

// 注意：Symbol.iterator 是Symbol 对象的 iterator 属性，是一个特殊的Symbol值，
// 因此，当它作为prototype对象属性名的时候，获取它的时候需要使用[ ]的形式: prototype[Symbol.iterator]，
// 不能使用点形式获取：prototype.Symbol.iterator。原因是点形式会把后面的值当作是字符串类型处理，而不是Symbol类型。
// 也就说，只要一个数据结构拥有一个叫[Symbol.iterator]()方法的数据结构，就可以被for...of遍历，我们称之为：可遍历对象。
// 比如：数组，字符串，Set和Map结构。


// Iterator遍历器的原理
// 当可遍历对象被for...of遍历的时候，[Symbol.iterator]()就会被调用，返回一个iterator对象。
// 其中还有一个很重要的方法：next( )；
    // 数组：一个可遍历对象
    let arr = ['a','b','c'];
    // 调用数组的Symbol.iterator()方法
    let iter = arr[Symbol.iterator]();
    console.log(iter.next()); // {value: "a", done: false}
    console.log(iter.next()); // {value: "b", done: false}
    console.log(iter.next()); // {value: "c", done: false}
    console.log(iter.next()); // 结果：{value: undefined, done: true}

// 原来，for..of的原理就是：
// 先调用可遍历对象的[Symbol.iterator]( )方法，得到一个iterator遍历器对象，
// 然后就在遍历器上不断调用next( )方法，直到done的值为true的时候，就表示遍历完成结束了。

// 自定义Iterator遍历器
// 如果我们给Object对象加一个[Symbol.iterator]( )方法，是否可以被for...of遍历
    let object = {
        0: 'cn',
        1: 'us',
        2: 'usa',
        length: 3,
        // 添加[Symbol.iterator]方法
        [Symbol.iterator]: function () {
            let _this = this;
            let index = 0;
            return {
                next:() => {
                    let value = _this[index];
                    let done = (index >= _this.length);
                    index++;
                    return {value,done}
                }
            }
        }
    };

    for(let v of object) {
        console.log(v); // cn us usa
    }

// 这就是说，我们可以创建一个可遍历的对象，并且自定义它的遍历行为。
// 或者说可以通过添加[Symbol.iterator]()方法，把一个不可遍历的Object对象，变成可遍历的对象。