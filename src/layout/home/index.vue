<template>
  <el-row :style="`background: url('${background}') no-repeat fixed center;height: 100vh;`">
    
  </el-row>
</template>

<script>
import { bing_background } from "@/api/public"

export default {
  data() {
    return {
      // 首页时间
      date: '',
      // 首页桌面状态
      desktop_status: true,
      dialogVisible: false,
      // 首页背景
      background: '',
    }
  },
  watch: {
    $route: "updateRouter"
  },
  methods: {
    // 更新路由
    updateRouter() {
      // 如果回到首页, 强制初始化状态
      if (this.$route.path == '/') {
        this.dialogVisible = false
        this.desktop_status = true 
      } else {
        this.dialogVisible = true
        this.desktop_status = false
      }
    },
  },
  created() {
    // 必应每日壁纸
    bing_background().then(res => {
      this.background = 'https://www.bing.com' + res.images[0].url
    })
    // 更新路由
    this.updateRouter()
  },
}
</script>