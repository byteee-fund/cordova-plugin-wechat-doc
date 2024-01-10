import { defineUserConfig } from "vuepress";
import { defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";

import {
  head,
  navbarEn,
  navbarZh,
  sidebarEn,
  sidebarZh,
} from "./configs/index.js";

export default defineUserConfig({
  base: "/doc/cordova-plugin-wechat",
  // extra tags in `<head>`
  // head,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN",
      title: "Cordova Plugin Wechat",
      description: "微信openSDK cordova插件",
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'VuePress',
    //   description: 'Vue 驱动的静态网站生成器',
    // },
  },

  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],

  theme: defaultTheme({
    locales: {
      "/": {
        // navbar
        navbar: navbarZh,
        selectLanguageName: "简体中文",
        selectLanguageText: "选择语言",
        selectLanguageAriaLabel: "选择语言",
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        contributorsText: "贡献者",
        // custom containers
        tip: "提示",
        warning: "注意",
        danger: "警告",
        // 404 page
        notFound: [
          "这里什么都没有",
          "我们怎么到这来了？",
          "这是一个 404 页面",
          "看起来我们进入了错误的链接",
        ],
        backToHome: "返回首页",
        // a11y
        openInNewWindow: "在新窗口打开",
        toggleColorMode: "切换颜色模式",
        toggleSidebar: "切换侧边栏",
      },
      "/en": {
        selectLanguageName: "English",
      },
    },
  }),
});
