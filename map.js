// Map结构
// ES6 提供了Map结构给我们使用，它跟Object对象很像，但是不同的是，它的key键名的类型不再局限于字符串类型了，
// 它可以是各种类型的值；可以说，它比Object对象更加灵活了，当然，也更加复杂了。

// Map的基本用法
// Map结构提供了一个构造函数给我们，我们使用的时候需要用new来创建实例
    let m = new Map();
    console.log(m); // Map {}
// 如果想要在创建实例的同时，初始化它的内容，我们可以给它传参，形式跟Set结构类型，都是需要用数组作为参数
    let m1 = new Map([
        ['name', 'tom'],
        ['gender', 1]
    ]);
    console.log(m1); // Map { 'name' => 'tom', 'gender' => 1 }

// set()方法
// 给实例设置一对键值对，返回map实例
    // 添加一个string类型的键名
    m1.set('age', 18);
    // 添加一个数字类型的键名
    m1.set(1, 2);
    console.log(m1); // Map { 'name' => 'tom', 'gender' => 1, 'age' => 18, 1 => 2 }

// Map结构确实可以存储非字符串类型的键名
    let m2 = new Map();
    //数组类型的键名
    m2.set([1],2);
    //对象类型的键名
    m2.set({"name":"Hua"},2);
    //布尔类型的键名
    m2.set(true,2);
    //Symbol类型的键名
    m2.set(Symbol('name'),2);
    //null为键名
    m2.set(null,2);
    //undefined为键名
    m2.set(undefined,2);
    console.log(m2); // Map { [ 1 ] => 2, { name: 'Hua' } => 2, true => 2, Symbol(name) => 2, null => 2, undefined => 2 }
// 如果你设置一个已经存在的键名，那么后面的键值会覆盖前面的键值
    let m3 = new Map();
    m3.set('name', 'abc');
    console.log(m3); // Map { 'name' => 'abc' }
    m3.set('name', 'eee');
    console.log(m3); // Map { 'name' => 'eee' }

// get()方法
// 获取指定键名的键值，返回键值
    console.log(m3.get('name')); // eee
    console.log(m3.get('age')); // undefined

// delete()方法
// 删除指定的键值对，删除成功返回：true，否则返回：false。
    console.log(m3.delete('name')); // true
    console.log(m3.delete('112')); // false

// clear()方法
// 跟Set结构一样，Map结构也提供了clear( )方法，一次性删除所有键值对
    let m4 = new Map();
    m4.set('122', 'eded');
    m4.set('adde', 'frfr');
    m4.clear();
    console.log(m4); // Map {}

// has()方法
// 判断Map实例内是否含有指定的键值对，有就返回：true，否则返回：false。
    let m5 = new Map();
    m5.set('122', 'eded');
    m5.set('adde', 'frfr');
    console.log(m5.has('age')); // false
    console.log(m5.has('122')); // true

// 可遍历 --- for...in, for...of

// entries()方法：返回实例的键值对遍历器
// keys()方法：返回实例所有键名的遍历器。
// values() 方法：返回实例所有键值的遍历器

// size属性
// 获取实例的成员数
    console.log(m5.size); // 2

// WeakMap
// WeakMap结构和Map结构很类似，不同点在于WeakMap结构的键名只支持引用类型的数据。
// 哪些是引用类型的值呢？比如：数组，对象，函数
    let wm = new WeakMap();
    //数组类型的键名
    wm.set([1],2);
    //对象类型的键名
    wm.set({'name':'Tom'},2);
    //函数类型的键名
    function fn(){};
    wm.set(fn,2);
    console.log(wm);
    // WeakMap {
    // [1] => 2,
    //     Object {name: "Tom"} => 2,
    //     function => 2
    // }

// WeakMap和Map的区别
// 如果是普通的值类型则不允许。比如：字符串，数字，null，undefined，布尔类型。而Map结构是允许的，这就是两者的不同之处
// 跟Map一样，WeakMap也拥有get、has、delete方法，用法和用途都一样。
// 不同地方在于，WeakMap不支持clear方法，不支持遍历，
// 也就没有了keys、values、entries、forEach这4个方法，也没有属性size
// 理由跟WeakSet结构一样：键名中的引用类型是弱引用，你永远不知道这个引用对象什么时候会被垃圾回收机制回收了，
// 如果这个引用类型的值被垃圾机制回收了，WeakMap实例中的对应键值对也会消失