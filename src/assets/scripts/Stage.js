import 'bootstrap-sass';
import 'bootstrap-material-design';
import 'github-repo-widget.js';
import Headroom from 'headroom.js/dist/headroom';
import 'headroom.js/dist/jQuery.headroom';
import Vue from 'vue';
import Logger from '@/lib/Logger';
import VueApp from '@/vue/App';
import VueFilters from '@/vue/filters';

const $ = window.jQuery;
const StickyHeaderTop = 100;

// eslint-disable-next-line guard-for-in,no-unused-vars,no-restricted-syntax
for (const name in VueFilters) {
  Vue.filter(name, VueFilters[name]);
}
Vue.config.productionTip = false;

class Stage {
  init() {
    this.redirectPageByContentNegotiation();
    this.initHeadroom();
    this.initAddThis();
    this.initBootstrap();
    if (this.isTopPage) {
      this.initTopPage();
    }
  }

  redirectPage(dest) {
    if (window.location.replace) {
      window.location.replace(dest);
    } else {
      window.location = dest;
    }
  }

  redirectPageByContentNegotiation() {
    // content negotiation on top page
    if (!document || !document.location) {
      return;
    }
    const referer = document.referrer || '';
    const pathname = document.location.pathname || '';
    const origin = document.location.origin || '';
    Logger.debug(`refer = ${referer}, origin = ${origin}, path = ${pathname}`);

    // redirect only a referer is a external url
    if (!origin || referer.indexOf(origin) === 0) {
      return;
    }
    if (this.lang === this.userLang || this.lang !== 'en' || pathname.match(new RegExp(`^/${this.userLang}(/|$)`))) {
      return;
    }
    if (pathname === '/' || pathname.match(/^\/portfolio(\/|)$/)) {
      this.redirectPage(`/${this.userLang}${pathname}${document.location.search}${document.location.hash}`);
    }
  }

  /**
   * @returns {string}
   */
  get userLang() {
    const userLanguage = navigator.language || '';
    return ['ja'].find((langCode) => userLanguage.substr(0, 2) === langCode) || 'en';
  }

  /**
   * @returns {string}
   */
  get lang() {
    if (document.location && document.location.pathname) {
      if (document.location.pathname.match(/^\/ja\//)) {
        return 'ja';
      }
    }
    return 'en';
  }

  initHeadroom() {
    window.Headroom = Headroom;
    $('#mainNavBar').headroom({
      offset: StickyHeaderTop,
    });
  }

  initAddThis() {
    // remove hash http://support.addthis.com/customer/portal/questions/352733-how-to-remove-hash-from-url-
    const addthisConfig = window.addthis_config || {};
    addthisConfig.data_track_addressbar = false;
    window.addthis_config = addthisConfig;
  }

  initBootstrap() {
    // bootstrap-material-design
    $.material.init();
  }

  /**
   * @returns {boolean}
   */
  get isTopPage() {
    return ($('#app').length > 0);
  }

  initTopPage() {
    this.vue = new Vue({
      el: '#app',
      render: (createElement) => createElement(VueApp, {
        props: {
          lang: this.lang,
        },
      }),
    });
  }
}

export default new Stage();
