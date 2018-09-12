// 导入文件
import _ from 'lodash';
// 导入 css 文件
import './css/index.style.css';
import './css/index.link.css';
// 导入 style 文件, 也可以用 require
import './css/stylus/index.styl';
//require('./stylus/index.styl');

// 导入 gif 文件
import pic from './h5.gif';
// 导入 xml 文件
import xmlData from './xmlData.xml';
// 导入 js 文件
import printLog from './printfn.js';



function init() {
    // 新增 div
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    // 将图像添加到 div
    let myPic = new Image();
    myPic.src = pic;
    element.appendChild(myPic);

    // 打印 xmlData
    console.log(xmlData);

    return element;
}

document.body.appendChild(init());

// 调用 printLog 方法
printLog();