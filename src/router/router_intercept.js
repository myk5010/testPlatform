/**
 * 路由拦截器
 */

import router from '@/router'
// import store from '@/store'
// import { getToken } from '@/utils/cookie'
// 顶部加载动画
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置NProgress进度条选项 —— 动画效果
NProgress.configure({ ease: 'ease', speed: 500 })
// no redirect whitelist
const whiteList = ['/login']

// 全局路由拦截-进入页面前执行
router.beforeEach(async (to, from, next) => {
  // NProgress开始进度条
  NProgress.start()

  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // let hasToken = getToken()

  // if (hasToken) {
  //   if (Object.prototype.hasOwnProperty.call(store.getters['user/userInfo'],'name')) {
  //     next()
  //   } else {
  //     try {
  //       // get user info
  //       const userInfo = await store.dispatch('user/getUser')
  //       // update user info
  //       await store.dispatch('user/userPermission', userInfo)
  //       next()
  //     } catch (error) {
  //       // remove token and go to login page to re-login
  //       await store.dispatch('user/resetToken')
  //       next(`/login?redirect=${to.path}`)
  //       NProgress.done()
  //     }
  //   }
  // } else {
  //   /* has no token*/
  //   if (whiteList.indexOf(to.path) !== -1) {
  // in the free login whitelist, go directly
  next()
  // } else {
  //   // other pages that do not have permission to access are redirected to the login page.
  //   next(`/login?redirect=${to.path}`)
  NProgress.done()
  // }
  // }
})

// 全局后置钩子-常用于结束动画等
// router.afterEach(transition => {
router.afterEach(() => {
  // NProgress结束进度条
  NProgress.done()
  // console.log(transition);
})