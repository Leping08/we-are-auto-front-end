import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./css/index.css";
import VantageUi from "vantage-ui";
import VueGtag from "vue-gtag";
import Particles from "particles.vue3";

createApp(App)
  .use(store)
  .use(router)
  .use(VantageUi)
  .use(Particles)
  .use(
    VueGtag,
    {
      config: { id: process.env.VUE_APP_GOOGLE_ANALYTICS_KEY },
    },
    router
  )
  .mount("#app");
