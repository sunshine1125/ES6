// 什么是解构赋值？
// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）

// 数组的解构赋值

// 传统变量赋值
    var arr = [1, 2, 3]; // 把数组的值分别赋给下面的变量；
    var a = arr[0];
    var b = arr[1];
    var c = arr[2];
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3

// 变量的解构赋值
    var [a1, b1, c1] = [1,2,3]; // 把数组的值分别赋给下面的变量；
    console.log(a1); // 1
    console.log(b1); // 2
    console.log(c1); // 3


// 数组的解构赋值有以下几种情况需要注意：
// 1. 解构赋值是可以嵌套的
    var [ a2, b2, [ c3, c4 ] ] = [ 1, 2, [ 3.1, 3.2 ] ];
    console.log(c3); // 3.1
    console.log(c4); // 3.2
// 2. 不完全解构：当左边的模式（你可以理解为格式）与右边不完全一样的时候，那么赋值过程中，只会给模式匹配成功的部分的变量赋值
    var [a4, b4, c4] = [1,2];
    console.log(a4); // 1
    console.log(b4); // 2
    console.log(c4); // undefined
// 3. 赋值不成功，变量的值为undefined
// 4. 允许设定默认值
    var [a5, b5, c5 = 3] = [1,2];
    console.log(a5); // 1
    console.log(b5); // 2
    console.log(c5); // 3

// 如果你想覆盖默认值3，只需赋一个有效的值即可
// 注意：当新的值为undefined的时候，是不会覆盖默认值的。
    var [a6, b6, c6 = 3] =[1, 2, 4];
    console.log(a6); // 1
    console.log(b6); // 2
    console.log(c6); // 4


// 对象的解构赋值：
// 与数组的解构赋值很类似，但不同的是，对象的解构赋值不会受到属性的排列次序影响（数组则会受影响），
// 它是跟属性名关联起来的，变量名要和属性名一致，才会成功赋值。
    var { a7, b7, c7 } = {"a7":1, "c7":3, "b7":2};
    console.log(a7); // 1
    console.log(b7); // 2
    console.log(c7); // 3

// 如果变量找不到与其名字相同的属性，就会赋值不成功
    var { a8 } = {"b8":2};
    console.log(a8); // undefined

    var { b9:a9} = {"b9":2};
    console.log(a9); // 2

// 对象的解构赋值的用法与数组的解构赋值也很类似：
// 1. 对象解构赋值也可以嵌套
    var {a10 : {b10}} = {"a10" : {"b10":1}};
    console.log(b10); // 1

// 2. 可以指定默认值, 默认值生效的条件是，对象的属性值严格等于undefined。
    var {a11, b11 = 2} = {"a11" : 1};
    console.log(b11); // 2


// 字符串的解构赋值：字符串被转换成了一个类似数组的对象
    var [a12, b12, c12, d12, e12, f12] = "123456";
    console.log(a12); // 1
    console.log(b12); // 2
    console.log(c12); // 3
    console.log(d12); // 4
    console.log(e12); // 5
    console.log(f12); // 6


// 解构赋值的用途：
//     1. 交换变量的值
            var x = 1;
            var y = 2;
            [x,y] = [y,x];
            console.log(x); // 2
            console.log(y); // 1
//     2. 提取函数返回的多个值
            function demo() {
                return {"name":"张三","age":21};
            }
            var {name,age} = demo();
            console.log(name); // 张三
            console.log(age);// 21
//     3. 定义函数参数
            function demo2({a, b, c}) {
                console.log("姓名：" + a);
                console.log("身高：" + b);
                console.log("体重：" + c);
            }
            demo2({a:"张三", b:"1.82m", c:"50kg", d:"8000"});
//    4. 函数参数的默认值
            function demo3({name = "ab"}){
                console.log("姓名：" + name);// 姓名：张三
            }
            demo3({});
//    5. 提取JSON数据
          let jsonData = {
              id    : 42,
              status: 'ok',
              data  : [111, 222]
          };
          let { id, status, data: number } = jsonData;
          console.log(id, status, number); // 42 'ok' [111, 222]
