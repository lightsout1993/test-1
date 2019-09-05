import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from './App.vue';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app');
