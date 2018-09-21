// 导入 Vue
import Vue from 'vue';
// 导入 lodash
import _ from 'lodash';
// 导入 css 文件
import './css/index.css';
// 导入 style 文件
import './css/stylus/index.styl';
// 导入也可以用 require 语法
//require('./css/stylus/index.styl');

// 导入 gif 文件
import pic from './h5.gif';
// 导入 js 文件
//import printLog from './printfn.js';



var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Wabpack & Vue 01'
    }
});