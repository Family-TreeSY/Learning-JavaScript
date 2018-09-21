// 闭包
// 和Python的闭包其实是一样的
function sum(array) {
    return array.reduce(function (x, y) {
        return x + y;
    });
}
console.log(sum([10, 1, 3, 54, 6]));


// 不立刻求和，不返回求和的结果而是返回求和函数
// 闭包三点：1、外部函数有一个内部函数 2、内部函数可以调用外部函数的参数 3、外部函数返回值是内部函数
function lazzy_sum(array) {
    function sum() {
        return array.reduce(function (x, y) {
            return x + y;
        })
    }
    return sum;
}
var f1 = lazzy_sum([10, 9, 8, 11]); //调用lazzy_sum时，每次调用都会返回一个新的函数，即使传入同样的参数
var f2 = lazzy_sum([10, 9, 8, 11]);
console.log(f1());
console.log(f2());
// f1和f2调用结果互不影响
console.log(f1 === f2);


// 返回函数不要引用任何循环变量，等三个函数返回时，循环变量已经变成4了，所以f1\f2\f3结果都为16
function count() {
    var arr = [];
    for (var i=0; i <=3; i++) {
        arr.push(function () {
            return i * i;
        })
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());


//匿名函数
/*(function (x) {
    return x * x;
})(3);*/

function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}
var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1());
console.log(f2());
console.log(f3());


// 多参数变成单参数
function make_pow(n) {
    return function (x) {
        return Math.pow(x, n);
    }
}

var pow2 = make_pow(2);
var pow3 = make_pow(3);
console.log(pow2(1));
console.log(pow3(10));