import Vue from 'vue'
import Router from 'vue-router'
import FooterBar from '@/components/FooterBar'
import main from '../pages/main.vue'
import tool from '../pages/tool.vue'
import my from '../pages/my.vue'
import details from '../pages/details.vue'
import choose from '../pages/choose.vue'
import cart from '../pages/cart.vue'
import header from '../pages/header.vue'
import all_order from '../pages/all_order.vue'
import news  from  '../pages/news.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
     {
      path: '/header',
      name: 'header',
      component: header
    },
    {
      path: '/tool',
      name: 'tool',
      component: tool
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/choose',
      name: 'choose',
      component: choose
    },
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/all_order',
      name: 'all_order',
      component: all_order
    },
    {
      path: '/news',
      name: 'news',
      component: news
    }

  ]
})
