import Vue from 'vue'
import App from './App'
import 'babel-polyfill'

import Mint from 'mint-ui' // 将fly实例挂在vue原型上
// 引入请求
import axios from 'axios'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
// 添加全局配置、拦截器等
Vue.prototype.$http = fly

Vue.config.productionTip = false
App.mpType = 'app'
// 定义全局变量
Vue.use(Mint)

Vue.prototype.$http = axios
const app = new Vue(App)
app.$mount()
