/**
 * 什么是解构赋值？
 *  ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）
 * */

// 数组的解构赋值

// 传统变量赋值
// var arr = [1,2,3];//把数组的值分别赋给下面的变量；
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];
//
// console.log(a);//a的值为1
// console.log(b);//b的值为2
// console.log(c);//c的值为3

// 变量的解构赋值
// var [a,b,c] = [1,2,3]; //把数组的值分别赋给下面的变量；
// console.log(a);//a的值为1
// console.log(b);//b的值为2
// console.log(c);//c的值为3

/*
  数组的解构赋值有以下几种情况需要注意：
    1. 解构赋值是可以嵌套的
        var [ a,b,[ c1,c2 ] ] = [ 1,2,[ 3.1,3.2 ] ];
        console.log(c1);//结果：c1的值为3.1
        console.log(c2);//结果：c2的值为3.2
    2. 不完全解构：当左边的模式（你可以理解为格式）与右边不完全一样的时候，那么赋值过程中，只会给模式匹配成功的部分的变量赋值
        var [a,b,c] = [1,2];
        console.log(a);//结果：a的值为1
        console.log(b);//结果：b的值为2
        console.log(c);//结果：c的值为undefined
    3. 赋值不成功，变量的值为undefined
    4. 允许设定默认值
        var [a,b,c=3] = [1,2];
        console.log(a);//结果:a的值为1
        console.log(b);//结果:b的值为2
        console.log(c);//结果:c的值为3

        如果你想覆盖默认值3，只需赋一个有效的值即可
        注意：当新的值为undefined的时候，是不会覆盖默认值的。
        var [a,b,c=3] =[1,2,4];
        console.log(a);//结果:a的值为1
        console.log(b);//结果:b的值为2
        console.log(c);//结果:c的值为4
*/


/*
对象的解构赋值：
    与数组的解构赋值很类似，但不同的是，对象的解构赋值不会受到属性的排列次序影响（数组则会受影响），它是跟属性名关联起来的，变量名要和属性名一致，才会成功赋值。
    var { a,b,c } = {"a":1,"c":3,"b":2};
    console.log(a);//结果：a的值为1
    console.log(b);//结果：b的值为2
    console.log(c);//结果：c的值为3

    如果变量找不到与其名字相同的属性，就会赋值不成功
    var { a } = {"b":2};
    console.log(a);//结果：a的值为undefined

    var { b:a,} = {"b":2};
    console.log(a);//结果：a的值为2

对象的解构赋值的用法与数组的解构赋值也很类似：
    1. 对象解构赋值也可以嵌套
    var {a:{b}} = {"a":{"b":1}};
    console.log(b);//结果：b的值为1

    2. 可以指定默认值, 默认值生效的条件是，对象的属性值严格等于undefined。
    var {a,b=2} = {"a":1};
    console.log(b);//结果：b的值为默认值2
*/

/*
// 字符串的解构赋值：字符串被转换成了一个类似数组的对象
    var [a,b,c,d,e,f] = "123456";
    console.log(a);//1
    console.log(b);//2
    console.log(c);//3
    console.log(d);//4
    console.log(e);//5
    console.log(f);//6
*/



// 解构赋值的用途：
//     1. 交换变量的值
//         var x = 1;
//         var y = 2;
//         [x,y] = [y,x];
//         console.log(x) // 2
//         console.log(y) // 1
//     2. 提取函数返回的多个值
//         function demo(){
//             return {"name":"张三","age":21}
//         }
//         var {name,age} = demo();
//         console.log(name);//结果：张三
//         console.log(age);//结果：21
//     3. 定义函数参数
//         function demo({a,b,c}) {
//             console.log("姓名："+ a);
//             console.log("身高："+ b);
//             console.log("体重："+ c);
//         }
//         demo({a:"张三",b:"1.82m",c:"50kg",d:"8000"});
//    4. 函数参数的默认值
//         function demo({name="ab"}){
//             console.log("姓名："+name);//结果：姓名：张三
//         }
//         demo({});
//    5. 提取JSON数据
//       let jsonData = {
//           id: 42,
//           status: 'ok',
//           data: [111, 222]
//       };
//       let { id, status, data: number } = jsonData;
//       console.log(id, status, number)
