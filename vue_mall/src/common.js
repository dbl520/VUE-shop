import conf from './config'

/*
* 定义mock数据格式
* */
export function customizedReturn(success, data, msg, code) {
    return {
        success: success,
        data: data,
        msg: msg,
        code: code
    }
}

/*
* 用户是否登陆
* */
export function isAuth() {
    if (localStorage.getItem('token')) {
        return true
    }
    return false
}

/*
* 转跳微信授权页面
* */

export function wxLogin() {
    window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + conf.wx.appid + "&redirect_uri=" + encodeURIComponent(conf.wx.redirect_uri) + "&response_type=code&scope=" + conf.wx.scope + "&state=STATE#wechat_redirect"
}