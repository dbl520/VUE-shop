import axios from 'axios'
import qs from 'qs'
import conf from '../config'
import MIndicator from '../components/packages/MIndicator'

/*
* axios请求配置信息
* */
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = conf.api;

/*
* axios拦截器
* */
axios.interceptors.request.use((config) => {
    /*
    * http请求前
    * */
    //判断是否存在token，如果存在的话，则每个http header都加上token
    if (localStorage.getItem('token')) {
        config.headers.Token = localStorage.getItem('token');
    }
    //添加网络指示器,mock数据不会取消indicator
    //MIndicator.open();
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((res) => {
    /*
    * http响应后
    * */
    //判断请求头是否有token，如果有则刷新本地token
    if (res.headers.Token) {
        localStorage.setItem('token', res.headers.Token);
    }
    //如果服务器验证token失败，清空本地token
    if (res.data.success === false && res.data.error_code === 2000) {
        localStorage.clear();
    }
    //取消网络指示器
    //MIndicator.close();
    return Promise.resolve(res.data)
}, (error) => {
    return Promise.reject(error);
});


/*
* 发送http请求
* */
export function query(config) {

    return new Promise((resolve, reject) => {
        axios[config.type ? config.type : 'post'](config.url, config.params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}