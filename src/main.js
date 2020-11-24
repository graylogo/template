import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../public/css/reset.css"; // 样式初始化
import "./theme/index.css";
import "./plugins/element.js";
import ElementUI from "element-ui";
import axios from "axios";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
