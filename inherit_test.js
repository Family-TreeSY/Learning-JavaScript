// 原型继承
// Python中类的继承主要作用是子类获取父类的所有功能
// 在JS中采用原型继承没有扩展出class，所有就没有class类型
function Student(props) {
    this.name =props.name || 'Unamed';
}
Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

var treehl = new Student('treehl');
console.log(treehl.name);


// 基于Student扩展出PrimaryStudent
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}


// 借助空函数F（）来指向Student.prototype
// PrimaryStudent构造函数
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 空函数
function F() {
}

// 把F()的原型指向Student.prototype
F.prototype = Student.prototype;

// 把PrimaryStudent原型指向一个新的F对象，F对象的原型指向Student.prototype
PrimaryStudent.prototype = new F();

// 把PrimaryStudent原型构造函数修复为PrimaryStudent;
PrimaryStudent.prototype.constructor = PrimaryStudent;

// 继续在PrimaryStudent原型上定义方法，就是在new F()对象上定义方法
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

//创建treehl
var person = new PrimaryStudent({
    name: 'treehl',
    grade: 2
});

console.log(person.name);
console.log(person.grade);

console.log(person.__proto__ === PrimaryStudent.prototype);
console.log(person.__proto__.__proto__ === Student.prototype);

// 验证继承关系
console.log(person instanceof PrimaryStudent);
console.log(person instanceof Student);


// 继承动作用inherit()函数封装起来
function inherits(Child, Parent) {
    var F = function () {
    };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

// inherits()函数复用
function Student(props) {
    this.name = props.name || 'Unamed';
}

Student.prototype.hello = function () {
    console.log('Hello, ' + this.name + '!');
};

function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

// 实现原型链继承
inherits(PrimaryStudent, Student);

// 绑定其他方法到PrimaryStudent原型
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};
