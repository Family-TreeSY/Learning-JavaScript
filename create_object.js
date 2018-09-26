// 创建对象
// 每个创建的对象都会设置一个原型，指向它原型对象
// 查找规则 obj.XXX访问一个对象属性时
// 1 、现在该对象上找
// 2、没找到就去原型对象上找
// 3、再没找到就追溯到object.prototype
// 4、还没找到就返回undefined

// 创建一个array对象
// var arr = [1, 2, 3];
// // 它的原型链是：
// // arr --> Array.prototype --->Object.prototype --> null
// // Array.prototype定义了Indexof()、shift()等方法，因此可以在所有的Array对象上面直接调用这些方法
//
//
// // 当我们创建函数时
// function foo() {
//     return 0;
// }
//
// // 它的原型链是：
// // foo --> Function.prototype -- Object.prototype --> null
// // Function.prototype定义了apply()方法，所有函数都可以调用apply()
//
//
// // 构造函数
// // 用构造函数来创建对象
// // 关键字new来调用函数，并返回一个对象，有new就是构造函数，没有就是普通函数
// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         console.log('Hello, ' + this.name + '!');
//     }
// }
//
// var treehl = new Student('treehl');
// console.log(treehl.name);
// console.log(treehl.hello);
//
// // 新创建的treehl的原型链是:
// // treehl--->Student.prototype---> Object.prototype --->null
// // treehl原型指向Student原型
//
//
// var shen = new Student('shen');
// console.log(shen.name);
// // console.log(shen.hello());
//
//
// // new Student()创建的对象还从原型上获得了一个constructor，它指向函数Student本身
// console.log(treehl.constructor === Student.prototype.constructor);
// console.log(Student.prototype.constructor === Student);
// console.log(Object.getPrototypeOf(treehl) === Student.prototype);
// console.log(treehl instanceof Student);
//
//
// //
// var hong = new Student('hong');
// console.log(hong.name);
// console.log(hong.hello());


// 构造函数首字母应该大写，普通函数首字母小写
// 内部封装所有的new操作
// ||逻辑运算符or
function Student(props) {
    this.name = props.name || '匿名'; // 默认值为匿名
    this.grade = props.grade || 1; // 默认值为1
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function createStudent(props) {
    return new Student(props || {})
}

var hao = createStudent({
    name: 'treehl',
});

console.log(hao.name);
console.log(hao.grade);

// ex
function Cat(name) {
    this.name = name;
    this.say = function say() {
        console.log('Hello, ' + this.name + '!');
    }
}

var kitty = new Cat('Kitty');
console.log(kitty.name);
console.log(kitty.say());