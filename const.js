// const是constant（常量）的缩写，const和 let一样，也是用来声明变量的，
// 但是const是专门用于声明一个常量的，顾名思义，常量的值是不可改变的

    const PI = 3.1415926;

// 常量的特点：

// 1. 不可修改
    const name = "Tina";
    // name = "23";
    console.log(name); // 结果：报错：给常量赋值

// 2. 只在块级作用域内起作用
    if (1) {
        const a = 123;
    }
    console.log(a); // 报错：a未定义

// 3. 不存在变量提升，必须先声明后使用
    if (1) {
        console.log(name1)
        const name1 = "tina";
    } // 报错：name1没有定义

// 4. 不可重复声明同一个变量
    var name = "tina";
    const name = "tom" // 报错：name已经被声明过了

// 5. 声明后必须要赋值
    const name; // 报错：const声明中缺少初始化

// 如果常量是一个对象

// 传值赋值
    const Person = {"name":"张三"};
    Person.name = "李四";
    Person.age = 20;
    console.log(Person);
    // 结果：正常输出{name: "李四", age: 20}

// 传址赋值
// 传址：在赋值过程中，变量实际上存储的是数据的地址（对数据的引用），而不是原始数据或者数据的拷贝。
    const Person = {"name":"张三"};
    Person.age = 20;
    Person = {};
    // 错误，企图给常量Person赋新值（新地址）



