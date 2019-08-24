import Vue from 'vue';
import HomePage from './pages/HomePage';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(HomePage),
}).$mount('#app');
