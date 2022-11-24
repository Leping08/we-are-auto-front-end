import { createApp } from "vue";
import { createPinia } from "pinia";
import * as vantageComponents from "./lib-components/index.js";
import { admin, notAdmin, guest, auth } from "./directives/index.js";

import VueGtag from "vue-gtag";

import App from "./App.vue";
import router from "./router";

import "./style.css"; // tailwind

const app = createApp(App);

app.use(createPinia())

app.directive("admin", admin)
app.directive("not-admin", notAdmin)
app.directive("guest", guest)
app.directive("auth", auth)

app.component("VAccordion", vantageComponents.VAccordion);
app.component("VAvatar", vantageComponents.VAvatar);
app.component("VBadge", vantageComponents.VBadge);
app.component("VButton", vantageComponents.VButton);
app.component("VCard", vantageComponents.VCard);
app.component("VCheckBox", vantageComponents.VCheckBox);
app.component("VCountdown", vantageComponents.VCountdown);
app.component("VDataTable", vantageComponents.VDataTable);
app.component("VDateRangePicker", vantageComponents.VDateRangePicker);
app.component("VDescriptionList", vantageComponents.VDescriptionList);
app.component("VInput", vantageComponents.VInput);
app.component("VRadio", vantageComponents.VRadio);
app.component("VToggle", vantageComponents.VToggle);
app.component("VSearchSelect", vantageComponents.VSearchSelect);
app.component("VPing", vantageComponents.VPing);
app.component("VProgressBar", vantageComponents.VProgressBar);
app.component("VProgressSpinner", vantageComponents.VProgressSpinner);
app.component("VStats", vantageComponents.VStats);
app.component("VTab", vantageComponents.VTab);
app.component("VTabs", vantageComponents.VTabs);
app.component("VTabContent", vantageComponents.VTabContent);

app.use(router);
app.use(VueGtag, {
  appName: "We Are Auto",
  pageTrackerScreenviewEnabled: true,
  config: { id: import.meta.env.VITE_APP_GOOGLE_ANALYTICS_KEY },
}, router);

app.mount("#app");
