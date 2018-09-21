// generate(生成器)
// 边计算边循环
// js 斐波那契函数
function fib(max) {
    var
        t,
        a = 0,
        b = 1,
        array = [0, 1];
    while (array.length < max) {
        [a, b] = [b, a + b];
        array.push(b);
    }
    return array;
}
console.log(fib(5));


// generater fib
// function后面 + *
function* fibo(max) {
    var
        t,
        a = 0,
        b = 1,
        n = 0;
    while (n < max) {
        yield a;
        [a, b] = [b, a +b];
        n ++;
    }
    return;
}

var f = fibo(5);
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());


// for ... of ...
for (var x of fibo(10)) {
    console.log(x);
}


// 用一个对象来保存状态
var fib = {
    a: 0,
    b: 1,
    n: 0,
    max: 5,
    next: function () {
        var
            r = this.a,
            t = this.a + this.b,
        this.a = this.b;
        this.b = t;
        if (this.n < this.max) {
            this.n ++;
            return r;
        } else {
            return undefined;
        }
    }
};
