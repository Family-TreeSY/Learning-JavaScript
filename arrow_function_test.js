// arrow_function
// 它的定义就是一个箭头
// x => x + x
// 上面的箭头函数相当于
// function (x) {
//     return x * x;
// }

// x => {
//     if (x > 0) {
//         return x * x;
//     }
//     else {
//         return -x * x;
//     }
// }
//
// // 如果参数不是一个，就需要用括号()括起来
// (x, y) => x * x + y * y
//
// // 无参数
// () => 3.14
//
// // 可变参数
// (x, y, ...rest) => {
//     var i, sum = x + y;
//     for (i=0; i<rest.length; i++) {
//         sum = sum + rest[i];
//     }
//     return sum;
// }
//
// // 单表达式
// // 错误
// x => {foo: x}
//
// // 正确
// x =>({foo: x})


// this
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = function () {
            return new Date().getFullYear() - this.birth;
        };
        return fn();
    }
};
console.log(obj.getAge()); // NaN


// this总是指向词法作用域
var obj = {
    birth: 1990,
    getAge: function () {
        var b = this.birth;
        var fn = () => new Date().getFullYear() - this.birth;
        return fn();
    }
}

console.log(obj.getAge());

var object = {
    birth: 1990,
    getAge: function (year) {
        var b = this.birth;
        var fn = (y) => y - this.birth;
        return fn.call({birth: 2000}, year);
    }
};

console.log(object.getAge(2011));