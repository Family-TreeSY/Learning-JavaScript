// 函数可以接收另一个函数作为参数，这就是高阶函数
function add(x, y, f) {
    return f(x) + f(y);
}

// x,y为普通参数，f为函数
var x = add(-5, 6, Math.abs);
console.log(x);


// 换成Python的写法
// def add(x, y, f):
//     return f(x) + f(y)
//
// result = add(-10, 2, abs)
// print(result)

