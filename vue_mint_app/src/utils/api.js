import axios from "axios";
import { MessageBox, Indicator } from "mint-ui";
axios.defaults.timeout = 50000;
axios.defaults.baseURL = "";
//http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//     config.data = JSON.stringify(config.data);
//     config.headers = {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//     // if(token){
//     //   config.params = {'token':token}
//     // }
//     return config;
//   },
//   error => {
//     return Promise.reject(err);
//   }
// );

//http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if (response.data.errCode == 2) {
//       router.push({
//         path: "/login",
//         querry: { redirect: router.currentRoute.fullPath }//从哪个页面跳转
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function getHttp(url, params = {}) {
	// 创建动画mint-ui
	Indicator.open({
		text: "加载中...",
		spinnerType: "fading-circle"
	});
	return new Promise((resolve, reject) => {
		axios
			.get(url, {
				params: params
			})
			.then(response => {
				resolve(response.data);
				Indicator.close(); // // 关闭动画
			})
			.catch(err => {
				reject(err);
				Indicator.close(); // // 关闭动画

				MessageBox.alert("message", err);
			});
	});
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postHttp(url, data = {}) {
	// 创建动画mint-ui
	Indicator.open({
		text: "加载中...",
		spinnerType: "fading-circle"
	});
	return new Promise((resolve, reject) => {
		axios.post(url, data).then(
			response => {
				resolve(response.data);
				Indicator.close(); // // 关闭动画
			},
			err => {
				reject(err);
				MessageBox.alert("message", err);
				Indicator.close(); // // 关闭动画
			}
		);
	});
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

// export function patch(url, data = {}) {
//     return new Promise((resolve, reject) => {
//         axios.patch(url, data)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err)
//             })
//     })
// }

// /**
//  * 封装put请求
//  * @param url
//  * @param data
//  * @returns {Promise}
//  */

// export function put(url, data = {}) {
//     return new Promise((resolve, reject) => {
//         axios.put(url, data)
//             .then(response => {
//                 resolve(response.data);
//             }, err => {
//                 reject(err)
//             })
//     })
// }
