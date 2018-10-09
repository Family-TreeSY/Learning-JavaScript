// 删除DOM
// 要删除节点，首先获得该节点本身以及它的父节点
// 调用父节点的removeChild删除本身
// 删除后节点不在文档中了，但它依旧存在于内存中

// 拿到要删除的节点
var self = document.getElementById('to-be-removed');
// 拿到父节点
var parent = self.parentElement;
// 删除
var removed = parent.removeChild(self);


// 遍历一个父节点的子节点并进行删除操作时，children属性只是一个只读属性，它的子节点变化会实时更新
<div id="parent">
    <p>First</p>
    <p>Second</p>
</div>

var parent = document.getElementById('parent');
parent.removeChild(parent.children[0]); // 删除First
parent.removeChild(parent.children[1]); // 会出现报错，因为children属性是实时更新的，first不存在后，节点数量就只有一个了



var parent = document.getElementById('test-list');
parent.removeChild(parent.children[5]);
parent.removeChild(parent.children[3]);
parent.removeChild(parent.children[1]);