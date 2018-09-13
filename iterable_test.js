// iterable: 可迭代对象
// for ... of ... 类似于Python的for ... in ...
var a = [1, 2, 3];
for (var x of a) {
    console.log(x);
}


// ex1
var a = ['a', 'b', 'c'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a){
    console.log(x);
}
for (var x of s){
    console.log(x);
}
for (var x of m){
    console.log(x);
}
console.log(m.get(1));

// for ... in ...
var a = ['a', 'b', 'c'];
a.name = 'treehl';
console.log(a);
for (var x in a){
    console.log(x);
}

for (var x of a) {
    console.log(x);
}


// forEach方法
var a = ['a', 'b', 'c'];
a.forEach(function(element, index, array){
   // element:指向当前元素的值
   // index:指向当前的索引
   // array: 指向Array对象本身
    console.log(element, ', index = ' + index);
});



// set没有索引，回调函数前两个参数都是元素本身
var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    console.log(set);
});


// map回调函数的参数 value, key, map
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map){
    console.log(map);
});


// 一般数组
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    console.log(element);
});