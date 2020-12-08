<template>
  <el-row :style="`background: url('${background}') no-repeat fixed center;height: 100vh;`">
    <transition>
      <div v-show="desktop_status">
        <el-col :span="24">
          <div class="date_time">{{ date }}</div>
        </el-col>
        <el-col :span="24" style="margin-top: 80px;">
          <div style="width: 600px;margin: 0 auto;">
            <div class="application" @click="handleOpen('testCase')"><img :src="require('@/assets/icon/testCase.png')" /><p>测试用例</p></div>
            <div class="application" @click="handleOpen('testPlan')"><img :src="require('@/assets/icon/testPlan.png')" /><p>测试计划</p></div>
          </div>
        </el-col>
      </div>
    </transition>
    <el-dialog
      :show-close='false'
      :close-on-press-escape="false"
      :visible.sync="dialogVisible"
      fullscreen>
      <div slot="title">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="2">
            <el-button type="info" icon="el-icon-back" circle @click="goBack"></el-button>
          </el-col>
          <el-col :span="4" style="text-align: right;">
            <!-- <el-button type="info" icon="el-icon-s-custom" circle></el-button> -->
            <!-- <el-button type="info" icon="el-icon-setting" circle @click="handleOpen('setting')"></el-button> -->
            <el-button type="info" icon="el-icon-s-home" circle @click="handleClose"></el-button>
          </el-col>
        </el-row>
      </div>
      <transition name="el-zoom-in-bottom" mode="out-in">
        <router-view />
      </transition>
    </el-dialog>
  </el-row>
</template>

<script>
import moment from "moment" 
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
      url_list: {
        'testCase' : '/testCase/index',
      },
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
    handleOpen(key) {
      this.$router.push(this.url_list[key])
    },
    handleClose() {
      this.dialogVisible = false
      this.desktop_status = true 
      this.$router.push('/')
    },
    // 跳转页面
    jump_url(key) {
      window.open(this.url_list[key])
    },
    // 后退一页
    goBack() {
      window.history.back()
    },
  },
  mounted() {
    let _this = this
    this.timer = setInterval(() => {
      _this.date = moment().format('HH:mm:ss') // 修改日期
    })
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

<style lang="scss" scoped>
.date_time {
  color: #fff;
  margin: 0 auto;
  width: 250px;
  text-align: center;
  margin-top: 150px;
  font-size: 36px;
  font-weight: inherit;
  text-shadow: 0 0 20px rgba(0,0,0,.35);
  transition: all .25s;
  line-height: 30px;
  animation-name: delayedFadeIn;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-delay: 0s;
}
// .date_time:hover {
//   font-size: 42px;
// }

.el-dialog__wrapper ::v-deep .el-dialog {
  background:rgba(124, 121, 121, 0.315);
  // background:rgba(124, 121, 121, 0.571);
}
::v-deep .el-dialog__body {
  padding: 0 20px 10px 20px;
  overflow: auto;
  height: calc(100vh - 70px);
}
// 应用块
.application {
  width: 80px;
  height: 80px;
  // background-color: #999999a8;
  background-color: #616060e0;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  float: left;
  margin: 20px;
  font-size: 12px;

  img {
    width: 36px;
    height: 36px;
    margin-top: 11px;
  }
}
.application:hover {
  cursor: pointer;
  // background-color: #ffffff80;
  background-color: #ffffffd2;
  color: #333;
}
</style>
