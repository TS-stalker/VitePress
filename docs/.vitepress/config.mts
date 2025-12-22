import { defineConfig } from "vitepress";

export default defineConfig({
  base: '/',
  vite: {
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
  },
  // cleanUrls: true,
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
          // Product Introduction
          {
            text: "Product Introduction",
            collapsed: false,
            items: [
              {
                text: "Product Overview",
                link: "/en/DipuOneProductManual",
              },
            ],
          },
          // Management Platform
          {
            text: "Management Platform",
            collapsed: false,
            items: [
              {
                text: "Project List",
                link: "/en/ManagementPlatform/projectlist",
              },
              {
                text: "Data Dashboard",
                collapsed: true,
                items: [
                  {
                    text: "Data Dashboard",
                    link: "/en/ManagementPlatform/DataBoard/databoard",
                  },
                ],
              },
              {
                text: "Data Analysis",
                collapsed: true,
                items: [
                  {
                    text: "Dataset",
                    link: "/en/ManagementPlatform/DataAnalysis/dataset",
                  },
                  {
                    text: "Report Design",
                    link: "/en/ManagementPlatform/DataAnalysis/reportdesign",
                  },
                ],
              },
              {
                text: "Open Data",
                collapsed: true,
                items: [
                  {
                    text: "Data Service",
                    link: "/en/ManagementPlatform/OpenData/dataservice",
                  },
                ],
              },
              {
                text: "Configuration Design",
                collapsed: true,
                items: [
                  {
                    text: "Space Management",
                    link: "/en/ManagementPlatform/ConfigurationDesign/spacemanagement",
                  },
                  {
                    text: "Device Management",
                    link: "/en/ManagementPlatform/ConfigurationDesign/devicemanagement",
                  },
                  {
                    text: "Connection Management",
                    link: "/en/ManagementPlatform/ConfigurationDesign/connectionmanagement",
                  },
                ],
              },
              {
                text: "System Settings",
                collapsed: true,
                items: [
                  {
                    text: "Internationalization",
                    link: "/en/ManagementPlatform/SystemConfiguration/internationalization",
                  },
                  {
                    text: "Menu Management",
                    link: "/en/ManagementPlatform/SystemConfiguration/menumanagement",
                  },
                  {
                    text: "Permission Management",
                    link: "/en/ManagementPlatform/SystemConfiguration/permissionmanagement",
                  },
                  {
                    text: "Task Management",
                    link: "/en/ManagementPlatform/SystemConfiguration/taskmanagement",
                  },
                ],
              },
            ],
          },
          // Screen Configuration
          {
            text: "Screen Configuration",
            collapsed: true,
            items: [
              {
                text: "Controls",
                collapsed: true,
                items: [
                  {
                    text: "Alarms",
                    collapsed: true,
                    items: [
                      {
                        text: "Alarm List",
                        link: "/en/ScreenConfiguration/Controls/Alarms/alarmlist",
                      },
                    ],
                  },
                  {
                    text: "Buttons",
                    collapsed: true,
                    items: [
                      {
                        text: "Button",
                        link: "/en/ScreenConfiguration/Controls/Buttons/button",
                      },
                      {
                        text: "Checkbox",
                        link: "/en/ScreenConfiguration/Controls/Buttons/checkbox",
                      },
                      {
                        text: "Radio Button",
                        link: "/en/ScreenConfiguration/Controls/Buttons/radiobutton",
                      },
                      {
                        text: "Status Button",
                        link: "/en/ScreenConfiguration/Controls/Buttons/statusbutton",
                      },
                      {
                        text: "Navigation Menu",
                        link: "/en/ScreenConfiguration/Controls/Buttons/navigationmenu",
                      },
                    ],
                  },
                  {
                    text: "Tables",
                    collapsed: true,
                    items: [
                      {
                        text: "Variable List",
                        link: "/en/ScreenConfiguration/Controls/Charts/variablelist",
                      },
                      {
                        text: "Historical Retrieval",
                        link: "/en/ScreenConfiguration/Controls/Charts/historicalretrieval",
                      },
                    ],
                  },
                  {
                    text: "Display",
                    collapsed: true,
                    items: [
                      {
                        text: "Text Label",
                        link: "/en/ScreenConfiguration/Controls/Display/textlabel",
                      },
                      {
                        text: "Value Display",
                        link: "/en/ScreenConfiguration/Controls/Display/valuedisplay",
                      },
                      {
                        text: "Page Container",
                        link: "/en/ScreenConfiguration/Controls/Display/pagecontainer",
                      },
                      {
                        text: "Modal",
                        link: "/en/ScreenConfiguration/Controls/Display/modal",
                      },
                      {
                        text: "Iframe",
                        link: "/en/ScreenConfiguration/Controls/Display/iframe",
                      },
                    ],
                  },
                  {
                    text: "Drawing",
                    collapsed: true,
                    items: [
                      {
                        text: "Drawing Introduction",
                        link: "/en/ScreenConfiguration/Controls/Drawing/drawingintroduction",
                      },
                      {
                        text: "Zigzag Line",
                        link: "/en/ScreenConfiguration/Controls/Drawing/zigzagline",
                      },
                      {
                        text: "Polygon",
                        link: "/en/ScreenConfiguration/Controls/Drawing/polygon",
                      },
                      {
                        text: "Pipeline",
                        link: "/en/ScreenConfiguration/Controls/Drawing/pipeline",
                      },
                    ],
                  },
                  {
                    text: "Events",
                    collapsed: true,
                    items: [
                      {
                        text: "Event List",
                        link: "/en/ScreenConfiguration/Controls/Events/eventlist",
                      },
                    ],
                  },
                  {
                    text: "Input",
                    collapsed: true,
                    items: [
                      {
                        text: "Dropdown Box",
                        link: "/en/ScreenConfiguration/Controls/Input/dropdownbox",
                      },
                      {
                        text: "Text Input Box",
                        link: "/en/ScreenConfiguration/Controls/Input/textinputbox",
                      },
                      {
                        text: "Slider",
                        link: "/en/ScreenConfiguration/Controls/Input/slider",
                      },
                      {
                        text: "Calendar",
                        link: "/en/ScreenConfiguration/Controls/Input/calendar",
                      },
                      {
                        text: "Digital Input Box",
                        link: "/en/ScreenConfiguration/Controls/Input/digitalinputbox",
                      },
                    ],
                  },
                  {
                    text: "Charts",
                    collapsed: true,
                    items: [
                      {
                        text: "Real-time Trend",
                        link: "/en/ScreenConfiguration/Controls/Tables/realtimetrend",
                      },
                      {
                        text: "Historical Trend",
                        link: "/en/ScreenConfiguration/Controls/Tables/historicaltrend",
                      },
                      {
                        text: "Custom Curve",
                        link: "/en/ScreenConfiguration/Controls/Tables/customcurve",
                      },
                      {
                        text: "Dashboard",
                        link: "/en/ScreenConfiguration/Controls/Tables/dashboard",
                      },
                    ],
                  },
                  {
                    text: "Shapes",
                    collapsed: true,
                    items: [
                      {
                        text: "Shape Introduction",
                        link: "/en/ScreenConfiguration/Controls/Shapes/shapeintroduction",
                      },
                      {
                        text: "Ellipse",
                        link: "/en/ScreenConfiguration/Controls/Shapes/ellipse",
                      },
                      {
                        text: "Rectangle",
                        link: "/en/ScreenConfiguration/Controls/Shapes/rectangle",
                      },
                      {
                        text: "Round Rectangle",
                        link: "/en/ScreenConfiguration/Controls/Shapes/roundrectangle",
                      },
                      {
                        text: "Straight Line",
                        link: "/en/ScreenConfiguration/Controls/Shapes/straightline",
                      },
                      {
                        text: "Horizontal Line",
                        link: "/en/ScreenConfiguration/Controls/Shapes/horizontalline",
                      },
                      {
                        text: "Vertical Line",
                        link: "/en/ScreenConfiguration/Controls/Shapes/verticalline",
                      },
                    ],
                  },
                  {
                    text: "Others",
                    collapsed: true,
                    items: [
                      {
                        text: "Historical Report",
                        link: "/en/ScreenConfiguration/Controls/Others/historicalreport",
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
  },
});
