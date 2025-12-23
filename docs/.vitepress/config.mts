// .vitepress/config.js
import { defineConfig } from "vitepress";

export default defineConfig({
  base: "/",
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
  // 重写规则 - 统一简化路径
  rewrites: {
    // 中文：将深层路径映射到简化路径
    "ManagementPlatform/:section/:page.md": "ManagementPlatform/:page",
    "ScreenConfiguration/Controls/:section/:page.md": "Controls/:page",

    // 英文：同样使用简化规则
    "en/ManagementPlatform/:section/:page.md": "en/ManagementPlatform/:page",
    "en/ScreenConfiguration/Controls/:section/:page.md": "en/Controls/:page",
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "DipuOne产品手册",
      description: "A VitePress Site",
      themeConfig: {
        // 导航栏
        nav: [
          { text: "首页", link: "/" },
          { text: "文档说明", link: "/DipuOneProductManual" },
        ],
        // 侧边栏 - 使用简化路径
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
                    link: "/ManagementPlatform/databoard", // 简化路径
                  },
                ],
              },
              {
                text: "数据分析",
                collapsed: true,
                items: [
                  {
                    text: "数据集",
                    link: "/ManagementPlatform/dataset", // 简化路径
                  },
                  {
                    text: "报表设计",
                    link: "/ManagementPlatform/reportdesign", // 简化路径
                  },
                ],
              },
              {
                text: "开放数据",
                collapsed: true,
                items: [
                  {
                    text: "数据服务",
                    link: "/ManagementPlatform/dataservice", // 简化路径
                  },
                ],
              },
              {
                text: "组态设计",
                collapsed: true,
                items: [
                  {
                    text: "空间管理",
                    link: "/ManagementPlatform/spacemanagement", // 简化路径
                  },
                  {
                    text: "设备管理",
                    link: "/ManagementPlatform/devicemanagement", // 简化路径
                  },
                  {
                    text: "连接管理",
                    link: "/ManagementPlatform/connectionmanagement", // 简化路径
                  },
                ],
              },
              {
                text: "系统设置",
                collapsed: true,
                items: [
                  {
                    text: "国际化",
                    link: "/ManagementPlatform/internationalization", // 简化路径
                  },
                  {
                    text: "菜单管理",
                    link: "/ManagementPlatform/menumanagement", // 简化路径
                  },
                  {
                    text: "权限管理",
                    link: "/ManagementPlatform/permissionmanagement", // 简化路径
                  },
                  {
                    text: "任务管理",
                    link: "/ManagementPlatform/taskmanagement", // 简化路径
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
                        link: "/Controls/alarmlist", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "按钮",
                    collapsed: true,
                    items: [
                      {
                        text: "按钮",
                        link: "/Controls/button", // 简化路径
                      },
                      {
                        text: "复选框",
                        link: "/Controls/checkbox", // 简化路径
                      },
                      {
                        text: "单选按钮",
                        link: "/Controls/radiobutton", // 简化路径
                      },
                      {
                        text: "状态按钮",
                        link: "/Controls/statusbutton", // 简化路径
                      },
                      {
                        text: "导航菜单",
                        link: "/Controls/navigationmenu", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "表格",
                    collapsed: true,
                    items: [
                      {
                        text: "变量列表",
                        link: "/Controls/variablelist", // 简化路径
                      },
                      {
                        text: "历史检索",
                        link: "/Controls/historicalretrieval", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "显示",
                    collapsed: true,
                    items: [
                      {
                        text: "文本标签",
                        link: "/Controls/textlabel", // 简化路径
                      },
                      {
                        text: "值显示",
                        link: "/Controls/valuedisplay", // 简化路径
                      },
                      {
                        text: "画面容器",
                        link: "/Controls/pagecontainer", // 简化路径
                      },
                      {
                        text: "模态框",
                        link: "/Controls/modal", // 简化路径
                      },
                      {
                        text: "内嵌网页",
                        link: "/Controls/iframe", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "绘图",
                    collapsed: true,
                    items: [
                      {
                        text: "绘图介绍",
                        link: "/Controls/drawingintroduction", // 简化路径
                      },
                      {
                        text: "折线",
                        link: "/Controls/zigzagline", // 简化路径
                      },
                      {
                        text: "多边形",
                        link: "/Controls/polygon", // 简化路径
                      },
                      {
                        text: "管道",
                        link: "/Controls/pipeline", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "事件",
                    collapsed: true,
                    items: [
                      {
                        text: "事件列表",
                        link: "/Controls/eventlist", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "输入",
                    collapsed: true,
                    items: [
                      {
                        text: "下拉框",
                        link: "/Controls/dropdownbox", // 简化路径
                      },
                      {
                        text: "文本输入框",
                        link: "/Controls/textinputbox", // 简化路径
                      },
                      {
                        text: "滑动条",
                        link: "/Controls/slider", // 简化路径
                      },
                      {
                        text: "日历",
                        link: "/Controls/calendar", // 简化路径
                      },
                      {
                        text: "数字输入框",
                        link: "/Controls/digitalinputbox", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "图表",
                    collapsed: true,
                    items: [
                      {
                        text: "实时趋势",
                        link: "/Controls/realtimetrend", // 简化路径
                      },
                      {
                        text: "历史趋势",
                        link: "/Controls/historicaltrend", // 简化路径
                      },
                      {
                        text: "自定义曲线",
                        link: "/Controls/customcurve", // 简化路径
                      },
                      {
                        text: "仪表盘",
                        link: "/Controls/dashboard", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "形状",
                    collapsed: true,
                    items: [
                      {
                        text: "形状介绍",
                        link: "/Controls/shapeintroduction", // 简化路径
                      },
                      {
                        text: "椭圆",
                        link: "/Controls/ellipse", // 简化路径
                      },
                      {
                        text: "矩形",
                        link: "/Controls/rectangle", // 简化路径
                      },
                      {
                        text: "圆角矩形",
                        link: "/Controls/roundrectangle", // 简化路径
                      },
                      {
                        text: "直线",
                        link: "/Controls/straightline", // 简化路径
                      },
                      {
                        text: "水平线",
                        link: "/Controls/horizontalline", // 简化路径
                      },
                      {
                        text: "垂直线",
                        link: "/Controls/verticalline", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "其他",
                    collapsed: true,
                    items: [
                      {
                        text: "历史报表",
                        link: "/Controls/historicalreport", // 简化路径
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
      title: "DipuOne Product Manual",
      description: "A VitePress Site",
      themeConfig: {
        nav: [
          { text: "Home", link: "/en/" },
          { text: "Documentation", link: "/en/DipuOneProductManual" },
        ],
        // 侧边栏 - 同样使用简化路径
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
                link: "/en/ManagementPlatform/projectlist", // 简化路径
              },
              {
                text: "Data Dashboard",
                collapsed: true,
                items: [
                  {
                    text: "Data Dashboard",
                    link: "/en/ManagementPlatform/databoard", // 简化路径
                  },
                ],
              },
              {
                text: "Data Analysis",
                collapsed: true,
                items: [
                  {
                    text: "Dataset",
                    link: "/en/ManagementPlatform/dataset", // 简化路径
                  },
                  {
                    text: "Report Design",
                    link: "/en/ManagementPlatform/reportdesign", // 简化路径
                  },
                ],
              },
              {
                text: "Open Data",
                collapsed: true,
                items: [
                  {
                    text: "Data Service",
                    link: "/en/ManagementPlatform/dataservice", // 简化路径
                  },
                ],
              },
              {
                text: "Configuration Design",
                collapsed: true,
                items: [
                  {
                    text: "Space Management",
                    link: "/en/ManagementPlatform/spacemanagement", // 简化路径
                  },
                  {
                    text: "Device Management",
                    link: "/en/ManagementPlatform/devicemanagement", // 简化路径
                  },
                  {
                    text: "Connection Management",
                    link: "/en/ManagementPlatform/connectionmanagement", // 简化路径
                  },
                ],
              },
              {
                text: "System Settings",
                collapsed: true,
                items: [
                  {
                    text: "Internationalization",
                    link: "/en/ManagementPlatform/internationalization", // 简化路径
                  },
                  {
                    text: "Menu Management",
                    link: "/en/ManagementPlatform/menumanagement", // 简化路径
                  },
                  {
                    text: "Permission Management",
                    link: "/en/ManagementPlatform/permissionmanagement", // 简化路径
                  },
                  {
                    text: "Task Management",
                    link: "/en/ManagementPlatform/taskmanagement", // 简化路径
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
                        link: "/en/Controls/alarmlist", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Buttons",
                    collapsed: true,
                    items: [
                      {
                        text: "Button",
                        link: "/en/Controls/button", // 简化路径
                      },
                      {
                        text: "Checkbox",
                        link: "/en/Controls/checkbox", // 简化路径
                      },
                      {
                        text: "Radio Button",
                        link: "/en/Controls/radiobutton", // 简化路径
                      },
                      {
                        text: "Status Button",
                        link: "/en/Controls/statusbutton", // 简化路径
                      },
                      {
                        text: "Navigation Menu",
                        link: "/en/Controls/navigationmenu", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Tables",
                    collapsed: true,
                    items: [
                      {
                        text: "Variable List",
                        link: "/en/Controls/variablelist", // 简化路径
                      },
                      {
                        text: "Historical Retrieval",
                        link: "/en/Controls/historicalretrieval", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Display",
                    collapsed: true,
                    items: [
                      {
                        text: "Text Label",
                        link: "/en/Controls/textlabel", // 简化路径
                      },
                      {
                        text: "Value Display",
                        link: "/en/Controls/valuedisplay", // 简化路径
                      },
                      {
                        text: "Page Container",
                        link: "/en/Controls/pagecontainer", // 简化路径
                      },
                      {
                        text: "Modal",
                        link: "/en/Controls/modal", // 简化路径
                      },
                      {
                        text: "Iframe",
                        link: "/en/Controls/iframe", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Drawing",
                    collapsed: true,
                    items: [
                      {
                        text: "Drawing Introduction",
                        link: "/en/Controls/drawingintroduction", // 简化路径
                      },
                      {
                        text: "Zigzag Line",
                        link: "/en/Controls/zigzagline", // 简化路径
                      },
                      {
                        text: "Polygon",
                        link: "/en/Controls/polygon", // 简化路径
                      },
                      {
                        text: "Pipeline",
                        link: "/en/Controls/pipeline", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Events",
                    collapsed: true,
                    items: [
                      {
                        text: "Event List",
                        link: "/en/Controls/eventlist", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Input",
                    collapsed: true,
                    items: [
                      {
                        text: "Dropdown Box",
                        link: "/en/Controls/dropdownbox", // 简化路径
                      },
                      {
                        text: "Text Input Box",
                        link: "/en/Controls/textinputbox", // 简化路径
                      },
                      {
                        text: "Slider",
                        link: "/en/Controls/slider", // 简化路径
                      },
                      {
                        text: "Calendar",
                        link: "/en/Controls/calendar", // 简化路径
                      },
                      {
                        text: "Digital Input Box",
                        link: "/en/Controls/digitalinputbox", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Charts",
                    collapsed: true,
                    items: [
                      {
                        text: "Real-time Trend",
                        link: "/en/Controls/realtimetrend", // 简化路径
                      },
                      {
                        text: "Historical Trend",
                        link: "/en/Controls/historicaltrend", // 简化路径
                      },
                      {
                        text: "Custom Curve",
                        link: "/en/Controls/customcurve", // 简化路径
                      },
                      {
                        text: "Dashboard",
                        link: "/en/Controls/dashboard", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Shapes",
                    collapsed: true,
                    items: [
                      {
                        text: "Shape Introduction",
                        link: "/en/Controls/shapeintroduction", // 简化路径
                      },
                      {
                        text: "Ellipse",
                        link: "/en/Controls/ellipse", // 简化路径
                      },
                      {
                        text: "Rectangle",
                        link: "/en/Controls/rectangle", // 简化路径
                      },
                      {
                        text: "Round Rectangle",
                        link: "/en/Controls/roundrectangle", // 简化路径
                      },
                      {
                        text: "Straight Line",
                        link: "/en/Controls/straightline", // 简化路径
                      },
                      {
                        text: "Horizontal Line",
                        link: "/en/Controls/horizontalline", // 简化路径
                      },
                      {
                        text: "Vertical Line",
                        link: "/en/Controls/verticalline", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "Others",
                    collapsed: true,
                    items: [
                      {
                        text: "Historical Report",
                        link: "/en/Controls/historicalreport", // 简化路径
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