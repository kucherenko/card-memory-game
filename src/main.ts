import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "vuesax/dist/vuesax.css"; //Vuesax styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Vuesax from "vuesax";

Vue.use(Vuesax);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
