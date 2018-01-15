import Vue from "vue";
import Router from "vue-router";
import FooterBar from "@/components/FooterBar";
import xialashangla from "@/components/xialashangla";
import main from "../pages/main.vue";
import tool from "../pages/tool.vue";
import my from "../pages/my.vue";
import details from "../pages/details.vue";
import choose from "../pages/choose.vue";
import cart from "../pages/cart.vue";
import header from "@/components/header";
import all_order from "../pages/all_order.vue";
import news from "../pages/news.vue";
import need from "../pages/need.vue";
import qiangou from "../pages/qiangou.vue";
import fabu from "../pages/fabu.vue";
import mifenka from "../pages/mifenka.vue";
Vue.use(Router);

export default new Router({
    routes: [{
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
            path: "/header",
            name: "header",
            component: header
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
            path: "/xialashangla",
            name: "xialashangla",
            component: xialashangla
        }
    ]
});