<template>
  <div id="app">
    <transition name="el-zoom-in-bottom">
      <router-view />
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
}
/* 拖动条样式重写 */
::-webkit-scrollbar { 
  width: 8px; 
  height: 8px; 
  background:#b9b9b9; 
} 
::-webkit-scrollbar-button { 
  display: none; 
} 
::-webkit-scrollbar-thumb { 
  border-radius: 10px; 
  background: #409eff; 
} 
::-webkit-scrollbar-track { 
  border-radius: 10px; 
  background: #b9b9b9; 
} 
/* 全局重写table样式 */
.bg-content {
  .el-table {
    background-color: #0000000d;
    color: #fff;

    th, tr, td {
      background-color: #a175750d;
    }

    :hover>td { 
      // background-color: #ffffff44 !important;
      background-color: #ffffff44;
    }

    i {
      color: #fff;
    }
  }
}
</style>
