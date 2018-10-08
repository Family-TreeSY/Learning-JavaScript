// DOM是一个树形结构，操作DOM结点实际上就是这么几个操作
// 更新
// 遍历
// 添加
// 删除
// 返回ID为test的节点
var test = document.getElementById('test');

// 先定位ID为test_table的节点，再返回其内部所有的tr节点
var trs = document.getElementById('test_table').getElementsByTagName('tr');

// 先定位ID为test-div的节点，再返回其内部所有class包含的red节点
var reds = document.getElementById('test-div').getElementsByClassName('red');

// 获取节点test下的所有直属子节点
var cs = test.children;

// 获取节点test下第一个子节点
var first = test.firstElementChild;

// 获取节点test下最后一个子节点
var last = test.lastElementChild;


// 第二种方法querySelector()和querySelectorAll()
// 通过querySelector获取ID为q1的节点
var q1 = document.querySelector('#q1');

// 通过querySelectorAll获取q1节点内的符合条件的所有节点
var ps = q1.querySelectorAll('div.highlighted > p');