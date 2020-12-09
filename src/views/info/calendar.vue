<template>
  <el-row>
    <el-col :span="12">
      <el-calendar v-model="calendar_value"></el-calendar>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      calendar_value: new Date(),
    }
  }
}
</script>