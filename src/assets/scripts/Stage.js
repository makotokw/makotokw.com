import 'bootstrap-sass';
import 'bootstrap-material-design';
import 'github-repo-widget.js';
import Headroom from 'headroom.js/dist/headroom';
import 'headroom.js/dist/jQuery.headroom';
import Vue from 'vue';
import $ from '@/vendor/jQuery';
import Logger from '@/lib/Logger';
import VueApp from '@/vue/App';
import filters from '@/vue/filters';

// eslint-disable-next-line guard-for-in,no-unused-vars,no-restricted-syntax
for (const name in filters) {
  Vue.filter(name, filters[name]);
}
Vue.config.productionTip = false;

const stickyHeaderTop = 100;

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
    const referer = document.referrer;
    Logger.debug(`refer = ${referer}, origin = ${document.location.origin}`);
    if ($.type(referer) !== 'string' || referer.length) {
      return;
    }
    if (!document.location || !document.location.origin) {
      return;
    }
    // redirect only a referer is a external url
    if (referer.indexOf(document.location.origin) === 0) {
      return;
    }
    const userLanguage = navigator.language;
    const langCodes = ['ja'];
    for (let i = 0; i < langCodes.length; i++) {
      const langCode = langCodes[i];
      if (userLanguage.substr(0, 2) === langCodes[i]) {
        const pathname = document.location.pathname || '';
        if ($.type(pathname) === 'string') {
          if (pathname.match(new RegExp(`^/${langCode}(/|$)`))) {
            return;
          }
        }
        this.redirectPage(`/${langCodes[i]}${pathname}${document.location.search}${document.location.hash}`);
        return;
      }
    }
  }

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
      offset: stickyHeaderTop,
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
    // console.log($('body').getClass());
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
