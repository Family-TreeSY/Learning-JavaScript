var age = 20;
if (age >= 18) {
    console.log('adult');
} else {
    console.log('teenager');
}

//多行条件判断
var age = 3;
if (age >= 18) {
    console.log('adult');
} else {
    if (age >= 6) {
        console.log('teenager');
    } else {
        console.log('kid');
    }
}

// null undefined 0 NaN 空字符串''视为false。其他值一概为true
var s = '123';
if (s.length) {
    console.log(s.length);
}

// Practice

var bmi = 40;
if (bmi > 32) {
    console.log('严重肥胖');
} else if (bmi > 28) {
    console.log('肥胖');
} else if (bmi < 18.5) {
    console.log('过轻');
} else if (bmi > 25) {
    console.log('过重');
}