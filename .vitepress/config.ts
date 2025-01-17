import { defineConfig } from "vitepress";
import { nav } from "./bars/nav";
import { sidebar } from "./bars/sidebar";

const config = defineConfig({
  base: "/lib/",
  title: "Lib代码片段",
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [["link", { rel: "icon", type: "image/png", href: "/lib/images/logo.png" }]],
  themeConfig: {
    siteTitle: "Lib",
    logo: "/images/logo.png",
    lastUpdatedText: "最后更新时间",
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/kiyoumiii/SnippestLab",
      },
    ],
    nav,
    sidebar,
    editLink: {
      pattern: "https://github.com/kiyoumiii/SnippestLab/edit/master/:path",
      text: "在 GitHub 上编辑此页面",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2023-${new Date().getFullYear()} kiyoumi`,
    },
  },
});

export default config;
