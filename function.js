// 函数的扩展

// 参数的默认值
// 传统实现方式的缺陷，参数对应的布尔值不能为false
// function person(n,a){
//     var name = n || 'Tina';
//     var age  = a ||  24;
//     console.log(name); // 'tom'
//     console.log(age); // 24
// }
// person('tom', 0);

// es6
// function person(name = 'Tina', age = 24){
//     console.log(name); // 'tom'
//     console.log(age); // 0
// }
// person('tom', 0);

// 与解构赋值结合
    function person({name = 'Tina', age = 24}){
        console.log(name); // 'tom'
        console.log(age); // 0
    }
    person({name: 'tom', age: 0});

// 函数length属性
// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
// length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了
    console.log((function (a) {}).length) // 1
    console.log((function (a = 5) {}).length) // 0
    console.log((function (a, b, c = 5) {}).length) // 2
    console.log((function (a = 0, b, c) {}).length) // 0
    console.log((function (a, b = 1, c) {}).length) // 1

// rest参数
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
    function add(...values) {
        let sum = 0;

        for (var val of values) {
            sum += val;
        }
        console.log(sum)
        return sum;
    }

    add(2, 5, 3) // 10

// name属性
// 函数的name属性，返回该函数的函数名。
    function foo() {}
    console.log(foo.name) // 'foo'
    var f = function () {}
    console.log(f.name) // 'f'

// 箭头函数
    var f = v => v;

    // 等同于
    var f = function (v) {
        return v;
    };


    //定义一个对象
    var obj = {
        x:100,//属性x
        show(){
            //延迟500毫秒，输出x的值
            setTimeout(
                //不同处：箭头函数
                () => { console.log(this.x)},
                500
            );
        }
    };
    var x = 200;
    console.log(obj.show());//打印结果：100

// 注意点：
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
//
// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。