import Vue from "vue";
import Router from "vue-router";
import FooterBar from "@/components/FooterBar";
const main = resolve => require(['../pages/main.vue'], resolve);
const tool = resolve => require(['../pages/tool.vue'], resolve);
const my = resolve => require(['../pages/my.vue'], resolve);
const details = resolve => require(['../pages/details.vue'], resolve);
const choose = resolve => require(['../pages/choose.vue'], resolve);
const cart = resolve => require(['../pages/cart.vue'], resolve);
const all_order = resolve => require(['../pages/all_order.vue'], resolve);
const news = resolve => require(['../pages/news.vue'], resolve);
const need = resolve => require(['../pages/need.vue'], resolve);
const qiangou = resolve => require(['../pages/qiangou.vue'], resolve);
const fabu = resolve => require(['../pages/fabu.vue'], resolve);
const mifenka = resolve => require(['../pages/mifenka.vue'], resolve);
const fenlei = resolve => require(['../pages/fenlei.vue'], resolve);

const login = resolve => require(['../pages/login.vue'], resolve);
const notfound = resolve => require(['../pages/404.vue'], resolve);
const scrolldrop = resolve => require(['../pages/scrolldrop.vue'], resolve);
// import load from "../pages/load.vue";
const load = resolve => require(['../pages/load.vue'], resolve);
Vue.use(Router);
export default new Router({
	// mode: "history", //改为history.路由中没有#号
	routes: [
		// {
		//     path: "/",
		//     name: "login",
		//     component: login,

		// },
		{
			path: "/login",
			name: "login",
			component: login,

		},
		{
			path: "/",
			name: "main",
			component: main
		},
		{
			path: "/main",
			name: "main",
			component: main
		},
		{
			path: "/fenlei",
			name: "fenlei",
			component: fenlei
		},
		{
			path: "/tool",
			name: "tool",
			component: tool
		},
		{
			path: "/cart",
			name: "cart",
			component: cart
		},
		{
			path: "/my",
			name: "my",
			component: my
		},
		{
			path: "/choose",
			name: "choose",
			component: choose
		},
		{
			path: "/details",
			name: "details",
			component: details
		},
		{
			path: "/all_order",
			name: "all_order",
			component: all_order
		},
		{
			path: "/news",
			name: "news",
			component: news
		},
		{
			path: "/need",
			name: "need",
			component: need
		},
		{
			path: "/qiangou",
			name: "qiangou",
			component: qiangou
		},
		{
			path: "/fabu",
			name: "fabu",
			component: fabu
		},
		{
			path: "/mifenka",
			name: "mifenka",
			component: mifenka
		},
		{
			path: "/load",
			name: "load",
			component: load
		},
		{
			path: "/scrolldrop",
			name: "scrolldrop",
			component: scrolldrop
		},
		{
			path: "*",
			name: "notfound",
			component: notfound
		},
       
	]
});