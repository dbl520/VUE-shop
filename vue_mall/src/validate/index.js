export class Validate {
    constructor(val) {
        this.validatekData = val
    }

    /*
    * 用于递归数组
    * */
    limitMessage = [];

    /*
    * 子类属性检查
    * @params none
    * @return boolean
    * */
    _checkProperty() {
        if (this.rule && typeof this.rule === 'object') {
            return true;
        }
        throw '类rule定义错误';
    }

    /*
    * 遍历待检测的对象
    * @params none
    * @return none
    * */
    check() {
        let ruleInfo = [];
        let error = [];
        if (this._checkProperty()) {
            for (let key in this.rule) {
                let arrayLimit = this.rule[key].split('|');
                ruleInfo.push(this._limitIterator(key, this.validatekData[key], arrayLimit));
            }
        }
        error = this.getErrorMessage(ruleInfo);
        return error.length > 0 ? error : true;
    }

    /*
    * 遍历限制条件
    * @params checkName arrayLimit
    * @return array
    * */
    _limitIterator(checkName, checkValue, arrayLimit) {
        let limitInfo = [];
        arrayLimit.forEach((item, key, array) => {
            switch (item) {
                case 'require':
                    limitInfo.push({[checkName + '.' + item]: this._require(checkName)});
                    break;
                case 'phone':
                    limitInfo.push({[checkName + '.' + item]: this._phone(checkValue)});
                    break;
                default:
                    break;
            }
        })
        return limitInfo;
    }

    /*
    * 递归出一维数组
    * @params MulArray
    * @return array
    * */
    recursionArray(MulArray) {
        MulArray.forEach((item, key, array) => {
            if (Array.isArray(item)) {
                this.recursionArray(item);
            } else {
                this.limitMessage.push(item);
            }
        })
        return this.limitMessage;
    }

    /*
    * 输出错误信息
    * @params ruleInfo
    * return boolean
    * */
    getErrorMessage(val) {
        let error = [];
        this.recursionArray(val).forEach((item, index, array) => {
            for (let key in this.message) {
                if (item[key] === false) {
                    error.push(this.message[key])
                }
            }
        })
        return error;
    }

    /*
    * 校验规则
    * @params
    * @return
    * */

    //是否必须
    _require(checkName) {
        if (this.validatekData.hasOwnProperty(checkName)) return true;
        return false;
    }

    //值是否是手机号
    _phone(checkValue) {
        const phoneRegExp = /^1[3|4|5|8][0-9]\d{4,8}$/;
        if (phoneRegExp.test(checkValue)) return true;
        return false;
    }
}