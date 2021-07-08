import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./css/index.css";
import VantageUi from "vantage-ui";

createApp(App).use(store).use(router).use(VantageUi).mount("#app");
