import _ from 'lodash';

// 设置 URL
const getJsonDataUrl = 'jsonData';
const downloadUrl = 'download';

// 原生JS 调用Ajax
document.addEventListener('readystatechange', function () {
    if (document.readyState == 'complete') {
        document.getElementById('jsonButton').addEventListener('click', function () {
            // Ajax 请求
            let xmlHttp = new XMLHttpRequest();
            xmlHttp.onreadystatechange = function () {
                if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                    // 解析返回值
                    JSON.parse(xmlHttp.responseText);
                }
            }
            xmlHttp.open("POST", getJsonDataUrl, true);
            xmlHttp.send();
        });
    }
});


// 页面初始化操作
function init() {
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack & Koa!'], ' ');
    return element;
}

// jQuery 调用 Ajax
$(document).ready(function () {
    //初始化页面
    document.body.appendChild(init());

    $('#downlodButton').click(function () {
        window.open(downloadUrl);
    });
});