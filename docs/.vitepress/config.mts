import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
        nav: [
          { text: "🏠 首页", link: "/" },
          { text: "📚 文档说明", link: "/DipuOneProductManual" },
        ],
        sidebar: [
          {
            text: "📦 产品介绍",
            collapsed: false,
            items: [
              {
                text: "📄 产品概述",
                link: "/DipuOneProductManual",
              },
            ],
          },
          {
            text: "🏢 管理平台",
            collapsed: false,
            items: [
              {
                text: "📋 项目列表",
                link: "/ManagementPlatform/projectlist",
              },
              {
                text: "📊 数据看板",
                collapsed: true,
                items: [
                  {
                    text: "📈 数据看板",
                    link: "/ManagementPlatform/DataBoard/databoard",
                  },
                ],
              },
              {
                text: "📈 数据分析",
                collapsed: true,
                items: [
                  {
                    text: "🗃️ 数据集",
                    link: "/ManagementPlatform/DataAnalysis/dataset",
                  },
                  {
                    text: "📑 报表设计",
                    link: "/ManagementPlatform/DataAnalysis/reportdesign",
                  },
                ],
              },
              {
                text: "🔓 开放数据",
                collapsed: true,
                items: [
                  {
                    text: "🌐 数据服务",
                    link: "/ManagementPlatform/OpenData/dataservice",
                  },
                ],
              },
              {
                text: "🎨 组态设计",
                collapsed: true,
                items: [
                  {
                    text: "🏢 空间管理",
                    link: "/ManagementPlatform/ConfigurationDesign/spacemanagement",
                  },
                  {
                    text: "💻 设备管理",
                    link: "/ManagementPlatform/ConfigurationDesign/devicemanagement",
                  },
                  {
                    text: "🔌 连接管理",
                    link: "/ManagementPlatform/ConfigurationDesign/connectionmanagement",
                  },
                ],
              },
              {
                text: "⚙️ 系统设置",
                collapsed: true,
                items: [
                  {
                    text: "🌍 国际化",
                    link: "/ManagementPlatform/SystemConfiguration/internationalization",
                  },
                  {
                    text: "📂 菜单管理",
                    link: "/ManagementPlatform/SystemConfiguration/menumanagement",
                  },
                  {
                    text: "🔐 权限管理",
                    link: "/ManagementPlatform/SystemConfiguration/permissionmanagement",
                  },
                  {
                    text: "⏰ 任务管理",
                    link: "/ManagementPlatform/SystemConfiguration/taskmanagement",
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
                  {
                    text: "Dropdown",
                    link: "/en/ManagementPlatform/DataBoard/dropdown",
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
