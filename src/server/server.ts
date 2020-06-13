import Axios from 'axios';

const axios = Axios.create({
    timeout: 300 * 1000, // 请求超时设置
    headers: {
        'Content-Type': 'application/json'
    }
}); // 创建一个自定义的axios实例

// 进行请求前的拦截处理
axios.interceptors.request.use(config => {

    return config
}, error => {
    // 对请求错误的处理
    Promise.reject(error)
})

// 进行响应前的拦截处理
axios.interceptors.response.use(response => {

    return response
}, error => {
    // 对响应错误的处理
    Promise.reject(error)
})

export default axios;
