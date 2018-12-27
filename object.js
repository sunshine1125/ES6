// 对象的扩展

// 属性的简洁表示法
// ES6 允许直接写入变量和函数，作为对象的属性和方法。这样的书写更加简洁。
    let name = "tom";
    let age = 12;

    // 传统的属性写法
    let person = {
        "name": name,
        "age" : age
    };
    console.log(person); // 结果：{name: "tom", age: 12}

    // ES6的属性写法
    let person2 = {name, age};
    console.log(person2); // 结果：{name: "tom", age: 12}

// 上面代码表明，ES6 允许在对象之中，直接写变量。这时，属性名为变量名, 属性值为变量的值。

// 对象的属性可以简写，对象的方法也可以简写
    const o = {
        method() {
            return "Hello!";
        }
    };

    // 等同于

    const o2 = {
        method: function() {
            return "Hello!";
        }
    };

// CommonJS 模块输出一组变量，就非常合适使用简洁写法。
    let ms = {};

    function getItem (key) {
        return key in ms ? ms[key] : null;
    }

    function setItem (key, value) {
        ms[key] = value;
    }

    function clear () {
        ms = {};
    }

    module.exports = { getItem, setItem, clear };

// 属性名可以是表达式
// 用字面量定义一个对象的时候，可以用表达式作为对象的属性名或者方法名
    var f = "first";
    var n = "Name";
    var s = "say";
    var h = "Hello";

    var person1 = {
        [ f+n ] : "Liu",
        [ s+h ]() {
            return "你好吗？";
        }
    };
    console.log(person1.firstName); // 结果：Liu
    console.log(person1.sayHello()); // 结果：你好吗？

// es6对象新增的函数
// Object.is( )函数
// 比较两个值是否严格相等，或者说全等
    var str = '12';
    var num = 12;
    var num2 = 12;
    console.log(Object.is(str,num)); // 结果：false
    console.log(Object.is(num2,num)); // 结果：true

// Object.assign()函数
// 将源对象的属性赋值到目标对象上
    // 这个充当目标对象
    let target = {"a":1};
    // 这个充当源对象
    let origin = {"b":2,"c":3};
    Object.assign(target,origin);
    // 打印target对象出来看一下
    console.log(target);
    // 结果 {a: 1, b: 2, c: 3}

// Object.getPrototypeOf( )函数
// 获取一个对象的prototype属性。这里的对象我们用一个自定义类实例出来的对象来演示
// 自定义一个Person类（函数）
    function Person(){

    }
    // 函数都有一个预属性prototype对象
    Person.prototype = {
        //给prototype对象添加一个say方法
        say() {
            console.log('hello');
        }
    };
    // 实例化Person对象，赋值给变量lisi
    let lisi = new Person();
    // 调用类的say方法
    lisi.say();
    // 结果：打印出hello

    // 获取lisi对象的prototype属性
    console.log(Object.getPrototypeOf(lisi));
    // 结果：打印{say:[Function: say]}

// Object.setPrototypeOf()函数
//使用Object.setPrototypeOf
    Object.setPrototypeOf(lisi, {
        say() {
            console.log('hi')
        }
    });
    lisi.say(); // 结果：hi

// super关键字
// 我们知道，this关键字总是指向函数所在的当前对象，ES6 又新增了另一个类似的关键字super，指向当前对象的原型对象
    const proto = {
        foo: 'hello'
    };

    const obj = {
        foo: 'world',
        find() {
            return super.foo;
        }
    };

    Object.setPrototypeOf(obj, proto);
    console.log(obj.find()); // "hello"

// Object.keys()函数，Object.values()函数，Object.entries()函数
// Object.values方法返回一个数组
// Object.entries()方法返回一个数组

    let {keys, values, entries} = Object;
    let object = { a: 1, b: 2, c: 3 };

    for (let key of keys(object)) {
        console.log(key); // 'a', 'b', 'c'
    }

    for (let value of values(object)) {
        console.log(value); // 1, 2, 3
    }

    for (let [key, value] of entries(object)) {
        console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
    }