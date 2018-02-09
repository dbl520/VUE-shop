// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuex from 'vuex'

Vue.use(Vuex)
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
// 解决移动端300s延迟
import fastclick from 'fastclick'
fastclick.attach(document.body) //解决移动端点击事件200ms延迟
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
    // 此处是funbug开始

function formatComponentName(vm) {
    if (vm.$root === vm) return 'root';

    var name = vm._isVue ? (vm.$options && vm.$options.name) || (vm.$options && vm.$options._componentTag) : vm.name;
    return (name ? 'component <' + name + '>' : 'anonymous component') + (vm._isVue && vm.$options && vm.$options.__file ? ' at ' + (vm.$options && vm.$options.__file) : '');

}

Vue.config.errorHandler = function(err, vm, info) {
    var componentName = formatComponentName(vm);
    var propsData = vm.$options && vm.$options.propsData;

    fundebug.notifyError(err, {
        metaData: {
            componentName: componentName,
            propsData: propsData,
            info: info
        }
    });
};
// 此处是funbug结束