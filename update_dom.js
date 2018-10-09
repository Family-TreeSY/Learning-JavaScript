// 更新DOM
// 修改innerHTML，可以修改内部节点的内容
// 如果写入的字符串是通过网络拿到的，需要对字符编码来避免xss攻击

// 获取id为p-id
var p = document.getElementById('p-id');
// 设置文本为abc
p.innerHTML = 'ABC';
// 设置HTML
p.innerHTML = 'ABC<span style="color:red">RED</span>XYZ';


// 第二种 innerText   textContent
// 可以自动对字符串进行HTML的编码
// innerText不返回隐藏元素的文本
// innerContent返回所有文本
var p = document.getElementById('p-id');
p.innerText = '<script>alert("Hi")</script>';
// 设置CSS
p.style.color = '#ff0000';
p.style.fontSize = '20px';
p.style.paddingLeft = '2em';


