// 正则表达式
// 和Python一样 http://www.cnblogs.com/huxi/archive/2010/07/04/1771073.html
// js创建正则表达式
// 两种写法
// 1、直接通过正则表达式来写
// 2、new RegExp('正则表达式')来创建RegExp对象
var re1 = /ABC\-001/;
console.log(re1); ///ABC\-001/

var re2 = new RegExp('ABC\\-001');
console.log(re2); ///ABC\-001/


// 判断字符串
// > var re = /^\d{3}\-\d{3,8}$/;
// > var re = /^\d{3}\-\d{3,8}$/;
// undefined
// > re.test('111-11111');
// true
// > re.test('111-11111111');
// true
// > re.test('111-111111111');
// false
// > re.test('111-11111111');
// true
// > re.test('111-1');
// false


// 切分字符串
// > 'ab c'.split('');
// [ 'a', 'b', ' ', 'c' ]
// > 'ab  c'.split('');
// [ 'a', 'b', ' ', ' ', 'c' ]
// 无法识别连续的空格
console.log('ab  c'.split(/\s+/));


// 全局搜索
// js用g表示全局匹配
var r1 = /test/g;
console.log(r1);
// 等价于
var r2 = new RegExp('test', 'g');
console.log(r2);

// exec()方法来搜索一个匹配的字符串
var s = 'JavaScript, VBScript, JScript and ECMAScript';
var re = /[a-zA-Z]+Script/g;
console.log(re.exec(s));