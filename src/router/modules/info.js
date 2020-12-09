export default [
  {
    path: "/info",
    components: require("@/layout/home/index"),
    children: [
      {
        path: "calendar",
        components: require("@/views/info/calendar"),
        meta: { title: "日历" }
      },
    ]
  }
]