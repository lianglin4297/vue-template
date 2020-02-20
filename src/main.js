/*
 * @Descripttion: 
 * @version: 
 * @Author: Lianglin
 * @Date: 2020-01-08 10:02:57
 * @LastEditors: Lianglin
 * @LastEditTime: 2020-02-19 17:41:07
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import router from './router';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
