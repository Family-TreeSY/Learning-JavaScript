// // filter()函数也接收一个函数作为参数、
// // 删掉偶数，只留奇数
// var array = [1, 2, 3, 4, 5, 6, 7, 8];
// var r = array.filter(function (x) {
//     return x % 2 !== 0;
// });
// console.log(r);
//
//
// // 删除空字符串
// var array = ['A', ' ', 'B', null, undefined, 'C', ' '];
// var r = array.filter(function (s) {
//     return s && s.trim();
// });
// console.log(r);


// 回调函数
// 接受三个参数,第一个表示数组的某个元素，第二个位置，第三个数组本身
var array = ['A', 'B', 'C'];
var r = array.filter(function (element, index, self) {
    console.log(element);
    console.log(index);
    console.log(self);
    return true;
});
console.log(r);


// 去除array的重复元素
var
    r,
    array = ['apple', 'orange', 'strawberry', 'banana', 'pear', 'apple', 'orange'];
r = array.filter(function (element, index, self) {
    return self.indexOf(element) === index;
});
console.log(r.toString());