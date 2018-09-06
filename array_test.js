// array
// var array = [1, 2, 3.14, 4, 'hello, js', null, false];
// console.log(array.length);
// console.log(array.length=10);
// console.log(array);
//-----------------------------------------------------//


// indexOf
var array = [10, '20', 'SpaceX', 30];
console.log(array.indexOf('20'));
console.log(array.indexOf('SpaceX'));


// slice
var array = [1, 2, 3, 4, 5, 6, 7, 8];
// 索引从第一个位置到第三个位置
console.log(array.slice(0, 3));
// 从第三个位置开始到结束
console.log(array.slice(3));

// slice不加任何参数就是从头到尾截取所有元素;
var acopy = array.slice();
console.log(acopy);
console.log(array == acopy);


// push和pop
var array = ['a', 'b'];

// push()在数组末尾添加若干元素
console.log(array.push('c', 'd'));
console.log(array);

//pop()在数组末尾删除一个元素
console.log(array.pop());
console.log(array);

console.log(array.pop());


// unshift和shift
//在数组的头部添加若干元素，使用unshift()方法
// shift()方法在头部删除元素
var array = [1, 2];
console.log(array.unshift(3, 4));
console.log(array);
console.log(array.shift());
console.log(array);

// sort()对数组进行排序
var array = ['d', 'b', 'a', 'c'];
console.log(array.sort());


// reverse
//将数组反转
var array = ['a', 'b', 'c'];
console.log(array.reverse());


// spilce
//从指定的索引位置删除若干个元素，也可以从索引位置添加若干个元素
var array = ['micrsoft', 'apple', 'yahoo', 'aol', 'excite', 'oracl'];
// 从第三个位置开始删除三个元素
console.log(array.splice(2, 3, 'google', 'facebook'));
console.log(array);
// 从第三个元素开始删除两个元素，并且不添加任何元素
console.log(array.splice(2, 2));
console.log(array);
// 从第三个位置开始删除0个元素，并且添加两个元素
console.log(array.splice(2, 0, 'google', 'facebook'));
console.log(array);


// concat
// 把当前的数组和另外一个数组连接起来并返回一个新的数组
var array = ['a', 'b', 'c', 'd'];
var added = array.concat(['1', '2', '3']);
console.log(added);
// concat()可以接受任意元素
var array = [1, 2, 3, 4, 5]
var conn = array.concat('sapcex', 'b', 11, [7, 8, 9]);
console.log(conn);


// join
var array = ['a', 'b', 'c', 1, 2, 3];
console.log(array.join('-'));

// test
var array = [[1, 2, 3], [400, 500, 600], '-'];
console.log(array);

// test1
var array = ['tree', 'lucia', 'biao', 'juan'];
console.log('欢迎！'+ array[0] + ', ' + array[1] + ', ' + array[2] + ' 和 ' + array[3] + '同学');

console.log(`欢迎 ${array[0]}, ${array[1]}, ${array[2]} 和 ${array[3]}同学`);