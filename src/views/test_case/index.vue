<template>
  <el-row class="bg-content">
    <el-col :span="24" style="text-align: right;line-height: 60px;">
      <el-button type="info" @click="addCase">新建用例</el-button>
    </el-col>
    <el-col :span="24">
      <el-table
        :data="tableData"
        v-loading='loading_case'
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        ref="tableList"
        :header-cell-style="{background:'#0000000d'}"
        style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row v-for="(item, index) in scope.row.test_steps" :key='index'>
              <el-col :span="1">步骤: {{ item.number }}</el-col>
              <el-col :span="8">描述: {{ item.content }}</el-col>
              <el-col :span="8">预期结果: {{ item.expected }}</el-col>
            </el-row>
          </template>
        </el-table-column>
        <template v-for="item in table_header">
          <el-table-column
            show-overflow-tooltip
            align="center"
            :width="item['width']"
            :key="item['key']"
            :label="item['label']"
            :prop="item['prop']"
            :column-key="item['columnKey']"
            :filters="item['filters']"
            v-if="show_header_fields.includes(item['key'])"
          ></el-table-column>
        </template>
        <el-table-column
          label="操作"
          prop="status"
          align="center"
          width="100">
          <template slot-scope="scope">
            <el-button type="text" @click="deleteCase(scope.row.id)">删除</el-button>
            <el-button type="text" @click="editCase(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-col>
    <case-content :visible.sync="dialogVisible" :post_form="post_form" ref="ref_content_case" :title="content_title" @fetchData="fetchData"></case-content>
  </el-row>
</template>

<script>
import { table_header, show_header_fields, initial_post_form } from "./index_data"
import caseContent from "./content"
import { getTestCase, delTestCase } from "@/api/test_case"

export default {
  components: {
    caseContent,
  },
  data() {
    return {
      table_header,
      show_header_fields,
      tableData: [],
      dialogVisible: false,
      expand_all: false,
      post_form: JSON.parse(JSON.stringify(initial_post_form)),
      loading_case: false,
      content_title: '新建用例'
    }
  },
  methods: {
    // 获取初始数据
    fetchData() {
      this.loading_case = true
      getTestCase().then(res => {
        this.loading_case = false
        this.tableData = res.data
      }, err => {
        this.loading_case = false
      })
    },
    // 编辑测试用例
    editCase(row) {
      this.post_form = row
      this.content_title = '编辑用例'
      this.dialogVisible = true
    },
    // 新增测试用例
    addCase() {
      this.content_title = '新建用例'
      this.post_form = JSON.parse(JSON.stringify(initial_post_form))
      this.$nextTick(()=>{
        this.$refs['ref_content_case'].clearFormValidate()
      })
      this.dialogVisible = true
    },
    // 删除测试用例
    deleteCase(id) {
      delTestCase({'case_id': id}).then(res => {
        console.log(res)
      })
    },
  },
  mounted() {
    // this.fetchData()
  }
}
</script>

