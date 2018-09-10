// map时一组键值对的结构{key: value}，类似于Python的dict
var name = new Map([['treehl', 100], ['yang', 90], ['ling', 80]]);
console.log(name.get('treehl'));  // get(key)

// 初始化一个二维数组
// > var m = new Map();
// undefined
// > m.set('treehl', 100);
// Map { 'treehl' => 100 }
// > m.has('any');
// false
// > m.has('treehl');
// true
// > m.get('treehl');
// 100
// > m.delete('treehl');
// true
// > m.get('treehl');
// undefined
var m = new Map();
m.set('treehl', 100);
m.set('hao', 99);
m.has('any');
console.log(m);

// 一个key只能对应一个value，所以多次对key放入value会把前面的值冲掉
// > var a = new Map();
// undefined
// > a.set('treehl', 100);
// Map { 'treehl' => 100 }
// > a.set('treehl', 99);
// Map { 'treehl' => 99 }
// > a.get('treehl');
// 99


// set 也是一组key的集合，但不存储value
// set中没有重复的key
var s1  = new Set(); // 空的set
var s2 = new Set([1, 2, 3]); // Set {1, 2, 3}
console.log(s1);
console.log(s2);

// 重复元素在set中自动被过滤
// 通过add(key)的方法添加元素到Set中
// delete(key) 方法可以删除元素
var s = new Set([1,2 ,3 ,'2']);
console.log(s);
console.log(s.add(4));
console.log(s.delete(4));
console.log(s);

