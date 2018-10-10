// HTML表单输入控件
// 文本框 <input type='text'>
// 口令框<input type="password">
// 单选框<input type="radio">
// 复选框<input type="checkbox">
// 下拉框<select>
// 隐藏文本 <input type="hidden">

// 获取值
// 获得了一个input节点，就可以直接调用value获得对应的用户输入
<input type="text" id="email"></input>
var input = document.getElementById('email');
input.value;


// 对于单选框和复选框 radio checkbox，value属性是HTML预设的值，我们需要获得用户是否“勾上了”，所以用checked判断
// <label><input type="radio" name="weekday" id="monday" value="1">Monday</label>
// <label><input type="radio" name="weekday" id="tuesday" value="2">Tuesday</label>

var mon = document.getElementById('monday');
var tue = document.getElementById('tuesday');
mon.value; // 1
tue.value; // 2
mon.checked; // true or false
tue.checked; // true or false


// 设置值
// <input type="text" id="email">
var input = document.getElementById('email');
input.value = 'treehl93@gmail.com';  // 添加了value值


// HTML5控件


// 提交表单
<!DOCTYPE html>
<html lang="zh-Hans">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML5控件</title>
</head>
<body>
    <!--第一种方式-->>
    <!-- <input type="date" value="2018-10-10">
    <input type="datetime-local" value="2018-10-11T10:41:11"> -->
<form id="test-form">
    <input type="text" name="test">
    <button type="button" onclick="doSubmitForm()">Submit</button>
</form>

<script>
    function doSubmitForm() {
        var form = document.getElementById('test-form');
        // 提交form
        form.submit();
    }
</script>


<!--第二种方式-->
<!-- return true来告诉浏览器将继续提交 -->
<form id="test-form" onsubmit="return checkForm()">
    <input type="text" name="test">
    <button type="submit">Submit</button>
</form>

<script>
    function checkForm(){
        var form = document.getElementById('test-form');
        // 可以在此修改input
        return true;
    }
</script>


<!--<input type="hidden">-->
<!--出于安全考虑，提交表单时不传输明文口令-->
<form id="login-form" method="post" onsubmit="return checkForm()">
    <input type="text" id="username" name="username">
    <input type="password" id="password" name="password">
    <button type="submit">Submit</button>
</form>

<script>
    function checkForm() {
        var pwd = document.getElementById('login-form');
        // 把用户输入的铭文变为MD5
        pwd.value = toMD5(pwd.value);
        // 继续下一步
        return true;
    }
</script>

<!--不改变用户的刷入<input type="hidden">-->
<form id="login-form" method="post" onsubmit="return checkForm()">
        <input type="text" id="username" name="username">
        <!--没有name属性的input不会被提交-->
        <input type="password" id="input-password">
        <input type="hidden" id="md5-password" name="password">
        <button type="submit">Submit</button>
    </form>
    
    <script>
        function checkForm() {
            var input_pwd = document.getElementById('input-password');
            var md5_pwd = document.getElementById('md5-password');
        
            // 把用户输入的铭文变为MD5
            md5_pwd.value = toMD5(input_pwd.value);
            // 继续下一步
            return true;
        }
    </script>
</body>
</html>