import { defineConfig } from "vitepress";

export default defineConfig({
  vite: {
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
  },
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: "local",
    },
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "DipiOne产品手册",
      description: "A VitePress Site",
      themeConfig: {
        // 导航栏
        nav: [
          { text: "首页", link: "/" },
          { text: "文档说明", link: "/DipuOneProductManual" },
        ],
        // 侧边栏
        sidebar: [
          // 产品介绍
          {
            text: "产品介绍",
            collapsed: false,
            items: [
              {
                text: "产品概述",
                link: "/DipuOneProductManual",
              },
            ],
          },
          // 管理平台
          {
            text: "管理平台",
            collapsed: false,
            items: [
              {
                text: "项目列表",
                link: "/ManagementPlatform/projectlist",
              },
              {
                text: "数据看板",
                collapsed: true,
                items: [
                  {
                    text: "数据看板",
                    link: "/ManagementPlatform/DataBoard/databoard",
                  },
                ],
              },
              {
                text: "数据分析",
                collapsed: true,
                items: [
                  {
                    text: "数据集",
                    link: "/ManagementPlatform/DataAnalysis/dataset",
                  },
                  {
                    text: "报表设计",
                    link: "/ManagementPlatform/DataAnalysis/reportdesign",
                  },
                ],
              },
              {
                text: "开放数据",
                collapsed: true,
                items: [
                  {
                    text: "数据服务",
                    link: "/ManagementPlatform/OpenData/dataservice",
                  },
                ],
              },
              {
                text: "组态设计",
                collapsed: true,
                items: [
                  {
                    text: "空间管理",
                    link: "/ManagementPlatform/ConfigurationDesign/spacemanagement",
                  },
                  {
                    text: "设备管理",
                    link: "/ManagementPlatform/ConfigurationDesign/devicemanagement",
                  },
                  {
                    text: "连接管理",
                    link: "/ManagementPlatform/ConfigurationDesign/connectionmanagement",
                  },
                ],
              },
              {
                text: "系统设置",
                collapsed: true,
                items: [
                  {
                    text: "国际化",
                    link: "/ManagementPlatform/SystemConfiguration/internationalization",
                  },
                  {
                    text: "菜单管理",
                    link: "/ManagementPlatform/SystemConfiguration/menumanagement",
                  },
                  {
                    text: "权限管理",
                    link: "/ManagementPlatform/SystemConfiguration/permissionmanagement",
                  },
                  {
                    text: "任务管理",
                    link: "/ManagementPlatform/SystemConfiguration/taskmanagement",
                  },
                ],
              },
            ],
          },
          // 画面组态
          {
            text: "画面组态",
            collapsed: true,
            items: [
              {
                text: "控件",
                collapsed: true,
                items: [
                  {
                    text: "报警",
                    collapsed: true,
                    items: [
                      {
                        text: "报警列表",
                        link: "/ScreenConfiguration/Controls/Alarms/alarmlist",
                      },
                    ],
                  },
                  {
                    text: "按钮",
                    collapsed: true,
                    items: [
                      {
                        text: "按钮",
                        link: "/ScreenConfiguration/Controls/Buttons/button",
                      },
                      {
                        text: "复选框",
                        link: "/ScreenConfiguration/Controls/Buttons/checkbox",
                      },
                      {
                        text: "单选按钮",
                        link: "/ScreenConfiguration/Controls/Buttons/radiobutton",
                      },
                      {
                        text: "状态按钮",
                        link: "/ScreenConfiguration/Controls/Buttons/statusbutton",
                      },
                      {
                        text: "导航菜单",
                        link: "/ScreenConfiguration/Controls/Buttons/navigationmenu",
                      },
                    ],
                  },
                  {
                    text: "表格",
                    collapsed: true,
                    items: [
                      {
                        text: "变量列表",
                        link: "/ScreenConfiguration/Controls/Charts/variablelist",
                      },
                      {
                        text: "历史检索",
                        link: "/ScreenConfiguration/Controls/Charts/historicalretrieval",
                      },
                    ],
                  },
                  {
                    text: "显示",
                    collapsed: true,
                    items: [
                      {
                        text: "文本标签",
                        link: "/ScreenConfiguration/Controls/Display/textlabel",
                      },
                      {
                        text: "值显示",
                        link: "/ScreenConfiguration/Controls/Display/valuedisplay",
                      },
                      {
                        text: "画面容器",
                        link: "/ScreenConfiguration/Controls/Display/pagecontainer",
                      },
                      {
                        text: "模态框",
                        link: "/ScreenConfiguration/Controls/Display/modal",
                      },
                      {
                        text: "内嵌网页",
                        link: "/ScreenConfiguration/Controls/Display/iframe",
                      },
                    ],
                  },
                  {
                    text: "绘图",
                    collapsed: true,
                    items: [
                      {
                        text: "绘图介绍",
                        link: "/ScreenConfiguration/Controls/Drawing/drawingintroduction",
                      },
                      {
                        text: "折线",
                        link: "/ScreenConfiguration/Controls/Drawing/zigzagline",
                      },
                      {
                        text: "多边形",
                        link: "/ScreenConfiguration/Controls/Drawing/polygon",
                      },
                      {
                        text: "管道",
                        link: "/ScreenConfiguration/Controls/Drawing/pipeline",
                      },
                    ],
                  },
                  {
                    text: "事件",
                    collapsed: true,
                    items: [
                      {
                        text: "事件列表",
                        link: "/ScreenConfiguration/Controls/Events/eventlist",
                      },
                    ],
                  },
                  {
                    text: "输入",
                    collapsed: true,
                    items: [
                      {
                        text: "下拉框",
                        link: "/ScreenConfiguration/Controls/Input/dropdownbox",
                      },
                      {
                        text: "文本输入框",
                        link: "/ScreenConfiguration/Controls/Input/textinputbox",
                      },
                      {
                        text: "滑动条",
                        link: "/ScreenConfiguration/Controls/Input/slider",
                      },
                      {
                        text: "日历",
                        link: "/ScreenConfiguration/Controls/Input/calendar",
                      },
                      {
                        text: "数字输入框",
                        link: "/ScreenConfiguration/Controls/Input/digitalinputbox",
                      },
                    ],
                  },
                  {
                    text: "图表",
                    collapsed: true,
                    items: [
                      {
                        text: "实时趋势",
                        link: "/ScreenConfiguration/Controls/Tables/realtimetrend",
                      },
                      {
                        text: "历史趋势",
                        link: "/ScreenConfiguration/Controls/Tables/historicaltrend",
                      },
                      {
                        text: "自定义曲线",
                        link: "/ScreenConfiguration/Controls/Tables/customcurve",
                      },
                      {
                        text: "仪表盘",
                        link: "/ScreenConfiguration/Controls/Tables/dashboard",
                      },
                    ],
                  },
                  {
                    text: "形状",
                    collapsed: true,
                    items: [
                      {
                        text: "形状介绍",
                        link: "/ScreenConfiguration/Controls/Shapes/shapeintroduction",
                      },
                      {
                        text: "椭圆",
                        link: "/ScreenConfiguration/Controls/Shapes/ellipse",
                      },
                      {
                        text: "矩形",
                        link: "/ScreenConfiguration/Controls/Shapes/rectangle",
                      },
                      {
                        text: "圆角矩形",
                        link: "/ScreenConfiguration/Controls/Shapes/roundrectangle",
                      },
                      {
                        text: "直线",
                        link: "/ScreenConfiguration/Controls/Shapes/straightline",
                      },
                      {
                        text: "水平线",
                        link: "/ScreenConfiguration/Controls/Shapes/horizontalline",
                      },
                      {
                        text: "垂直线",
                        link: "/ScreenConfiguration/Controls/Shapes/verticalline",
                      },
                    ],
                  },
                  {
                    text: "其他",
                    collapsed: true,
                    items: [
                      {
                        text: "历史报表",
                        link: "/ScreenConfiguration/Controls/Others/historicalreport",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    },
    en: {
      label: "English",
      lang: "en-US",
      title: "DipiOne Product Manual",
      description: "A VitePress Site",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Documentation", link: "/en/DipuOneProductManual" },
        ],
        sidebar: [
          {
            text: "Product Introduction",
            items: [
              {
                text: "Product Overview",
                link: "/en/DipuOneProductManual",
              },
            ],
          },
          {
            text: "Management Platform",
            items: [
              {
                text: "Data Dashboard",
                items: [
                  {
                    text: "Data Dashboard",
                    link: "/en/ManagementPlatform/DataBoard/databoard",
                  },
                ],
              },
              {
                text: "Configuration Design",
                items: [
                  {
                    text: "Space Management",
                    link: "/en/ManagementPlatform/ConfigurationDesign/spacemanagement",
                  },
                ],
              },
            ],
          },
        ],
      },
    },
  },
});
