import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.scrollTo(0, 0);

createApp(App).use(router).mount("#app");
