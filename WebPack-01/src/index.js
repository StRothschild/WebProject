import _ from 'lodash';
import './style.css';
import pic from './h5.gif';
import xmlData from './xmlData.xml';
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