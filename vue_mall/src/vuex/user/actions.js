import * as types from './mutation-types'

export default {
    /*
    * action和mutation的区别在于action中可以包括异步操作
    * */
    updateAuth({commit}, o) {
        commit(types.UPDATE_AUTH, o);
    },
    initUserInfo({commit}, o) {
        commit(types.INIT_USER_INFO, o);
    },
    updateUserInfo({commit}, o) {
        commit(types.UPDATE_USER_INFO, o);
    }
}