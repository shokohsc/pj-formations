import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "en-US",
  title: "PJ Formations",
  description: "A blog demo for vuepress-theme-hope",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,

  bundler: viteBundler({
    viteOptions: {
      server: {
        host: true,
        port: 80,
        hmr: {
          clientPort: 443
        }
      }
    },
    vuePluginOptions: {},
  })
});
