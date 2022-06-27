import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import { routes } from "./routes";
import "./scss/custom-style.scss";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
