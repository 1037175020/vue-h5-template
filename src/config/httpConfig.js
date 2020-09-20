import axios from 'axios'
import baseURL from './baseUrl'
import localStorage from '../plugins/localStorage'
import router from '../route/index'
import {
    Message
} from 'element-ui'
const http = {}

var instance = axios.create({
    timeout: 60000,
    baseURL,
    validateStatus(status) {
        switch (status) {
            case 400:
                Message.error('请求出错')
                break
            case 401:
                Message.warning({
                    message: '授权失败，请重新登录'
                })
                setTimeout(() => {
                    window.location.reload()
                }, 1000)
                return
            case 403:
                Message.warning({
                    message: '拒绝访问'
                })
                break
            case 404:
                Message.warning({
                    message: '请求错误,未找到该资源'
                })
                break
            case 500:
                Message.warning({
                    message: '服务端错误'
                })
                break
        }
        return status >= 200 && status < 300
    }
})

// // 添加请求拦截器
instance.interceptors.request.use(
    function (config) {
        // 请求头添加token
        if (localStorage("userInfo") && localStorage("userInfo").token) {
            config.headers.Authorization = localStorage("userInfo").token
        }
        return config
    },
    function (error) {
        return Promise.reject(error)
    }
)

// 响应拦截器即异常处理
instance.interceptors.response.use(
    response => {
        if (response.data.status == '405'){
            router.replace({
                path: '/login'
            })
        }
        return response
    },
    err => {
        if (err && err.response) {} else {
            err.message = '连接服务器失败'
        }
        // Message.error({
        //     message: err.message
        // })
        return Promise.reject(err.response)
    }
)

//对象序列化
function serialize(json) {
    let str = '';
    Object.keys(json).forEach((v, i) => {
        str += v + "=" + json[v] + "&"
    })
    str = str.slice(0, str.length - 1);
    return str;
}

http.get = function (url, options) {
    let loading
    if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading')
        loading.style.display = 'block'
    }
    return new Promise((resolve, reject) => {
        instance
            .get(url, options)
            .then(response => {
                if (!options || options.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                if (response.status == '200' || response.status == '1') {
                    resolve(response)

                } else {
                    Message.error({
                        message: response.msg
                    })
                    reject(response.msg)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}

http.post = function (url, data, options) {
    let loading
    if (!options || options.isShowLoading !== false) {
        loading = document.getElementById('ajaxLoading')
        loading.style.display = 'block'
    }
    return new Promise((resolve, reject) => {
        instance.post(url, serialize(data), options)
            .then(response => {
                if (!options || options.isShowLoading !== false) {
                    loading = document.getElementById('ajaxLoading')
                    loading.style.display = 'none'
                }
                // console.log(response.status)
                if (response.status == '200' || response.status == '1') {
                    if (response.data) {
                        resolve(response.data)
                    } else if (response.rows) {
                        resolve(response.rows)
                    } else {
                        resolve(response)
                    }
                } else {
                    Message.error({
                        message: response.msg
                    })
                    reject(response.message)
                }
            })
            .catch(e => {
                console.log(e)
            })
    })
}
export default http