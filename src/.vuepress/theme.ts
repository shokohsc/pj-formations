import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import { MR_HOPE_AVATAR } from "./logo.ts";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "https://theme-hope-assets.vuejs.press/logo.svg",

  repo: "vuepress-theme-hope/vuepress-theme-hope",

  docsDir: "src",

  // navbar
  navbar,

  navbarIcon: false,

  // sidebar
  sidebar: false,

  footer: "Default footer",

  displayFooter: false,

  encrypt: {},

  metaLocales: {
    editLink: "Edit this page on GitHub",
  },

  // enable it to preview all changes in time
  hotReload: true,

  plugins: {
    blog: false,
    components: {
      components: ["Badge", "VPCard"],
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: false,
      component: true,
      demo: false,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});
