import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "HackOrg",
  description: "一个热衷于黑客技术的开源非营利组织",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
