import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueFormulate from '@braid/vue-formulate';
import Buefy from 'buefy';


Vue.use(VueFormulate)
Vue.use(Buefy)

console.log(VueFormulate);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VueFormulate,

  render: h => h(App)
}).$mount('#app')
