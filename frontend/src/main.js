import Vue from 'vue'
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fab, fas, far);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = true;

Vue.use(VueCarousel);
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
