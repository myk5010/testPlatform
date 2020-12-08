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

<style>
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
</style>
