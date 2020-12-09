import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 路由 --->
import router from "@/router"
// - 拦截器
import "@/router/router_intercept.js"
// <--- end


// UI库 --->
import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element, {
  size:
    // Cookies.get('size') ||
    "mini" // set element-ui default size
})
// <--- end


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
