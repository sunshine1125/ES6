// ES6新特性：Proxy
// 也就是代理的意思

//Proxy的实现
    var person = {"name": "Tom"};
    // 创建一个代理对象pro，代理person的读写操作
    var pro = new Proxy(person, {
        get: function (target, property) {
            console.log('target: ', target); // target: {name: 'Tom'}
            console.log('property: ', property); // property: name
            return "大花"; // 代理的过程中，get方法实现了拦截的作用
        }
    });
    console.log(pro.name);// 大花
// 这就是代理Proxy的作用，将一个对象交给了Proxy代理，然后通过编写处理函数，来拦截目标对象的操作。


// set方法
// 用于拦截对对象的写操作
    var account = {'user': 1};
    var acc = new Proxy(account, {
        get: function (target, property) {
            if (target[property] === 1) {
                return target[property];
            } else {
                return '非法用户'
            }
        },
        set: function (target, property,value) {
            if (!Number.isInteger(value)) {
                return '请输入正确的用户'
            }

            target[property] = value;
        }
    });

    console.log(acc.user); // 1
    acc.user = 2;
    console.log(acc.user); // 非法用户
    acc.user = 'as';
    console.log(acc.user); // 非法用户

// Proxy除了支持以上拦截程序，还支持一系列的拦截函数
// ownKeys()方法
// ownKeys拦截操作，拦截过滤Object.ownKeys()对对象的属性遍历
    var girl = {'name': '花花', 'age': 18, 'height': 1.7};
    var proxy = new Proxy(girl, {
        // ownKeys过滤对象的属性遍历
        ownKeys: function (target) {
            return ['name', 'age']
        }
    });
    console.log(Object.keys(girl)); // ['name', 'age', 'height']
    console.log(Object.keys(proxy)); // ['name', 'age']

// has方法
// has( )拦截操作：拦截key in object的操作，结果会返回一个布尔值
    var girl2 = {'name': '花花', 'age': 18};
    var proxy2 = new Proxy(girl2, {
        has: function (target, prop) {
            console.log('target: ', target);
            console.log('prop: ', prop);
            if (target[prop] === undefined) {
                return false;
            } else {
                return true;
            }
        }
    });
    console.log('name' in proxy2); // true
    console.log('height' in proxy2); // false
// has( )方法用于判断是否含有指定的键值对，有，就返回true，否则就返回false

// apply()方法
// 除了对象类型的变量可以被代理，函数也可以被代理。如果被代理的变量是一个函数，那么还会支持一个拦截程序：apply调用
    var fn = function () {
        console.log('Hello World!')
    };
    var p = new Proxy(fn, {
        apply: function () {
            console.log('Happy day!')
        }
    });

    p(); // Happy day!

// Proxy.revocable()取消代理
// 如果创建了代理之后又想取消代理的话，我们可以用Proxy.revocable( )函数来实现，它会返回一个对象，
// 对象中含有一个proxy属性，它就是Proxy的代理实例对象；还有一个revoke属性，它是一个方法，用于取消代理
    // 定义一个对象
    var city = {'name': '郑州'};
    // 定义一个代理处理程序
    var handle = {
        get: function (target, prop) {
            return '北京';
        }
    };
    // 使用Proxy.revocable()进行代理
    var object = Proxy.revocable(city, handle);
    console.log(object.proxy.name); // 北京
    // 调用返回对象object的revoke方法，取消代理
    object.revoke();
    console.log(object.proxy.name); // 报错，代理已经被取消

// Proxy还包括其他的拦截操作
// defineProperty( )
// deleteProperty( )
// enumerate( )
// getOwnPropertyDescriptor( )
// getPrototypeOf( )
// isExtensible( )
// preventExtensions( )
// setPrototypeOf( )