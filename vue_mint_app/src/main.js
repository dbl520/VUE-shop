// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'
Vue.use(Vuex)

// 导入自适应
// import 'lib-flexible'
import Mint from 'mint-ui';
Vue.use(Mint);

Vue.config.productionTip = true
    //引入请求
import axios from 'axios';
Vue.prototype.$http = axios
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    render: h => h(App),
    components: { App }
})