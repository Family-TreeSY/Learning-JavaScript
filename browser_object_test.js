// window对象不但充当全局作用域而且表示浏览器窗口
// innerWidth   innerHeight属性获取浏览器内部窗口的宽度和高度
// console.log('window inner size: ' + window.innerWidth + '✖' + window.innerHeight);


// outerWidth和outerHeight属性可以获取浏览器窗口的整个宽度和高度
// navigater表示浏览器的信息
// navigater.appName:浏览器名称
// navigater.appVersion:浏览器版本
// navigater.language:浏览器设置的语言
// navugater.userAgent:浏览器设定的User_Agent字符串


// console.log('appName = ' + navigator.appName);
// VM372:1 appName = Netscape
// undefined
// console.log('appVersion = ' + navigator.appVersion);
// VM511:1 appVersion = 5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36
// undefined
// console.log('language = ' + navigator.language);
// VM621:1 language = zh-CN
// undefined
// console.log('platform = ' + navigator.platform);
// VM752:1 platform = Win32
// undefined
// console.log('userAgent = ' + navigator.userAgent);
// VM879:1 userAgent = Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36
// undefined


// screen 屏幕
// screen.width
// screen.height
//screen.colorDepth:返回颜色位数
// console.log('ScreenSize: ' + screen.width + '✖' + screen.height);
// VM1079:1 ScreenSize: 1536✖86


// location 表示当前页面的URL信息
location.href; // 获取整个url
console.log(location.href);
// VM1146:1 https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499832124d97d77b00706461f9daf1a390b75ade1000
//     undefined
// console.log(location.protocool);
// VM1248:1 undefined
// undefined
// console.log(location.protocol);
// VM1262:1 https:
//     undefined
// console.log(location.host);
// VM1342:1 www.liaoxuefeng.com
// undefined
// console.log(location.port);
// VM1417:1
// undefined
// console.log(location.pathname);
// VM1458:1 /wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499832124d97d77b00706461f9daf1a390b75ade1000
// undefined
// console.log(location.search);
// VM1515:1
// undefined
console.log(location.hash);


// location.assign()加载一个新页面
// location.reload()重新加载当前页面

if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/'); // 设置一个新的URL地址
}


// document表示当前页面
// document有一个cookie属性，可以获取当前页面的Cookie
// document的title属性是从html中<title>XXXXX</title>中读取的，可以动态改变
console.log(document.title = '学习JS');
// VM1980:1 学习JS



// var menu = document.getElementById('drink-menu');
// undefined
// var drinks = document.getElementByTagName('dt');
// VM2114:1 Uncaught TypeError: document.getElementByTagName is not a function
// at <anonymous>:1:23
// (anonymous) @ VM2114:1
// var drinks = document.getElementsByTagName('dt');
// undefined
// var is, s, menu, drinks;
// undefined
// menu = document.getElementById('drink-menu');
// <dl id=​"drink-menu" style=​"border:​solid 1px #ccc;​padding:​6px;​">​…​</dl>​
// menu.tagName;
// "DL"
// drinks = document.getElementsByTagName('dt');
// HTMLCollection(3) [dt, dt, dt]0: dt1: dt2: dtlength: 3__proto__: HTMLCollection
// s = '提供的饮料有： '；
// VM2376:1 Uncaught SyntaxError: Invalid or unexpected token
// var s = '提供的饮料有: ';
// undefined
// for (i=0; i < drink.length; i++) {s = s + drink[i].innerHTML + ',';}
// VM2517:1 Uncaught ReferenceError: drink is not defined
// at <anonymous>:1:15
// (anonymous) @ VM2517:1
// for (i=0; i < drinks.length; i++) {s = s + drinks[i].innerHTML + ',';}
// "提供的饮料有: 摩卡,酸奶,果汁,"


// history对象保存了浏览器的历史纪录
// back() forward()按钮  后退和前进按钮