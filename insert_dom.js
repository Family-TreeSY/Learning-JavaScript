// 插入DOM
// 当我们获得了某个节点，想在这个DOM节点内插入新的DOM
// 假如DOM节点是空的，例如<div>...</div>，直接使用innerHTML = '<span>treehl</span>'来修改
// 假如DOM节点不是空的，就不能使用innerHTML，因为它会替换掉原来的所有子节点
<p id="js">JavaScript</p>
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

var 
    js = document.getElementById('js');
    list = document.getElementById('list');
list.appendChild(js);

// HTML结构变成了这样
// id="js"这个节点首先会从原先的位置删除，再插入到新的位置
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
    <p id="js">JavaScript</p>
</div>


// 从零创建一个新的节点
// appendChild()把一个子节点添加到父节点的最后一个子节点
var 
    list = document.getElementById('list');
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.appendChild(haskell);

// 动态创建一个style节点，然后把它添加到<head>节点的末尾，这样就动态地给文档添加了新的css定义
var d = document.createElement('style');
undefined
d.setAttribute('type', 'text/css');
undefined
d.innerHTML = 'p {color: red}';
"p {color: red}"
document.getElementsByTagName('head')[0].appendChild(d);
<style type=​"text/​css">​p {color: red}​</style>​


// insertBefore
// 把子节点插入到指定的位置
// parentElement.insertBefore(newElement, referenceElement);
// 子节点会插入到referenceElement前面
// 把Haskell插入到Python前面
<div id="list">
    <p id="java">Java</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

var 
    list = document.getElementById('list');
    ref = document.getElementById('python');
    haskell = document.createElement('p');
haskell.id = 'haskell';
haskell.innerText = 'Haskell';
list.insertBefore(haskell, ref);

// 新的HTML结构
<div id="list">
    <p id="java">Java</p>
    <p id="haskell">Haskell</p>
    <p id="python">Python</p>
    <p id="scheme">Scheme</p>
</div>

