module.exports = {
  title: "zyw",
  description: "一本程序员的圣经",
  base: "/yxbysxcoco/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: "Last Updated", // 文档更新时间：每个文件git最后提交的时间
    nav: [
      {
        text: "主页",
        link: "/"
      },
      {
        text: "计算机基础",
        link: "/Basic/overview"
      },
      {
        text: "语言",
        items: [
          {
            text: "Html",
            link: "/Html/overview"
          },
          {
            text: "Css",
            link: "/Css/overview"
          },
          {
            text: "JavaScript",
            link: "/JavaScript/overview"
          }
        ]
      },
      {
        text: "后端",
        items: [
          {
            text: "C#",
            link: "/C#/overview"
          },
          {
            text: "NodeJs",
            link: "/NodeJs/overview"
          }
        ]
      },
      {
        text: "服务端",
        items: [
          {
            text: "Nginx",
            link: "/Nginx/overview"
          }
        ]
      },
      {
        text: "协同",
        items: [
          {
            text: "Git",
            link: "/Git/overview"
          },
          {
            text: "Svn",
            link: "/Svn/overview"
          }
        ]
      },
      {
        text: "Blog",
        link: "http://yxbysxcoco.github.io/"
      }
    ],
    sidebar: {
      "/JavaScript/": [
        {
          title: "JavaScript",
          collapsable: false,
          children: [
            {
              title: "概述",
              path: "/JavaScript/overview"
            },
            {
              title: "基础",
              path: "/JavaScript/basis"
            },
            {
              title: "变量&作用域&内存",
              path: "/JavaScript/scope&memory"
            },
            {
              title: "引用类型",
              path: "/JavaScript/reference"
            },
            {
              title: "面向对象",
              path: "/JavaScript/object"
            },
            {
              title: "函数表达式",
              path: "/JavaScript/function"
            },
            {
              title: "BOM",
              path: "/JavaScript/bom"
            },
            {
              title: "客户端检测",
              path: "/JavaScript/client"
            },
            {
              title: "DOM",
              path: "/JavaScript/dom"
            }
          ]
        }
      ],
      "/Html/": [
        {
          title: "Html",
          collapsable: false,
          children: []
        }
      ],
      "/DataStruct/": [
        {
          title: "DataStruct",
          collapsable: false,
          children: []
        }
      ]
    }
  }
};
