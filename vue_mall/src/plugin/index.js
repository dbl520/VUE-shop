import http from '../service/httpService'
import {isAuth} from '../common'
import store from '../vuex'

export default {
    install(Vue) {
        Vue.prototype.$http = http
        Vue.mixin({
            /*
            * 对于全局高度依赖的vuex数据，把他作为每个组组件公用计算属性是一个方便的做法
            * */
            computed: {
                loginStatus: {
                    get() {
                        return store.state.user.isAuth;
                    },
                    set(val) {
                        store.dispatch('updateAuth', val);
                    }
                }
            },
            /*
            * 全局方法
            * */
            methods: {
                goto(value) {
                    this.$router.push(value);
                },
                back() {
                    this.$router.go(-1);
                },
                isAuth() {
                    return isAuth();
                }
            },
            /*
            * 全局指令
            * */
            directives: {
                bound: {
                    inserted: function (el, binding) {
                        let start = 0, distance = 0, end = 0;
                        el.addEventListener('touchstart', e => {
                            el.style.transition = '';
                            switch (binding.value.type) {
                                case 'top':
                                    start = e.touches[0].screenY;
                                    break;
                                default:
                                    break;
                            }
                        })
                        el.addEventListener('touchmove', e => {
                            switch (binding.value.type) {
                                case 'top':
                                    if (Math.abs(distance) < binding.value.max) {
                                        distance = e.touches[0].screenY - start;
                                        el.style.transform = 'translateY(' + distance + 'px)';
                                    }
                                    break;
                                default:
                                    break;
                            }
                        })
                        el.addEventListener('touchend', e => {
                            if (Math.abs(distance) > binding.value.max) {
                                binding.value.handler();
                            }
                            el.style.transition = 'all 0.3s';
                            switch (binding.value.type) {
                                case 'top':
                                    el.style.transform = 'translateY(0px)';
                                    start = 0, distance = 0, end = 0;
                                    break;
                                default:
                                    break;
                            }
                        })
                    }
                }
            },
            /*
            * 过滤器
            * */
            filters: {
                priceFormat: function (value) {
                    return '￥' + value;
                },
                timeStampFormat: function (value) {
                    let time = new Date(value);
                    let year = time.getFullYear();
                    let month = time.getMonth() + 1;
                    let date = time.getDate();
                    return year + "-" + month + "-" + date;
                }
            }
        })
    }
}