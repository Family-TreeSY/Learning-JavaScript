

var person = {
    name: 'treehl',
    age: 20,
    tags: ['js', 'web', 'mobile'],
    city: 'Shanghai',
    hasCar: true,
    zipcode: null,
};

console.log(person.name);
console.log(`这是一个
    多行
    字符串
`);

var name = 'treehl';
var age = 20;
// var message = '你好, ' + name + ', 你今年' + age + '岁了';
// 模板字符串
var message = `您好， ${name}, 你今年${age}岁了`;
console.log(message);


var s = 'hello, js!';
s[11] = 'SpaceX';
console.log(s.length);
console.log(s[10]);
console.log(s);
// 把字符串变为大写
console.log(s.toUpperCase());
//把字符串变为小写
console.log(s.toLowerCase());
// 搜索指定字符串出现的位置
console.log(s.indexOf('js'));
// 没有找到指定的字符串，返回-1
console.log(s.indexOf('SpaceX'));
// 从索引0开始到3，不包括3
console.log(s.substring(0, 3));
// 从8开始到结束
console.log(s.substring(8));
