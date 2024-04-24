import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // 注意：已经在 theme.ts 中配置了 sidebar: "structure",
    // 故程序会通过文件结构自动生成侧边栏，所以后续无需再配置文件路径...
    // https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html

    // {
    //   text: "Demo",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "Docs",
    //   icon: "book",
    //   prefix: "guide/",
    //   children: "structure",
    // },
    // {
    //   text: "Slides",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html",
    // },
  ],
});
