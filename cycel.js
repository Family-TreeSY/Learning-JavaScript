// i =1是初始条件
// i<=10000是判断条件，满足就循环下去，不满足就退出
// i++ 是每次循环后的递增条件
var x = 0;
var i;
for (i=1; i <= 10000; i++) {
    x = x + i;
}
console.log(x);


// 计算1 * 2 *3 * ...... * 10
var x = 1;
var i;
for(i=1; i <= 10; i++) {
    x = x * i;
}
console.log(x);


// 遍历数组
var array = ['apple', 'google', 'micrsoft'];
var i, x;
for(i=0; i<array.length; i++){
    x = array[i];
    console.log(x);
}

// break退出循环
var x = 0;
for(;;){
    if(x > 100){
        break;
    }
    x ++;
    console.log(x);
}


// for...in....
var o = {
    name: 'treehl',
    age: 20,
    city: 'Shanghai',
};
for (var key in o){
    console.log(key);
}

// 过滤掉对象继承的属性，用hasOwnPreperty()
var own ={
    name: 'treehl',
    age: 20,
    city: 'Shanghai',
};
for (var key in own){
    if (own.hasOwnProperty(key)){
        console.log(key);
    }
}


// array也是对象，每个元素的索引被视为对象的属性
var a = ['A', 'B', 'C', 'D'];
for (var i in a){
    console.log(i);
    console.log(a[i]);
}


// while
// 再循环内部，n不断自减，知道变为-1时，不再满足while的循环条件时就退出
var x = 0;
var n = 99;
while (n > 0){
    x = x + n;
    n = n - 2;
}
console.log(x);


// do...while
// 循环完成的时候判断条件
// n不断循环，直到n>100时，循环结束
var n = 0;
do {
    n = n + 1;
}while(n < 100);
console.log(n)


// 循环遍历数组中的名字
var array = ['treehl', 'yang', 'shen'];
for (var i in array){
    console.log(`Hello, ${array[i]}!`);
}

var i = 0;
while(i < array.length){
    console.log(`hello, ${array[i]}!`);
    i++;
}
