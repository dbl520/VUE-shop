import Vue from 'vue';


//引入vue子类
const ToastConstructor = Vue.extend(require('./MToast.vue'));

//创建toast实例容器
let toastPool = [];


//复用toast实例
let getAnInstance = () => {
    if (toastPool.length > 0) {
        let instance = toastPool[0];
        toastPool.splice(0, 1);
        return instance;
    }
    return new ToastConstructor({
        el: document.createElement('div')
    });
};

//将使用过的toast实例放入栈中
let returnAnInstance = instance => {
    if (instance) {
        toastPool.push(instance);
    }
};

//移除挂载toast的dom节点
let removeDom = event => {
    if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
    }
};


//给vue实例添加动画结束监听事件，并移除dom节点
ToastConstructor.prototype.close = function () {
    this.visible = false;
    this.$el.addEventListener('transitionend', removeDom);
    returnAnInstance(this);
};


let MToast = (options = {}) => {
    let duration = options.duration || 2000;    
    let instance = getAnInstance();
    clearTimeout(instance.timer);
    instance.message = typeof options === 'string' ? options : options.message;
    document.body.appendChild(instance.$el);
    Vue.nextTick(function () {
        instance.visible = true;
        instance.timer = setTimeout(function () {
            instance.close();
        }, duration);
    });
    return instance;
};

export default MToast;