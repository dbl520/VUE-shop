import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import Vuex from "vuex";
// import "./utils/rem.js";
import { getHttp, postHttp } from "./utils/api";
//定义全局变量
Vue.prototype.$getHttp = getHttp;
Vue.prototype.$postHttp = postHttp;
import "babel-polyfill";
import { Lazyload } from "mint-ui"; //懒加载
Vue.use(Lazyload, {
	//懒加载声明错误图和占位图
	preLoad: 1,
	error:
		"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519390533134&di=8fffb0fa229df0c0a2c1baf625353498&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01067e58edf49da8012049efa65a00.gif",
	loading:
		"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1519390533134&di=8fffb0fa229df0c0a2c1baf625353498&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01067e58edf49da8012049efa65a00.gif"
});
Vue.use(Vuex);
import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);
// 滴滴ui
// import Cube from 'cube-ui'
// Vue.use(Cube)
// 解决移动端300s延迟
import fastclick from "fastclick";
fastclick.attach(document.body); //解决移动端点击事件200ms延迟
Vue.config.productionTip = true;
//引入请求
import axios from "axios";
Vue.prototype.$http = axios;
/*vConsole */
import Vconsole from "vconsole";
let vConsole = new Vconsole();
export default vConsole;
/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	store,
	template: "<App/>",
	render: h => h(App),
	components: {
		App
	}
});
