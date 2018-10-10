// 操作文件
// <input type="file">
// js可以在提交表单时对文件扩展名做检查，以方便用户上传无效的文件
var f = document.getElementById('test-file-upload');
var filename = f.value; // c:\\fakepath\file.png
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
    alert('Can only upload image file.');
    return false;
}


// File API
// HTML5提供File和FileReader，可以获取文件信息并读取文件

var 
    fileInput = document.getElementById('test-image-file'),
    info = document.getElementById('test-file-info'),
    preview = document.getElementById('test-image-preview');
// 监听change事件;
fileInput.addEventListener('change', function () {
    // 清楚背景图片
    preview.style.backgroundImage = '';
    // 检查文件是否选择
    if (!fileInput.value) {
        info.innerHTML = '没有选择文件';
        return;
    }
    // 获取File引用
    var file = fileInput.files[0];
    // 获取File信息
    info.innerHTML = '文件: ' + file.name + '<br>' +
                     '大小: ' + file.size + '<br>' + 
                     '修改: ' + file.lastModifiedDate;
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif') {
        alert('不是有效的图片文件!')
        return
    }

    // 读取文件
    var reader = new FileReader();
    reader.onload = function(e) {
        var 
            data = e.target.result;
        preview.style.backgroundImage = 'url(' + data + ')';
    };
    reader.readAsDataURL(file);
});



    