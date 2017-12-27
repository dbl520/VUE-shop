import {query} from './axios'

export default {
    wxSignature(val) {
        return query({
            type: 'post',
            url: '/api/wx/getConfig',
            params: val
        })
    },
    regist(val) {
        return query({
            type: 'post',
            url: '/api/user/regist',
            params: val
        })
    },
    login(val) {
        return query({
            type: 'post',
            url: '/api/user/login',
            params: val
        })
    },
    userInfo(val) {
        return query({
            type: 'post',
            url: '/api/user/userInfo',
            params: val
        })
    },
    userEdit(val) {
        return query({
            type: 'post',
            url: '/api/user/edit',
            params: val
        })
    }
}