import {customizedReturn} from '../common'

export default {
    regist() {
        return customizedReturn(true, {
            token: 'token'
        }, '用户注册成功', 10000)
    },
    login() {
        return customizedReturn(true, {
            token: 'token'
        }, '登录成功', 10000)
    },
    userInfo() {
        return customizedReturn(true, {
            nickName: 'Neho',
            realName: '邓海报',
            userAvatar: 'http://himg.bdimg.com/sys/portrait/item/6e9c436f6c614f6e6c79ef4d'
        }, '获取用户信息成功', 10000)
    },
    userEdit() {
        return customizedReturn(true, null, '修改用户信息成功', 10000)
    }
}