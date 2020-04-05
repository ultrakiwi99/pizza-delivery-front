import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Api from './api/Api';

Vue.config.productionTip = false;

Vue.prototype.$api = new Api(process.env.VUE_APP_API_ADDR, store);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app');
