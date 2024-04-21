import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "文档演示",
    //   description: "vuepress-theme-hope 的文档演示",
    // },

    "/": {
      lang: "zh-CN",
      title: "HackOrg",
      description: "一个关于黑客技术的开源非营利组织",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
