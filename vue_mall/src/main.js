// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'

/*
*  路由切换
* */
import {router} from './router'

/*
*  自定义组件
* */
import mcomponents from './components'

Vue.use(mcomponents)

/*
*  插件
* */
import myPlugin from './plugin'

Vue.use(myPlugin)
import {ToastPlugin} from 'vux'

Vue.use(ToastPlugin)

/*
*  css引入
* */
import './static/font/index.css'
import './static/css/layout.css'

/*
* vuex
* */
import store from './vuex'

/*
* mock数据
* */
import './mock'

FastClick.attach(document.body)

Vue.config.productionTip = false

/*
*  import isAuth函数
* */
import {isAuth} from "./common";

/* eslint-disable no-new */
new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        /*
        * 根组件创建时同步用户登陆状态到vuex
        * */
        if (isAuth()) {
            this.loginStatus = true;
        }
    },
    mounted: function () {
        /*
        *  调节不同设备的字体
        * */
        let html = document.getElementsByTagName("html")[0];
        let height = innerHeight;
        let width = innerWidth;
        var size;
        if (width < height) {
            size = width / 320 * 20;
        } else {
            size = height / 320 * 20;
        }
        html.style.fontSize = size + "px";
    }
}).$mount('#app-box')
