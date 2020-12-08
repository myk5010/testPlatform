export default [
  {
    path: "/testCase",
    components: require("@/layout/home/index"),
    children: [
      {
        path: "index",
        components: require("@/views/test_case/index"),
        meta: { title: "测试用例" }
      },
    ]
  }
]