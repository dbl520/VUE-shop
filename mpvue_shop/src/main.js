import Vue from 'vue'
import App from './App'
import mpvueToastRegistry from 'mptoast'
import Vuex from 'vuex'
var Fly = require('flyio/dist/npm/wx')
var fly = new Fly()
Vue.prototype.$http = fly

Vue.config.productionTip = false
mpvueToastRegistry(Vue)
Vue.use(Vuex)
App.mpType = 'app'
const app = new Vue(App)
app.$mount()
