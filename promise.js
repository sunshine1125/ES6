// promise对象，ES6新增的一个全新特性
// Promise对象能使我们更合理、更规范地进行处理异步操作。

// Promise的基本用法
    let pro = new Promise(function (resolve, reject) {

    });
    console.log(pro); // Promise { <pending> }

// Promise对象是全局对象，也可以理解为一个类，创建Promise实例的时候，要有new关键字。
// 参数是一个匿名函数，其中有两个参数：resolve和reject，两个函数均为方法。
// resolve方法用于处理异步操作成功后业务；reject方法用于操作异步操作失败后的业务。

// Promise对象有三种状态：
// pending：刚刚创建一个Promise实例的时候，表示初始状态；
// fulfilled：resolve方法调用的时候，表示操作成功；
// rejected：reject方法调用的时候，表示操作失败；
// 状态只能从 初始化 -> 成功  或者  初始化 -> 失败，不能逆向转换，也不能在成功fulfilled 和失败rejected之间转换
    let pro2 = new Promise(function(resolve,reject){
        // 实例化后状态：pending
        if('操作成功') {
            resolve(); // resolve方法调用，状态为：fulfilled
        } else {
            reject(); // reject方法调用，状态为：rejected
        }
    });

// then()方法
// 用于绑定处理操作后的处理程序
    pro2.then(function (res) {
        // 操作成功的处理程序
    }, function (error) {
       // 操作失败的处理程序
    });

// catch()方法
// 对于操作异常的程序， Promise专门提供了一个实例方法来处理：catch()方法
    pro2.catch(function (error) {
        // 操作
    })
// catch只接受一个参数，用于处理操作异常后的业务
// 综上，用then处理操作成功，catch处理操作失败
// then方法和catch方法调用后，都会返回promise对象。
    pro2.then(function (res) {
        //操作成功的处理程序
    }).catch(function (error) {
        //操作失败的处理程序
    });

// 链式调用
    let pro3 = new Promise(function(resolve,reject) {

        if(true){
            // 调用操作成功方法
            resolve('操作成功');
        }else{
            // 调用操作异常方法
            reject('操作异常');
        }
    });

    // 用then处理操作成功，catch处理操作异常
    pro3.then(requestA)
        .then(requestB)
        .then(requestC)
        .catch(requestError);

    function requestA(){
        console.log('请求A成功');
        return '请求B，下一个就是你了';
    }
    function requestB(res) {
        console.log('上一步的结果：'+ res);
        console.log('请求B成功');
        return '请求C，下一个就是你了';
    }
    function requestC(res) {
        console.log('上一步的结果：'+ res);
        console.log('请求C成功');
    }
    function requestError() {
        console.log('请求失败');
    }

    // 请求A成功
    // 上一步的结果：请求B，下一个就是你了
    // 请求B成功
    // 上一步的结果：请求C，下一个就是你了
    // 请求C成功

// Promise.all()方法
// 接受一个数组作为参数，数组的元素是Promise实例对象，当参数中的实例对象的状态都为fulfilled时，Promise.all( )才会有返回
    // 创建实例pro4
    let pro4 = new Promise(function(resolve) {
        setTimeout(function () {
            resolve('实例1操作成功');
        },5000);
    });

    // 创建实例pro5
    let pro5 = new Promise(function(resolve) {
        setTimeout(function () {
            resolve('实例2操作成功');
        },1000);
    });


    Promise.all([pro4, pro5]).then(function(result) {
        console.log(result); // [ '实例1操作成功', '实例2操作成功' ]
    });

// 使用场景，我们执行某个操作，这个操作需要得到需要多个接口请求回来的数据来支持，但是这些接口请求之前互不依赖，
// 不需要层层嵌套。这种情况下就适合使用Promise.all( )方法，因为它会得到所有接口都请求成功了，才会进行操作。

// Promise.rece()方法
// 它的参数要求跟Promise.all( )方法一样，不同的是，它参数中的promise实例，只要有一个状态发生变化（不管是成功fulfilled还是异常rejected），
// 它就会有返回，其他实例中再发生变化，它也不管了
    // 初始化实例pro6
    let pro6 = new Promise(function(resolve) {
        setTimeout(function () {
            resolve('实例1操作成功');
        },4000);
    });

    // 初始化实例pro7
    let pro7 = new Promise(function(resolve,reject) {
        setTimeout(function () {
            reject('实例2操作失败');
        },2000);
    });

    Promise.race([pro6, pro7]).then(function(result) {
        console.log(result);
    }).catch(function(error) {
        console.log(error);
    });
    // 实例2操作失败