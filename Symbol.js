// javaScript数据类型
//     undefined
//     null
//     Boolean
//     String
//     Number
//     Object
// 全新的数据类型：Symbol
// 表示独一无二的值
    let s1 = Symbol();
    let s2 = Symbol();

    console.log(typeof s1); // symbol
    console.log(s1); // Symbol()
    console.log(s2); // Symbol()
    console.log(s1 === s2); // false

// 注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。
// 也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型
// Symbol函数可以接受一个字符串作为参数，表示对 Symbol 实例的描述，主要是为了在控制台显示，或者转为字符串时，比较容易区分
    let s3 = Symbol('foo');
    let s4 = Symbol('bar');
    console.log(s3); // Symbol(foo)
    console.log(s4); // Symbol(bar)

    // 在对象中的应用
    let name = Symbol('name');
    let person = {
        [name]:"tom"
    };
    console.log(person[name]); // tom
    console.log(person.name); // undefined，当symbol值作为对象的属性名的时候，不能用点运算符获取对应的值

// 把一个symbol类型的值作为对象的属性名的时候，一定要用中括号[ ]，不能用点运算符，因为用点运算符的话，会导致javascript把后面的属性名为理解为一个字符串类型，而不是symbol类型

// 属性名的遍历
// 当symbol类型的值作为属性名的时候，该属性是不会出现在for...in和for...of中的，也不会被Object.keys( )获取到
    person.age = 12;
    console.log(Object.keys(person)); // ['age']
    for(let key in person) {
        console.log(key) // age
    }

// getOwnPropertySymbols()函数
// 它会找到symbol类型的属性并且返回一个数组，数组的成员就是symbol类型的属性值
    let sex = Symbol('sex');
    person[sex] = 'female';
    console.log(Object.getOwnPropertySymbols(person)); // [Symbol(name), Symbol(sex)]

// Reflect.ownKeys()函数
// 一次性获取对象中的所有类型的属性（字符串类型和Symbol类型）
    console.log(Reflect.ownKeys(person)); // ['age', Symbol(name), Symbol(sex)]


// Symbol.for()函数
// 根据参数名，去全局环境中搜索是否有以该参数为名的symbol值，有就返回它，没有就以该参数名来创建一个新的symbol值
    let n1 = Symbol.for('name');
    let n2 = Symbol.for('name');
    console.log(n1 === n2); // true
// Symbol.for()创建的Symbol值会被登记在全局环境中，供以后用Symbol.for()来搜索，而Symbol()创建的变量就没有这样的效果了
// 也就是说用Symbol()创建的symbol值，用Symbol.for()是搜索不到的
    console.log(name === n1); // false

// Symbol.keyFor()函数
// 返回一个以被登记在全局环境中的symbol值的key，没有就返回undefined。
// 注意这句话的一个关键词：“被登记在全局环境中”，也就是说这个symbol值是被Symbol.for( )创建的，不是被Symbol( )创建的
    let m1 = Symbol.for('like');
    let m2 = Symbol('school');
    console.log(Symbol.keyFor(m1)); // like
    console.log(Symbol.keyFor(m2)); // undefined