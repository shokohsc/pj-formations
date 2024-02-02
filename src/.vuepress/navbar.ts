import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/formations",
  "/contact",
  {
    text: "+33 6 01 23 45 67",
    link: "tel:+33601234567",
    icon: "phone"
  }
]);
