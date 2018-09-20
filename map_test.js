// map()其实就是映射，和Python的map()函数一样
// map()传入的参数就是pow函数
// python map(function, iterbale)
function pow(x) {
    return x * x;
}

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var results = array.map(pow);
console.log(results);

// 把array所有数字转换为字符串
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(array.map(String)); // [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ]


// reduce(x, y, z, ...)
// x +y ... (x + y) + z ...
var array = [1, 10, 2, 5, 6];

console.log(array.reduce(function (x, y) {
    return x + y;
})); // 24


// ex1
function product(arr) {
    return arr.reduce(function (x, y) {
        return x * y;
    })
}

if (product([1, 2, 3, 4, 5]) === 120) {
    console.log('测试通过!');
} else {
    console.log('测试失败!');
}

// 把[1, 3, 5, 7,  9]变换成整数13579
var array = [1, 3, 5, 7, 9];
console.log(array.reduce(function (x, y) {
    return x * 10 + y;
}));