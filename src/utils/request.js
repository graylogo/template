import axios from 'axios'
// import Vue from 'vue'
// Vue.prototype.axios = axios
axios.defaults.withCredentials = true
// import { Message, MessageBox } from 'element-ui'
import { Message } from 'element-ui'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API // api 的 base_url
  // timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/json'
    }
    if (config.responseType) {
      config.headers['responseType'] = config.responseType
    }
    // if (store.getters.token) {
    //   // config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  error => {
    // Do something with request error
    // console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    // 前段文件下载预请求放行
    if (typeof response.data === 'string') {
      return response.data
    }
    // code为非0是抛错
    const res = response.data

    if (res.code && res.code !== 0) {
      Message({
        message: res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject(res.message)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
