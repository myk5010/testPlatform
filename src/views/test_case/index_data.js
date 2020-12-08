// table表格, 表头字段
export const table_header = [
  {
    key: 'id',
    label: 'ID',
    width: 80,
    prop: 'id',
  },
  {
    key: 'module',
    label: '模块',
    prop: 'module',
    width: 80,
  },
  {
    key: 'priority',
    label: '优先级',
    prop: 'priority',
    width: 80,
  },
  {
    key: 'title',
    label: '用例名称',
    prop: 'title'
  },
  {
    key: 'precondition',
    label: '前置条件',
    prop: 'precondition'
  },
  {
    key: 'comment',
    label: '备注',
    prop: 'comment'
  },
]

// table表格, 表头显示的字段
export const show_header_fields = [
  'id',
  'title',
  'module',
  'priority',
  'precondition',
  'comment',
]

// 初始化测试用例表单
export const initial_post_form = {
  title: '',
  priority: '',
  module: '',
  precondition: '',
  comment: '',
  test_steps: [{
    expected: '',
    content: ''
  },]
}