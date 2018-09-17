// 函数的定义和调用
// function指出这是一个函数定义
// abs函数的名称；绝对值
// {...}之间的代码是函数体，可以包含若干语句
function abs(x) {
    if (x > 0) {
        return x;
    } else{
        return -x;
    }
}


// 函数也是对象，abs()函数也是函数对象，函数abs也以被当作指向该函数的变量
// function(x)函数是一个匿名函数，它赋值给了变量abs，所以通过abs可以调用该函数
var abs = function(x) {
    if (x > 0) {
        return x;
    } else{
        return -x
    }
};
console.log(abs(-100));
// js允许传入任意个参数而不影响调用
// 传入的参数比定义的参数多也没有问题，Python不行
console.log(abs(-111, 'treehl', 'sdadsadad', null));
// NaN: Not a Nunber
console.log(abs());


// 避免收到undefined，可以对参数进行检查
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x > 0) {
        return x;
    }else {
        return -x;
    }
}
console.log(abs());


// arguments
// 关键字arguments只在函数内部起作用，并且永远指向当前函数调用者的参数
function foo(x){
    console.log('x = ' + x);
    for (var i=0; i<arguments.length; i++){
        console.log('arg ' + i + ' = ' + arguments[i]);
    }
}

console.log(foo(10, 20, 30));


var array = ['apple', 'google', 'micrsoft'];
var i, x;
for (i=0; i<array.length; i++) {
    x = array[i];
    console.log(x);
}


// 函数不定义任何参数，也可以拿到参数的值
function abs(){
    if (arguments.length == 0){
        return 0
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

console.log(abs());
console.log(abs(-10));
console.log(abs(100));


// arguments用于判断传入参数的个数
function foo(a, b, c){
    if (arguments.length==2) {
        c = b;
        b = null;
    }
}


// rest参数
function foo(a, b){
    var i, rest = [];
    if (arguments.length > 2) {
        for (i=2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}


// 更好的方法
// 从索引位置2获取的参数就是rest
// rest参数只能写在最后面，前面用...标识
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

console.log(foo(1, 2, 3, 4, 5, 6));
console.log(foo(1));
console.log(foo(1, 2));

// js引擎在行末自动添加分号的机制
// 多行正确的写法
function foo(){
    return {
        name: 'treehl'
    };
}

console.log(foo());


// test
function area_of_circle(r, pi) {
    if (pi == null) {
        return r * r * 3.14;
    } else {
        return r * r * pi;
    }
}

console.log(area_of_circle(3, 3.1415));