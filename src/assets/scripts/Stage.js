import Vue from 'vue';
import $ from '@/vendor/jQuery';
import Host from '@/lib/Host';
import Logger from '@/lib/Logger';
import HomePage from '@/vue/pages/HomePage';

Vue.config.productionTip = false;

Logger.debug(`isDebugHost: ${Host.isDebugHost}`);

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
