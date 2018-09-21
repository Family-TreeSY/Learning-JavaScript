// 排序
array = ['Google', 'Apple', 'Micrsoft'];
console.log(array.sort());

// 字符串根据ASCII码排序，小写字母排在大写字母之后
array1 = ['Google', 'apple', 'Micrsoft'];
console.log(array.sort());

array2 = ['10', '2', '1', '8', '5'];
console.log(array2.sort());


// sort()方法可以接受一个比较函数来实现自定义的排序
var array3 = [10, 2, 1, 8, 5];
array3.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
});
console.log(array3);


// 倒序排序
var array4 = [10, 20, 1, 2];
array4.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
});
console.log(array4);


// 忽略大小写，按字母排序
var array5 = ['Google', 'apple', 'Micrsoft'];
array5.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
});
console.log(array5);


var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
console.log(a1);
console.log(a2);
console.log(a1===a2);