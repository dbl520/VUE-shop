import Mock from 'mockjs'
import mockConfig from '../config/mock'
import mockData from './data'

/*
* 用户注册
* */
Mock.mock(mockConfig.api + '/api/user/regist', (option) => {
    return mockData.regist();
});

/*
* 用户登陆
* */
Mock.mock(mockConfig.api + '/api/user/login', (option) => {
    return mockData.login();
});

/*
* 用户信息获取
* */
Mock.mock(mockConfig.api + '/api/user/userInfo', (option) => {
    return mockData.userInfo();
});

/*
* 用户信息编辑
* */
Mock.mock(mockConfig.api + '/api/user/edit', (option) => {
    return mockData.userEdit();
});