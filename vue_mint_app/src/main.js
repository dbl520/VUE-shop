import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Vuex from "vuex";

Vue.use(Vuex);
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);
// 解决移动端300s延迟
import fastclick from "fastclick";
fastclick.attach(document.body); //解决移动端点击事件200ms延迟
Vue.config.productionTip = true;
//引入请求
import axios from "axios";
Vue.prototype.$http = axios;
// 根据state状态判断是否缓存

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    render: h => h(App),
    components: { App },

});