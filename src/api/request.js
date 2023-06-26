import axios from "axios";
import config from "../config/index.js"
import {ElMessage} from "element-plus";

const NETWORK_ERROR = '网络请求异常，请稍后重试。。。'

//创建一个axios实例对象
const service = axios.create({
    baseURL: config.baseApi
})

//在请求之前做一些事情
service.interceptors.request.use((req) => {
    return req;
})

//在请求之后做一些事情
service.interceptors.response.use((res) => {
    const {code, data, msg} = res.data;
    if (code === 200) {
        return data
    } else {
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})

//封装核心函数
function request(options) {
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data
    }
    //对mock的处理
    let isMock = config.mock
    if (typeof options.mock !== 'undefined') {
        isMock = options.mock
    }
    //对线上环境做处理
    if (config.env === 'prod') {
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}

export default request;
