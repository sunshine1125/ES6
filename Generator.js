// 一种特殊的函数：Generator函数又称生成器函数

// 声明Generator函数

    //声明一个Hello的Generator函数
    function* Hello(name) {
        yield `hello ${name}`;
        yield `how are you`;
        yield `bye`;
    }

// Generator函数和普通函数的区别
// 普通函数用function来声明，Generator函数用function*声明。
// Generator函数内部有新的关键字：yield，普通函数没有。

// 调用Generator函数
    let ite = Hello('大花');
    console.log(ite.next()); // { value: 'hello 大花', done: false }
    console.log(ite.next()); // { value: 'how are you', done: false }
    console.log(ite.next()); // { value: 'bye', done: false }
    console.log(ite.next()); // { value: undefined, done: true }

// 我们可以把Generator函数被调用后得到的生成器理解成一个遍历器iterator，用于遍历函数内部的状态

// Generator函数的行为
// Generator函数被调用后并不会一直执行到最后，它是先返回一个生成器对象，然后hold住不动，
// 等到生成器对象的next( )方法被调用后，函数才会继续执行，直到遇到关键字yield后，又会停止执行，
// 并返回一个Object对象，然后继续等待，直到next( )再一次被调用的时候，才会继续接着往下执行，直到done的值为true

// next()方法接收参数
// 它的参数会作为上一个yield的返回值
    //声明一个fn的Generator函数
    function* fn() {
        let res = yield `hello`;
        yield res;
    }
    let iterator = fn();
    console.log(iterator.next()); // {value: "hello", done: false}
    console.log(iterator.next('world')); // {value: "world", done: false}

// 关键字yield*
// 在一个Generator函数里面，如果我们想调用另一个Generator函数，就需要用到的关键字是：yield*
    //声明Generator函数：gen1
    function* gen1() {
        yield "gen1 start";
        yield "gen1 end";
    }
    //声明Generator函数：gen2
    function* gen2() {
        yield "gen2 start";
        yield "gen2 end";
    }
    //声明Generator函数：start
    function* start() {
        yield "start";
        yield* gen1();
        yield* gen2();
        yield "end";
    }
    //调用start函数
    var ite = start();
    //创建一个生成器
    console.log(ite.next()); // {value: "start", done: false}
    console.log(ite.next()); // {value: "gen1 start", done: false}
    console.log(ite.next()); // {value: "gen1 end", done: false}
    console.log(ite.next()); // {value: "gen2 start", done: false}
    console.log(ite.next()); // {value: "gen2 end", done: false}
    console.log(ite.next()); // {value: "end", done: false}

// 如果一个Generator函数A执行过程中，进入（调用）了另一个Generator函数B，
// 那么会一直等到Generator函数B全部执行完毕后，才会返回Generator函数A继续执行。

// Generator函数的用途
// Generator函数是ES6的一个很重要的新特性。
// 它可以控制函数的内部状态，依次遍历每个状态；可以根据需要，轻松地让函数暂停执行或者继续执行。
// 根据这个特点，我们可以利用Generator函数来实现异步操作的效果。
// 原理是：利用Generator函数暂停执行的作用，可以将异步操作的语句写到yield后面，通过执行next方法进行回调。

