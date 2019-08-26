/* eslint-disable no-console */
import Vue from 'vue';
import $ from '@/vendor/jQuery';
import Host from '@/lib/Host';
import HomePage from '@/vue/pages/HomePage';

Vue.config.productionTip = false;

console.log(`isDebugHost=${Host.isDebugHost}`);

class Stage {
  init() {
    if (this.isTopPage()) {
      this.initTopPage();
    }
  }

  /**
   * @returns {boolean}
   */
  isTopPage() {
    return ($('.topSection').length > 0);
  }

  initTopPage() {
    this.vue = new Vue({
      render: (h) => h(HomePage),
    }).$mount('#app');
  }
}

export default new Stage();
