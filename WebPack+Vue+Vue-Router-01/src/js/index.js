// 导入 Vue，注意此时需要本地已经安装了 vue 模块
import Vue from 'vue';
// 导入 VueRouter，注意此时需要本地已经安装了 vue-router 模块
import VueRouter from 'vue-router';
// 导入 lodash，注意此时需要本地已经安装了 vue 模块
import _ from 'lodash';
// 导入 css 文件
import '../css/index.css';
// 导入 style 文件
import '../css/stylus/index.styl';
// 导入 vue 组件
import homePage from './home/home.vue';
// 导入 vue 组件
import fooPage from './foo/foo.vue';


// 模块化工程，必须使用以下语句来导入 VueRouter
Vue.use(VueRouter);

// 配置路由到组件的映射
const routes = [
    { path: '/', component: homePage },
    { path: '/foo', component: fooPage }
];

// 通过之前的配置创建 router 实例
const router = new VueRouter({
    routes    // 缩写, 相当于 routes: routes
});


// 创建根 Vue
new Vue({
    el: '#app',
    router: router,   // 缩写, 相当于 router: router
    data: {
        message: 'Hello Wabpack & Vue 02!'
    }
});