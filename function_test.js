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