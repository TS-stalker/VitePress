// .vitepress/config.js
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
  // 重写规则 - 统一简化路径
  rewrites: {
    // "ManagementPlatform/databoard.md": "ManagementPlatform/dashboard", // 数据看板
    // "ManagementPlatform/dataset.md": "ManagementPlatform/dataset", // 数据集
    // "ManagementPlatform/reportdesign.md": "ManagementPlatform/report", // 报表设计
    // "ManagementPlatform/dataservice.md": "ManagementPlatform/data-server", // 数据服务
    // "ManagementPlatform/spacemanagement.md": "ManagementPlatform/space", // 空间管理
    // "ManagementPlatform/devicemanagement.md": "ManagementPlatform/structure", // 设备管理
    // "ManagementPlatform/connectionmanagement.md":
    //   "ManagementPlatform/datasource", // 连接管理
    // "ManagementPlatform/internationalization.md": "ManagementPlatform/locale", // 国际化
    // "ManagementPlatform/menumanagement.md": "ManagementPlatform/menu", // 菜单管理
    // "ManagementPlatform/permissionmanagement.md":
    //   "ManagementPlatform/permission", // 权限管理
    // "ManagementPlatform/taskmanagement.md": "ManagementPlatform/task", // 任务管理

    // 中文：将深层路径映射到简化路径
    "ManagementPlatform/:section/:page.md": "ManagementPlatform/:page",
    "Controls/:section/:page.md": "Controls/:page",

    // 英文：同样使用简化规则
    "en/ManagementPlatform/:section/:page.md": "en/ManagementPlatform/:page",
    "en/Controls/:section/:page.md": "en/Controls/:page",
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      title: "DipuOne产品手册",
      description: "A VitePress Site",
      link: "/zh_CN/",
      themeConfig: {
        // logo: "/logo.png",
        // 导航栏
        nav: [
          { text: "首页", link: "/zh_CN/" },
          { text: "文档说明", link: "/zh_CN/DipuOneProductManual" },
        ],
        // 侧边栏 - 使用简化路径
        sidebar: [
          // 产品介绍
          {
            text: "产品手册",
            collapsed: false,
            items: [
              {
                text: "DipuOne产品手册",
                link: "/zh_CN/DipuOneProductManual",
              },
            ],
          },
          // 产品概述
          {
            text: "产品概述",
            collapsed: true,
            items: [
              {
                text: "版本更新说明",
                link: "/zh_CN/ProductOverview/versionupdateinstructions",
              },
              {
                text: "支持和帮助",
                link: "/zh_CN/ProductOverview/supportandassistance ",
              },
              {
                text: "系统要求",
                link: "/zh_CN/ProductOverview/systemrequirements ",
              },
            ],
          },
          // 安装和升级
          {
            text: "安装和升级",
            collapsed: true,
            items: [
              {
                text: "windows环境",
                link: "/zh_CN/InstallationUpgrade/windowsenv",
              },
              {
                text: "产品授权",
                link: "/zh_CN/InstallationUpgrade/productlicense",
              },
            ],
          },
          // 快速入门
          {
            text: "快速入门",
            collapsed: true,
            items: [
              {
                text: "快速入门",
                link: "/zh_CN/QuickStart/quickstart",
              },
            ],
          },
          // 系统部署
          {
            text: "系统部署",
            collapsed: true,
            items: [
              {
                text: "单机部署",
                link: "/zh_CN/SystemDeploy/singledeploy",
              },
              {
                text: "冗余部署",
                link: "/zh_CN/SystemDeploy/redundantdeploy",
              },
            ],
          },
          // 管理平台
          {
            text: "管理平台",
            collapsed: true,
            items: [
              {
                text: "项目列表",
                link: "/zh_CN/ManagementPlatform/projectlist",
              },
              {
                text: "数据看板",
                collapsed: true,
                items: [
                  {
                    text: "数据看板",
                    link: "/zh_CN/ManagementPlatform/dashboard",
                  },
                ],
              },
              {
                text: "数据分析",
                collapsed: true,
                items: [
                  {
                    text: "数据集",
                    link: "/zh_CN/ManagementPlatform/dataset",
                  },
                  {
                    text: "报表设计",
                    link: "/zh_CN/ManagementPlatform/report",
                  },
                ],
              },
              {
                text: "开放数据",
                collapsed: true,
                items: [
                  {
                    text: "数据服务",
                    link: "/zh_CN/ManagementPlatform/data-server", // 简化路径
                  },
                ],
              },
              {
                text: "组态设计",
                collapsed: true,
                items: [
                  {
                    text: "空间管理",
                    link: "/zh_CN/ManagementPlatform/space",
                  },
                  {
                    text: "设备管理",
                    link: "/zh_CN/ManagementPlatform/structure", // 简化路径
                  },
                  {
                    text: "连接管理",
                    link: "/zh_CN/ManagementPlatform/datasource", // 简化路径
                  },
                ],
              },
              {
                text: "系统设置",
                collapsed: true,
                items: [
                  {
                    text: "国际化",
                    link: "/zh_CN/ManagementPlatform/locale", // 简化路径
                  },
                  {
                    text: "菜单管理",
                    link: "/zh_CN/ManagementPlatform/menu", // 简化路径
                  },
                  {
                    text: "权限管理",
                    link: "/zh_CN/ManagementPlatform/permission", // 简化路径
                  },
                  {
                    text: "任务管理",
                    link: "/zh_CN/ManagementPlatform/task", // 简化路径
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
                text: "大纲",
                collapsed: true,
                items: [
                  {
                    text: "大纲说明",
                    link: "/zh_CN/Controls/outline", // 简化路径
                  },
                ],
              },
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
                        link: "/zh_CN/Controls/alarmlist", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "按钮",
                    collapsed: true,
                    items: [
                      {
                        text: "按钮",
                        link: "/zh_CN/Controls/button", // 简化路径
                      },
                      {
                        text: "复选框",
                        link: "/zh_CN/Controls/checkbox", // 简化路径
                      },
                      {
                        text: "单选按钮",
                        link: "/zh_CN/Controls/radiobutton", // 简化路径
                      },
                      {
                        text: "状态按钮",
                        link: "/zh_CN/Controls/statusbutton", // 简化路径
                      },
                      {
                        text: "导航菜单",
                        link: "/zh_CN/Controls/navigationmenu", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "表格",
                    collapsed: true,
                    items: [
                      {
                        text: "变量列表",
                        link: "/zh_CN/Controls/variablelist", // 简化路径
                      },
                      {
                        text: "历史检索",
                        link: "/zh_CN/Controls/historicalretrieval", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "显示",
                    collapsed: true,
                    items: [
                      {
                        text: "文本标签",
                        link: "/zh_CN/Controls/textlabel", // 简化路径
                      },
                      {
                        text: "值显示",
                        link: "/zh_CN/Controls/valuedisplay", // 简化路径
                      },
                      {
                        text: "画面容器",
                        link: "/zh_CN/Controls/pagecontainer", // 简化路径
                      },
                      {
                        text: "模态框",
                        link: "/zh_CN/Controls/modal", // 简化路径
                      },
                      {
                        text: "内嵌网页",
                        link: "/zh_CN/Controls/iframe", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "绘图",
                    collapsed: true,
                    items: [
                      {
                        text: "绘图介绍",
                        link: "/zh_CN/Controls/drawingintroduction", // 简化路径
                      },
                      {
                        text: "折线",
                        link: "/zh_CN/Controls/zigzagline", // 简化路径
                      },
                      {
                        text: "多边形",
                        link: "/zh_CN/Controls/polygon", // 简化路径
                      },
                      {
                        text: "管道",
                        link: "/zh_CN/Controls/pipeline", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "事件",
                    collapsed: true,
                    items: [
                      {
                        text: "事件列表",
                        link: "/zh_CN/Controls/eventlist", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "输入",
                    collapsed: true,
                    items: [
                      {
                        text: "下拉框",
                        link: "/zh_CN/Controls/dropdownbox", // 简化路径
                      },
                      {
                        text: "文本输入框",
                        link: "/zh_CN/Controls/textinputbox", // 简化路径
                      },
                      {
                        text: "滑动条",
                        link: "/zh_CN/Controls/slider", // 简化路径
                      },
                      {
                        text: "日历",
                        link: "/zh_CN/Controls/calendar", // 简化路径
                      },
                      {
                        text: "数字输入框",
                        link: "/zh_CN/Controls/digitalinputbox", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "图表",
                    collapsed: true,
                    items: [
                      {
                        text: "实时趋势",
                        link: "/zh_CN/Controls/realtimetrend", // 简化路径
                      },
                      {
                        text: "历史趋势",
                        link: "/zh_CN/Controls/historicaltrend", // 简化路径
                      },
                      {
                        text: "自定义曲线",
                        link: "/zh_CN/Controls/customcurve", // 简化路径
                      },
                      {
                        text: "仪表盘",
                        link: "/zh_CN/Controls/dashboard", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "形状",
                    collapsed: true,
                    items: [
                      {
                        text: "形状介绍",
                        link: "/zh_CN/Controls/shapeintroduction", // 简化路径
                      },
                      {
                        text: "椭圆",
                        link: "/zh_CN/Controls/ellipse", // 简化路径
                      },
                      {
                        text: "矩形",
                        link: "/zh_CN/Controls/rectangle", // 简化路径
                      },
                      {
                        text: "圆角矩形",
                        link: "/zh_CN/Controls/roundrectangle", // 简化路径
                      },
                      {
                        text: "直线",
                        link: "/zh_CN/Controls/straightline", // 简化路径
                      },
                      {
                        text: "水平线",
                        link: "/zh_CN/Controls/horizontalline", // 简化路径
                      },
                      {
                        text: "垂直线",
                        link: "/zh_CN/Controls/verticalline", // 简化路径
                      },
                    ],
                  },
                  {
                    text: "其他",
                    collapsed: true,
                    items: [
                      {
                        text: "历史报表",
                        link: "/zh_CN/Controls/historicalreport", // 简化路径
                      },
                    ],
                  },
                ],
              },
              {
                text: "编辑器",
                collapsed: true,
                items: [
                  {
                    text: "画面编辑器",
                    link: "/zh_CN/Controls/screeneditor", // 简化路径
                  },
                ],
              },
              {
                text: "图库",
                collapsed: true,
                items: [
                  {
                    text: "图库管理",
                    link: "/zh_CN/Controls/imagelibrary", // 简化路径
                  },
                ],
              },
              {
                text: "图符",
                collapsed: true,
                items: [
                  {
                    text: "图符介绍",
                    link: "/zh_CN/Controls/symbolpanel", // 简化路径
                  },
                  {
                    text: "图符库",
                    link: "/zh_CN/Controls/symbollibrary",
                  },
                ],
              },
              {
                text: "动作",
                collapsed: true,
                items: [
                  {
                    text: "动作介绍",
                    link: "/zh_CN/Controls/action", // 简化路径
                  },
                  {
                    text: "导航",
                    link: "/zh_CN/Controls/navigation", // 简化路径
                  },
                  {
                    text: "变量写值",
                    link: "/zh_CN/Controls/variablewrite", // 简化路径
                  },
                ],
              },
              {
                text: "动画",
                collapsed: true,
                items: [
                  {
                    text: "动画介绍",
                    link: "/zh_CN/Controls/animation", // 简化路径
                  },
                ],
              },
              {
                text: "属性绑定",
                collapsed: true,
                items: [
                  {
                    text: "属性绑定介绍",
                    link: "/zh_CN/Controls/attributebindintroduction", // 简化路径
                  },
                  {
                    text: "变量",
                    link: "/zh_CN/Controls/variable",
                  },
                  {
                    text: "属性",
                    link: "/zh_CN/Controls/attribute",
                  },
                  {
                    text: "脚本",
                    link: "/zh_CN/Controls/script",
                  },
                ],
              },
              {
                text: "项目属性",
                collapsed: true,
                items: [
                  {
                    text: "项目属性",
                    link: "/zh_CN/Controls/projectattributes", // 简化路径
                  },
                ],
              },
            ],
          },
          // 组态案例
          {
            text: "组态案例",
            collapsed: true,
            items: [
              {
                text: "案例一:如何组态弹窗",
                link: "/zh_CN/Example/case1",
              },
              {
                text: "案例二:如何组态动画",
                link: "/zh_CN/Example/case2",
              },
              {
                text: "案例三:如何建立变量",
                link: "/zh_CN/Example/case3",
              },
              {
                text: "案例四:如何定时导出报表",
                link: "/zh_CN/Example/case4",
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
            text: "Product Manual",
            collapsed: false,
            items: [
              {
                text: "DipuOne Product Manual",
                link: "/en/DipuOneProductManual",
              },
            ],
          },
          // Product Overview
          {
            text: "Product Overview",
            collapsed: true,
            items: [
              {
                text: "Version Update Instructions",
                link: "/en/ProductOverview/versionupdateinstructions",
              },
              {
                text: "Support and Assistance",
                link: "/en/ProductOverview/supportandassistance",
              },
              {
                text: "System Requirements",
                link: "/en/ProductOverview/systemrequirements",
              },
            ],
          },
          // Installation and Upgrade
          {
            text: "Installation and Upgrade",
            collapsed: true,
            items: [
              {
                text: "Windows Environment",
                link: "/en/InstallationUpgrade/windowsenv",
              },
              {
                text: "Product License",
                link: "/en/InstallationUpgrade/productlicense",
              },
            ],
          },
          // Quick Start
          {
            text: "Quick Start",
            collapsed: true,
            items: [
              {
                text: "Quick Start",
                link: "/en/QuickStart/quickstart",
              },
            ],
          },
          // System Deploy
          {
            text: "System Deploy",
            collapsed: true,
            items: [
              {
                text: "Single Deploy",
                link: "/en/SystemDeploy/singledeploy",
              },
              {
                text: "Redundant Deploy",
                link: "/en/SystemDeploy/redundantdeploy",
              },
            ],
          },
          // Management Platform
          {
            text: "Management Platform",
            collapsed: true,
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
                    link: "/en/ManagementPlatform/dashboard", // 简化路径
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
                    link: "/en/ManagementPlatform/report", // 简化路径
                  },
                ],
              },
              {
                text: "Open Data",
                collapsed: true,
                items: [
                  {
                    text: "Data Service",
                    link: "/en/ManagementPlatform/data-server", // 简化路径
                  },
                ],
              },
              {
                text: "Configuration Design",
                collapsed: true,
                items: [
                  {
                    text: "Space Management",
                    link: "/en/ManagementPlatform/space", // 简化路径
                  },
                  {
                    text: "Device Management",
                    link: "/en/ManagementPlatform/structure", // 简化路径
                  },
                  {
                    text: "Connection Management",
                    link: "/en/ManagementPlatform/datasource", // 简化路径
                  },
                ],
              },
              {
                text: "System Settings",
                collapsed: true,
                items: [
                  {
                    text: "Internationalization",
                    link: "/en/ManagementPlatform/locale", // 简化路径
                  },
                  {
                    text: "Menu Management",
                    link: "/en/ManagementPlatform/menu", // 简化路径
                  },
                  {
                    text: "Permission Management",
                    link: "/en/ManagementPlatform/permission", // 简化路径
                  },
                  {
                    text: "Task Management",
                    link: "/en/ManagementPlatform/task", // 简化路径
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
                text: "Outline",
                collapsed: true,
                items: [
                  {
                    text: "Outline Description",
                    link: "/en/Controls/outline", // 简化路径
                  },
                ],
              },
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
              {
                text: "Editor",
                collapsed: true,
                items: [
                  {
                    text: "Screen Editor",
                    link: "/en/Controls/screeneditor", // 简化路径
                  },
                ],
              },
              {
                text: "Image Library",
                collapsed: true,
                items: [
                  {
                    text: "Image Library Management",
                    link: "/en/Controls/imagelibrary", // 简化路径
                  },
                ],
              },
              {
                text: "Symbols",
                collapsed: true,
                items: [
                  {
                    text: "Symbol Introduction",
                    link: "/en/Controls/symbolpanel", // 简化路径
                  },
                  {
                    text: "Symbol Library",
                    link: "/en/Controls/symbollibrary",
                  },
                ],
              },
              {
                text: "Actions",
                collapsed: true,
                items: [
                  {
                    text: "Action Introduction",
                    link: "/en/Controls/action", // 简化路径
                  },
                  {
                    text: "Navigation",
                    link: "/en/Controls/navigation", // 简化路径
                  },
                  {
                    text: "Variable Write",
                    link: "/en/Controls/variablewrite", // 简化路径
                  },
                ],
              },
              {
                text: "Animation",
                collapsed: true,
                items: [
                  {
                    text: "Animation Introduction",
                    link: "/en/Controls/animation", // 简化路径
                  },
                ],
              },
              {
                text: "Attribute Binding",
                collapsed: true,
                items: [
                  {
                    text: "Attribute Binding Introduction",
                    link: "/en/Controls/attributebindintroduction", // 简化路径
                  },
                  {
                    text: "Variable",
                    link: "/en/Controls/variable",
                  },
                  {
                    text: "Attribute",
                    link: "/en/Controls/attribute",
                  },
                  {
                    text: "Script",
                    link: "/en/Controls/script",
                  },
                ],
              },
              {
                text: "Project Attributes",
                collapsed: true,
                items: [
                  {
                    text: "Project Attributes",
                    link: "/en/Controls/projectattributes", // 简化路径
                  },
                ],
              },
            ],
          },
          // Configuration Cases
          {
            text: "Configuration Cases",
            collapsed: true,
            items: [
              {
                text: "Case 1: How to Configure Popups",
                link: "/en/Example/case1",
              },
              {
                text: "Case 2: How to Configure Animation",
                link: "/en/Example/case2",
              },
              {
                text: "Case 3: How to Create Variables",
                link: "/en/Example/case3",
              },
              {
                text: "Case 4: How to Export Reports Regularly",
                link: "/en/Example/case4",
              },
            ],
          },
        ],
      },
    },
  },
});
