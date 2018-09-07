// object
var treehl = {
    name: 'shen',
    birth: 1993,
    school: 'MIT',
    height: 1.81,
    weight: 68,
    score: null,
};
console.log(treehl.name);

var yang = {
    name: 'lin',
    'middle-school': 'yangzi-high-school',
};
console.log(yang['middle-school']);
console.log(yang.name);
console.log(yang['name']);
console.log(yang.age);


// 自由地给对象添加或者删除属性
var ss = {
    name : 'shen',
};
console.log(ss.age=18);
console.log(ss);
// console.log(delete ss.age);
// console.log(ss);
// console.log(delete ss.name);
// console.log(ss);
// console.log(delete ss.school);
// console.log(ss);
console.log('name' in ss);
console.log('age' in ss);
console.log('school' in ss);


// in判断一个属性存在，不一定是对象的，有可能是继承得来的
//toString定义在object对象中，而所有对象都会在原型链上指向object，所以ss对象也有toString属性
console.log('toString' in ss);


// hasOwnProperty，判断对象自身拥有的属性

var treehl = {
    name: 'shen',
};
console.log(treehl.hasOwnProperty('name'));
console.log(treehl.hasOwnProperty('toString'));