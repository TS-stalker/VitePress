import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DipiOne产品手册",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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

    // socialLinks: [
    //   { icon: "github", link: "https://github.com/vuejs/vitepress" },
    // ],
  },
});
