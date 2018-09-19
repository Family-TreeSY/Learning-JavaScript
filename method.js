// 在对象中绑定函数，称为这个对象的方法
// 绑定到对象上的函数叫做方法，
// this是一个特殊变量，它指向treehl对象，this.birth可以拿到treehl的birth属性
var treehl = {
    name: 'tree',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
console.log(treehl.age());


// 拆分开写
// 如果以对象形式调用,treehl.age()，该函数的this指向吊影的对象treehl
// 如果单独调用getAge()函数，this就指向全局
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var treehl = {
    name: 'tree',
    birth: 1990,
    age: getAge,
};

console.log(treehl.age());
console.log(getAge());

var fn = treehl.age;
console.log(fn);


// this指向undefined
var treehl = {
    name: 'tree',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.bith;
    }
};

var fn = treehl.age;
console.log(fn());


// 用that变量捕获this
var treehl = {
    name: 'tree',
    birth: 1990,
    age: function () {
        var that = this;
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth;
        }
        return getAgeFromBirth();
    }
};

console.log(treehl.age());


// apply指定函数的this指向哪个对象，可以用函数本身的apply方法，它接受两个参数，
// 一个是需要绑定的this变量，第二个是array，表示函数本身的参数
// 用apply修复getAge()调用
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var treehl = {
    name: 'tree',
    birth: 1990,
    age: getAge,
};

console.log(treehl.age());

// apply修复getAge()
console.log(getAge.apply(treehl, []));
// 用call()方法
console.log(getAge.call(treehl, 1, 2, 3));
// 对普通函数的调用，通常把this绑定为null


// decorator
