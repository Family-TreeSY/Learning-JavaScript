'use strict';
// var定义的变量是有作用域的，函数内定义的变量，函数外不可引用
// js函数可以嵌套，内部函数可以访问外部函数的变量，外部函数不可以访问内部函数的变量
function foo() {
    var x = 1;
    function bar() {
        var y = x + 1; // 内部函数bar可以调用外部函数的变量x
    }
    var z = y + 1; // 外部函数foo不能调用内部函数bar的y变量
}


// 变量提升
// js引擎自动提升了变量y的声明，但不会提升变量y的赋值
function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Treehl';
}
console.log(foo());

// js引擎看到的代码相当于
function foo() {
    var y; //此时y是undefined
    var x = 'Hello + ' + y;
    console.log(x)
    y = 'Treehl';
}


// 函数内部申明所有变量
function foo() {
    var
        x = 1, // x初始化为1
        y = x + 1,// y初始化为2
        z, i; //z, i 为undefined
    for (i=0; i<100; i++) {

    }
}


// 全局作用域
// 不在任何函数定义的变量就具有全局作用域
// js有默认的全局对象window,变量实际绑定在window的一个属性
var course = 'Learning Javascript';
console.log(course);
// console.log(window.course);

// 顶层函数也是一个全局变量

function foo() {
    console.log('foo');
}

console.log(foo());


// 名字空间
// 不同的js文件如果使用了相同的全局变量或定义了相同的顶层函数，可能会造成命名冲突
// 减少冲突的办法就是把自己的所有变量和函数全部绑定到一个全局变量中
// 代码全部放入唯一的名字空间MYAPP重能够大大减少全局变量的冲突
var MYAPP = {};
MYAPP.name = 'myapp';
MYAPP.version = 1.0;
MYAPP.foo = function () {
    return 'foo';
};


// 局部作用域
// for 循环无法定义局部作用域的变量
function foo() {
    for (var i=0; i<100; i++) {

    }
    i = i + 100; // 还是可以使用变量i
}
console.log(foo(1, 2, 3, 4, 5, 6));

// 关键字let，用let代替var可以申明一个块级作用域的变量
function foo() {
    var sum = 0;
    for (let i=0; i< 100; i++) {
        sum = sum + 1;
    }
}


// 常量
// 1、全大写来表示常量
// 2、关键字const来表示常量
var PI = 2.14;
// const PI = 3.14;


// 解构赋值
// 传统写法，通过数组的索引位置来获取
var array = ['hello', 'javascript', 'es5'];
var x = array[0];
var y = array[1];
var z = array[2];

// 解构赋值，对多个变量同时赋值
// 多个变量要使用[...]括起来
var [x, y, z] = ['python', 'javascript', 'es6'];
console.log('x = ' + x, 'y = ' + y, 'z = ' + z);

// 数组嵌套
let [a, [s, d]] = ['python', ['javascript', 'es6']];
console.log(a, s, d);

// 忽略掉某些元素
let [, , f] = ['python', 'javascript', 'es6'];
console.log(z);


// 从一个对象中取出若干属性，快速获取对象的指定属性
var person = {
    name: 'treehl',
    age: 20,
    gender: 'male',
    passport: '1223',
    school: 'MIT',
};
var {name, age, school} = person;

console.log('name = ' + name, 'age = ' + age, 'school = ' + school);


// 对嵌套的对象解构赋值
 var person = {
     name: 'treehl',
     age: 20,
     address: {
         city: 'Shanghai',
         street: 'NanjingRoad',
         zipcode: 100000,
     }
 };
 var {name, age, address: {city, streer, zipcode}} = person;
 console.log(name, age, zipcode);


 // 使用的变量名和属性名不一致
var person = {
    name: 'treehl',
    age: 20,
    passport: '200000',
    school: 'Mit',
};
var {name, age, passport:id} = person;

console.log(name, age, id);


// 解构赋值还可以使用默认值，这样避免了不存在的属性返回undefined的问题
var person = {
    name: 'treehl',
    age: 20,
    gender: 'male',
    passport: '200000',
};
var {name, age, single=false} = person;
console.log(name, age, single);
var x, y;
({x, y} = {name: 'shen', x:100, y:200});
console.log(name, x, y);


// 使用场景
function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + '' + hour + ';' + minute + ':' + second);
}

console.log(buildDate({year: 2018, month: 1, day: 1}));
console.log(buildDate({year: 2018, month: 9, day:18, hour: 17, minute: 23}));
console.log(buildDate({ year: 2017, month: 1, day: 1, hour: 20, minute: 15 }));
