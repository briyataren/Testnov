import Vue from 'vue';
import axios from 'axios';
import dotenv from 'dotenv';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  dotenv,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount('#app');