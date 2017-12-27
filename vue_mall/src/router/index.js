import Vue from 'vue'
import VueRouter from 'vue-router'
import {isAuth} from "../common"
import http from '../service/httpService'

Vue.use(VueRouter)

let routes = [
    {
        name: '/',
        path: '/',
        meta: {
            requiresAuth: false,
            title: 'index',
        },
        component: (resolve) => {
            require(['../view/index.vue'], resolve)
        }
    }, {
        name: 'login',
        path: '/login',
        meta: {requiresAuth: false},
        component: (resolve) => {
            require(['../view/login.vue'], resolve)
        },
        beforeEnter: (to, from, next) => {
            if (isAuth()) {
                next('/index')
            }
            next();
        }
    }, {
        name: 'wxLogin',
        path: '/wxLogin',
        meta: {requiresAuth: false},
        component: (resolve) => {
            require(['../view/wxLogin.vue'], resolve)
        }
    }, {
        name: 'regist',
        path: '/regist',
        meta: {requiresAuth: false},
        component: (resolve) => {
            require(['../view/regist.vue'], resolve)
        },
        beforeEnter: (to, from, next) => {
            if (isAuth()) {
                next('/index')
            }
            next();
        }
    }, {
        name: 'goods',
        path: '/goods/:id',
        meta: {
            requiresAuth: false,
            title: '商品详情',
            level: 1
        },
        component: (resolve) => {
            require(['../view/_common/goods'], resolve)
        }
    }, {
        name: 'shell',
        path: '/shell',
        meta: {requiresAuth: false},
        component: (resolve) => {
            require(['../view/_common/shell.vue'], resolve)
        },
        children: [
            {
                name: 'index',
                path: '/index',
                meta: {
                    requiresAuth: false,
                    title: '首页',
                    level: 0
                },
                component: (resolve) => {
                    require(['../view/index/index'], resolve)
                }
            },
            {
                name: 'category',
                path: '/category',
                meta: {
                    requiresAuth: false,
                    title: '分类',
                    level: 0
                },
                component: (resolve) => {
                    require(['../view/category/index'], resolve)
                }
            },
            {
                name: 'find',
                path: '/find',
                meta: {
                    requiresAuth: false,
                    title: '发现',
                    level: 0
                },
                component: (resolve) => {
                    require(['../view/find/index'], resolve)
                }
            },
            {
                name: 'shopping',
                path: '/shopping',
                meta: {
                    requiresAuth: false,
                    title: '购物车',
                    level: 0
                },
                component: (resolve) => {
                    require(['../view/shopping/index'], resolve)
                }
            },
            {
                name: 'center',
                path: '/center',
                meta: {
                    requiresAuth: true,
                    title: '个人中心',
                    level: 0
                },
                component: (resolve) => {
                    require(['../view/center/index'], resolve)
                }
            },
            {
                name: 'account',
                path: '/account',
                meta: {
                    requiresAuth: true,
                    title: '账户信息',
                    level: 1
                },
                component: (resolve) => {
                    require(['../view/center/account'], resolve)
                }
            },
            {
                name: 'profile',
                path: '/profile',
                meta: {
                    requiresAuth: true,
                    title: '个人信息',
                    level: 1
                },
                component: (resolve) => {
                    require(['../view/center/profile'], resolve)
                }
            },
            {
                name: 'avatar',
                path: '/profile/avatar',
                meta: {
                    requiresAuth: true,
                    title: '头像修改',
                    level: 1
                },
                component: (resolve) => {
                    require(['../view/center/profile_avatar'], resolve)
                }
            }
        ]
    }]

export const router = new VueRouter({
    mode: 'history',
    routes
})
router.beforeEach((to, from, next) => {
    /*
    * 用户登录状态判断
    * */
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // this route requires auth, check if logged in
        // if not, redirect to login page.
        if (!isAuth()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    } else {
        next() // 确保一定要调用 next()
    }
    /*
    * 微信js-sdk页面签名
    * */
    http.wxSignature({url: location.href}).then(res => {
        wx.config(res.data.config);
        wx.error(res => {

        });
    });
})