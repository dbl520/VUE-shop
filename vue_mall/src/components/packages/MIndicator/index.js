import Vue from 'vue';

const MIndicator = Vue.extend(require('./src/MIndicator.vue'));
let instance;

export default {
    open() {
        if (!instance) {
            instance = new MIndicator({
                el: document.createElement('div')
            });
        }
        if (instance.visible) return;
        document.body.appendChild(instance.$el);

        Vue.nextTick(() => {
            instance.visible = true;
        });
    },

    close() {
        if (instance) {
            instance.visible = false;
        }
    }
}