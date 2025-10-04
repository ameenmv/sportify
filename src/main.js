import { createApp } from "vue";
import "./style.css";
import router from "./Router";
import App from "./App.vue";
import gsap from "gsap";

createApp(App).use(gsap).use(router).mount("#app");
