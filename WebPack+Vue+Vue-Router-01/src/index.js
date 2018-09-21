// 导入 Vue
import Vue from 'vue';
// 导入 lodash
import _ from 'lodash';
// 导入 css 文件
import './css/index.css';
// 导入 style 文件
import './css/stylus/index.styl';
// 导入 less 文件
//import './css/less/index.less';
// 导入 vue 文件
import homePage from './js/home/home.vue';


// 创建根 Vue
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Wabpack & Vue 02!'
    },
    // 注册 vue 组件
    components: {
        'home-page': homePage
    }
});