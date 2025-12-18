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
          { text: "首页", link: "/" },
          { text: "文档说明", link: "/DipuOneProductManual" },
        ],
        sidebar: [
          {
            text: "产品介绍",
            items: [
              {
                text: "产品概述",
                link: "/DipuOneProductManual",
              },
            ],
          },
          {
            text: "管理平台",
            items: [
              {
                text: "数据看板",
                items: [
                  {
                    text: "数据看板",
                    link: "/ManagementPlatform/DataBoard/databoard",
                  },
                  {
                    text: "下拉框",
                    link: "/ManagementPlatform/DataBoard/dropdown",
                  },
                ],
              },
              {
                text: "组态设计",
                items: [
                  {
                    text: "空间管理",
                    link: "/ManagementPlatform/ConfigurationDesign/spacemanagement",
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
