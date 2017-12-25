import * as types from './mutation-types'

export default {
    /*
    * 同步用户登陆状态
    * */
    [types.UPDATE_AUTH](state, o) {
        state.isAuth = o;
    },
    /*
    * 初始化用户数据
    * */
    [types.INIT_USER_INFO](state, o) {
        state.userInfo.nickName = o.nickName;
        state.userInfo.realName = o.realName;
        state.userInfo.avatar = o.userAvatar;
    },
    /*
    * 修改用户子项
    * */
    [types.UPDATE_USER_INFO](state, o) {
        state.userInfo[o.name] = o.value;
    }
}