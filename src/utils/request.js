import axios from "axios"
import { Message } from "element-ui"
// import store from "@/store"
// import router from "@/router"
import { getToken } from "@/utils/cookie"

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 30000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // if (store.getters["user/userToken"]) {
    // let each request carry token
    // ['X-Token'] is a custom headers key
    // please modify it according to the actual situation
    config.headers.Authorization = getToken()
    // }
    if (config.method == "get") {
      let params = {}
      for (const key in config.params) {
        if (Object.prototype.hasOwnProperty.call(config.params, key)) {
          if (config.params[key]) {
            params[key] = config.params[key]
          }
        }
      }
      config.params = params
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    // 如果后台有返回成功信息
    if (Object.prototype.hasOwnProperty.call(response.data, "message")) {
      Message({
        message: response.data.message,
        type: "success",
        showClose: true,
        duration: 3 * 1000
      })
    }
    // 减少一层data
    return response.data
  },
  error => {
    // console.dir(error)
    Message({
      type: "error",
      message: JSON.stringify(error.response.data.message),
      duration: 5000,
      showClose: true
    })
    return Promise.reject(error.response.data)
    // code:422, 后端 - Laravel表单验证专用报错
    // if (error.response.status === 422) {
    //   Message({
    //     type: "error",
    //     message: JSON.stringify(error.response.data.message),
    //     duration: 5000,
    //     showClose: true
    //   })
    //   return Promise.reject(error)
    // }
    // // 默认报错
    // let msg = error.message
    // // console.dir(error);
    // // 如果后台有返回报错信息
    // if (Object.prototype.hasOwnProperty.call(error.response.data, "message")) {
    //   msg = error.response.data.message
    // }
    // // 如果后台有返回更详细的报错信息
    // if (
    //   Object.prototype.hasOwnProperty.call(error.response.data, "meta") &&
    //   Object.prototype.hasOwnProperty.call(error.response.data.meta, "error")
    // ) {
    //   msg = error.response.data.meta.error
    // }
    // // token过期
    // if (error.response.status === 401) {
    //   msg = "登录超时, 请重新登录"
    // }
    // 为了防止重复提示报错
    // 每次提示前从vuex获取上一次提示消息内容和时间进行判断
    // const onTime = new Date().getTime()
    // if (
    //   onTime - store.getters["global/msgTime"] > 1000 ||
    //   store.getters["global/message"] != msg
    // ) {
    //   Message({
    //     message: msg,
    //     type: "error",
    //     duration: 5000,
    //     showClose: true
    //   })
    //   store.dispatch("global/saveMessage", { msg: msg, time: onTime })
    // }
    // if (error.response.status === 401) {
    //   store.dispatch("user/resetToken").then(() => {
    //     router.push("/login")
    //   })
    // }
    // return Promise.reject(error)
  }
)

export default service
