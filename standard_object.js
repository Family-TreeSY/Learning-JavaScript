// 用typeof操作符来获取对象的类型，返回对象是字符串
console.log(typeof 123);
// > typeof 123;
// 'number'


// 包装对象
// 包装对象用new创建
var n = new Number(123);
console.log(n); // [Number: 123]生成了新的包装类型

var b = new Boolean(true);
console.log(b) //[Boolean: true]

var s = new String('str');
console.log(s) //[String: 'str']


// > var n = new Number(123);
// undefined
// > n
// [Number: 123]
// > typeof new Number(123);
// 'object'
// > new Number(123) === 123;
// false
// > typeof new Boolean(true);
// 'object'
// > new Boolean(true) === true;
// false
// > typeof new String('str');
// 'object'
// > new String('str') === 'str';
// false


// 不做包装函数，Number()、Boolean()、String()会被当作普通函数,
// 把任何类型的数据转换为number、boolean、string
// > var n = Number('123');
// undefined
// > n
// 123
// > typeof n;;
// 'number'
// > var b = Boolean('true');
// undefined
// > typeof b;
// 'boolean'
// > var b2 = Boolean('false');
// undefined
// > b2
// true
// > typeof b2;
// 'boolean'
// > var b3 = Boolean('');
// undefined
// > typeof b3;
// 'boolean'
// > b3
// false
// > var s = String('str');
// undefined
// > typeof s;
// 'string'
// > s
// 'str'
// >

// tostring()
// Number对象调用tostring会报错
console.log((123).toString());
console.log(123..toString());