# EasyMall powered by vuejs width a series of vuejs plugins included vuex, vue-router, aixos, mockjs

> vuex 单页面数据状态管理器

> vue-router 单页面路由管理

> axios http请求插件

> mockjs 强烈配合相关api借口文档实现前端独立于后台快速开发

## 基于thinkphp5的后台api
EasyMallServer后端代码 [EasyMall](https://gitee.com/Daniel_Deng_Haibiao/EasyMallServer)

## how to use 

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 目录结构

初始的目录结构如下：

~~~
www  WEB部署目录（或者子目录）
├─build                 应用webpack打包配置
├─config                应用webpack打包配置参数
├─src                   应用开发代码
│  ├─components         自定义开发的可重复使用的UI组件
│  ├─config             app开发配置信息
│  ├─plugin             自定义vuejs插件
│  ├─router             路由配置信息
│  ├─mock               基于mockjs模拟后台数据返回
│  ├─service            http以及涉及原生回调api
│  ├─static             开发css icon/例子中使用了阿里的iconfont 
│  ├─view               页面组件 
│  ├─vuex               全局状态管理
│  ├─app.vue            vue根组件
│  ├─common.js          公共函数库
│  └─main.js            单页面入口文件
├─static                静态文件夹


## 欢迎一起交流