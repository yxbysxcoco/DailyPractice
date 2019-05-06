module.exports = {
  title: "DailyPractice",
  description: "日常学习",
  base: "/DailyPractice/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [{
        text: "Home",
        link: "/"
      },
      {
        text: "Blog",
        link: "http://yxbysxcoco.github.io/"
      }
    ],
    sidebar: {
      "/log/": [{
        title: "DailyPractice",
        collapsable: false,
        children: [{
            title: "2019-5-6",
            path: "/log/2019-5-6"
          },
          {
            title: "2019-5-7",
            path: "/log/2019-5-7"
          },
        ]
      }],
    }
  }
};