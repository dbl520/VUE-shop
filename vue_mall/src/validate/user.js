import {Validate} from './index.js'

/*
* isSbUser (输错手机号码那种)
* @params data
* @return none
* */
export class User extends Validate {
    rule = {
        account: 'require|phone',
        password: 'require'
    }
    message = {
        'account.require': '手机号必填',
        'account.phone': '手机号码格式不正确',
        'password.require': '密码必填'
    }
}