// class继承
// 关键字class
// function  Student(name) {
//     this.name = name;
// }
//
// // 原型函数
// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// };
//
// var person = new Student('treehl');
// console.log(person.name);
// console.log(person.hello());


// class包含了构造函数constructor和定义在原型对象上的函数hello()
 class Student {
     constructor(name) {
         this.name = name;
     }
     hello() {
         console.log('Hello, ' + this.name + '!');
     }
 }

 var treehl = new Student('hello, js!');
 console.log(treehl.name);
 console.log(treehl.hello());


 // class继承
// extends表示原型链对象来自Student
class PrimaryStudent extends Student {
    constructor(name, grade) {
        super(name); //继承父类的构造方法
        this.grade = grade;
    }
    myGrade() {
        console.log('I\'m at grade ' + this.grade + '!');
    }
}

var shen = new PrimaryStudent('tree', 9);
console.log(shen.name);
console.log(shen.hello());
console.log(shen.myGrade());


// ex2
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Cat extends Animal{
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    myCat() {
        console.log('Hello, ' + this.name + '! I\'m ' + this.age + '!');
    }
}

var cat = new Cat('mimi', 1);
console.log(cat.name);
console.log(cat.age);
console.log(cat.myCat());