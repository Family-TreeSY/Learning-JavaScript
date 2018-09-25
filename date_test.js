// date对象用来表示日期和时间
var now = new Date();
console.log(now);

// 2018-09-25T08:41:46.327Z
// > now.getFullYear();
// 2018
// > now.getMonth();表示8 九月份 月份范围为0~11，8表示9月
// 8
// > now.getDate(); 表示25号
// 25
// > now.getDay(); 表示星期二
// 2
// > now.getHours();
// 16
// > now.getMinutes();
// 41
// > now.getSeconds();
// 46
// > now.getMilliseconds(); 表示毫秒
// 327
// > now.getTime();
// 1537864906327


// 创建一个指定日期和时间的Date对象
var d = new Date(2018, 8, 25, 16, 48, 111);
console.log(d);


// 解析一个符合iso 8601格式的字符串
var d = Date.parse('2018-09-25T16:51:11.875+8:00');
console.log(d);

var d = new Date(1234545);
console.log(d);
console.log(d.getMonth()); // 获取月份1


// 时区
// 显示本地时间和UTC时间
var d = new Date(1232131312);
console.log(d.toLocaleDateString()); //1970-1-15
console.log(d.toUTCString()); // Thu, 15 Jan 1970 06:15:31 GMT

if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}

var today = new Date();
if (today.getMonth() === 8 && today.getDate() === 25) {
    console.log('亲爱的，我预定了晚餐，晚上6点在餐厅见！');
} else {
    console.log('Wrong!!!')
}
