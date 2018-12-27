// JavaScript - 类（Class）的概念

// javaScript的面向对象
// Javascript本身不是一种面向对象的编程语言，在ES5中，它的语法中也没有class（类的关键字），
// 但是，开发者可以利用对象的原型prototype属性来模拟面向对象进行编程开发

    // 构造函数模拟创建一个Person类
    function Person(name) {
        this.name = name;
    }

    // 把一些属性和方法，定义在prototype对象上
    Person.prototype = {
        "age" : 18,
        "say" : function () {
            console.log("名字叫" + this.name);
        }
    };

    // 实例化
    var per = new Person('chan');
    // 调用say方法
    per.say();
    // 名字叫chan

// 模拟面向对象编程有几个关键步骤：
// 1、构造函数；
// 2、给prototype对象添加属性和方法；
// 3、实例化；4、通过实例化后的对象调用类的方法或者属性。


// 现在，ES6给我们带来了好消息，它给JavaScript带来了类class的概念。
// 但实际上，JavaScript的类class本质上也是基于原型prototype的实现方式做了进一步的封装，让我们使用起来更简单明了。
// 也就是说它实际上也是函数function和原型prototype实现。

// 基本用法
    // 定义一个叫Animal的类
    class Animal {
        // 构造函数constructor
        constructor(color) {
            this.color = color;
        }
    }
// 我们通过关键字class来声明一个名字叫Animal的类，可以看到类里面（花括号 {}里面）有一个叫constructor方法，
// 它就是构造方法，构造方法里面的this，指向的是该类实例化后的对象，这就是实现了一个类的声明
// 其中，构造方法constructor是一个类必须要有的方法，默认返回实例对象；
// 创建类的实例对象的时候，会调用此方法来初始化实例对象。如果你没有编写constructor方法，执行的时候也会被加上一个默认的空的constructor方法

// 类的属性和方法
    class Animal2 {
        // 构造方法
        constructor(name) {
            //属性name
            this.name = name;
        }

        // 自定义方法getName
        getName() {
            return 'This is a ' + this.name;
        }
    }

// 我们把类名后面的括号{ }里面的内容称之为类体，我们会在类体内来编写类的属性和方法。
// 其中constructor方法是构造方法，在实例化一个类的时候被调用。
// constructor方法是必须的，也是唯一的，一个类体不能含有多个constructor构造方法。

// 类的实例对象
    // 创建一个Animal实例对象dog
    let dog = new Animal2('dog');
    console.log(dog.name); // dog
    console.log(dog.getName()); // This is a dog

// 实例对象的创建有几个要注意的事项：
// 必须使用new创建字来创建类的实例对象
// 先声明定义类，再创建实例，否则会报错

// 类的静态方法
// 上面讲到的自定义方法是实例方法，也就是实例化后的对象才可以调用的方法，比如上述案例的getName( )方法。
// 除了实例方法以外，我们还可以定义一种直接使用类名即可访问的方法，我们称之为“静态方法”。
    class Animal3 {
        // 构造方法
        constructor(name) {
            // 属性name
            this.name = name;
        }

        // 自定义一个静态方法
        static friends(a1,a2) {
            return `${a1.name} and ${a2.name} are friends`;
        }

        say() {
            return `This is a animal`;
        }
    }

    // 创建2个实例
    let dog2 = new Animal3('dog');
    let cat = new Animal3('cat');

    // 调用静态方法friends
    console.log(Animal3.friends(dog2, cat));
    // dog and cat are friends

// 静态方法和实例方法不同的是：静态方法的定义需要使用static关键字来标识，而实例方法不需要；
// 此外，静态方法通过类名来的调用，而实例方法通过实例对象来调用。

// 类的继承
    // 子类Dog
    class Dog extends Animal3 {
        // 构造方法
        constructor(name,color) {
            super(name);
            this.color = color;
        }
        // 子类的实例方法
        getAnimal() {
            return `${super.say()},
                    name: ${this.name}
                    color: ${this.color}`;
        }
    }

    // 创建Dog的实例对象
    let d = new Dog('dog', 'block');

    // 调用子类Dog的实例方法
    console.log(d.getAnimal());
    // This is a animal,
    // name: dog
    // color: block

// 使用super有几个要注意的事项：
// 子类必须在constructor方法中调用super方法
// 必须先调用super( )，才可以使用this，否则报错

// 总结：ES6给JavaScript带来了类class的概念和实现，实际上是对传统实现方式的一种包装，
// 通过关键字class来定义类，通过extends来实现继承，子类的super是父类的引用，在继承中起着十分重要的作用

