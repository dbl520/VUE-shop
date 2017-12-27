import mock from './mock'

export default {
    api: process.env.NODE_ENV === 'development' ? (mock.status ? 'http://127.0.0.1/mock' : 'http://server.daniel.natapp1.cc') : 'http://server.daniel.natapp1.cc',
    wx: {
        appid: 'wx010795ebc4bcc074',
        redirect_uri: 'http://weixin.daniel.natapp1.cc/wxlogin',
        scope: 'snsapi_userinfo'
    }
}