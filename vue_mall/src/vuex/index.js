
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import userModule from './user/module'


export default new Vuex.Store({
    strict: true,
    modules: {
        user: userModule
    }
})
