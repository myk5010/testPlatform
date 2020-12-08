import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

let modulesRoutes = []
const files = require.context("./modules", false, /\.js$/i)
files.keys().map(key => {
  const fileName = key
    .split("/")
    .pop()
    .split(".")[0]
  if (fileName !== "index") {
    modulesRoutes.push(...files(key).default)
  }
})

export default new Router({
  mode: "history",
  routes: [
    // 默认页
    {
      path: "/",
      component: () => import("@/layout/home/index.vue"),
      meta: { title: '测试用例管理系统' }
      // redirect: '/home',
      // component: () => import("@/layout/layout_lab/blank.vue"),
      // children: [
      //   {
      //     path: "/default",
      //     components: require("@/views/home/default"),
      //     meta: { title: '默认页' }
      //   },
      // ]
    },
    ...modulesRoutes,
    // 404 page must be placed at the end !!!
    {
      path: "*",
      component: () => import("@/views/404.vue"),
      hidden: true
    }
  ],
})
