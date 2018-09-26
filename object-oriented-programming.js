// 面向对象编程
// 对象的基本概念
// 1、类       2、实例
// js没有class的概念，所有对象都是实例
// 把一个对象的原型指向另外一个对象
var bird = {
    fly: function () {
        console.log(this.name + ' is flying...');
    }
};

treehl.__proto__ = bird;
console.log(treehl.fly());
