import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import App from './App.vue';

Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.filter('formatMinutes', (value) => {
  const hours = Math.floor(value / 24);
  const minutes = value % 24;

  return `${hours}h ${minutes}m`;
});

new Vue({
  vuetify: new Vuetify(),
  render: h => h(App),
}).$mount('#app');
