// json数据格式
//js内置json的解析
// 把person这个对象序列化成json格式
var person = {
    name: 'treehl',
    age: 20,
    gender: true,
    height: 180,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};

var s = JSON.stringify(person);
console.log(s, null, ' ');
console.log(s, ['name', 'skills'], ' ');


//给treehl定义一个toJSON()的方法，直接返回JSON应该序列化的数据

var person = {
    name: 'treehl',
    age: 20,
    gender: true,
    height: 180,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return {
            'Name': this.name,
            'Age': this.age,
        }
    }
};
console.log(JSON.stringify(person));


// 反序列化
// JSON.parse()把它变成一个JavaScript对象
console.log(JSON.parse('[1,2,3,true]'));
console.log(JSON.parse('{"name":"treehl", "age":14}'));

// JSON.parse()接收一个函数
var obj = JSON.parse('{"name": "treehl", "age": 14}', function (key, value) {
    if (key === 'name'){
        return value + '同学';
    } else {
        return value;
    }

});
console.log(JSON.stringify(obj));