// noinspection JSUnusedGlobalSymbols

import 'bootstrap';
import 'github-repo-widget.js';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Headroom from 'headroom.js/dist/headroom';
import 'headroom.js/dist/jQuery.headroom';
import { createApp, App } from 'vue';
import Logger from '@/lib/logger';
import VueApp from '@/vue/App.vue';
import VueFilters from '@/vue/filters/index';

type AddThisConfig = {
  data_track_addressbar?: boolean,
};

declare global {
  interface Window {
    jQuery: typeof jQuery,
    Headroom: Headroom,
    addthis_config: AddThisConfig
  }
  interface JQuery {
    headroom(options?: HeadroomOptions): JQuery
  }
}

const $ = window.jQuery;
const StickyHeaderTop = 100;

class Stage {
  private vueApp!: App;

  get lang(): string {
    if (document.location && document.location.pathname) {
      if (document.location.pathname.match(/^\/ja\//)) {
        return 'ja';
      }
    }
    return 'en';
  }

  get userLang(): string {
    const userLanguage = navigator.language || '';
    return ['ja'].find((langCode) => userLanguage.substring(0, 2) === langCode) || 'en';
  }

  get isTopPage(): boolean {
    return ($('#app').length > 0);
  }

  init() {
    this.redirectPageByContentNegotiation();
    Stage.initHeadroom();
    Stage.initAddThis();
    if (this.isTopPage) {
      this.initTopPage();
    }
  }

  private static redirectPage(dest: string): void {
    if (window.location.replace) {
      window.location.replace(dest);
    } else {
      window.location.href = dest;
    }
  }

  private redirectPageByContentNegotiation(): void {
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
      Stage.redirectPage(`/${this.userLang}${pathname}${document.location.search}${document.location.hash}`);
    }
  }

  private static initHeadroom(): void {
    window.Headroom = Headroom;
    $('#mainNavBar').headroom({
      offset: StickyHeaderTop,
    });
  }

  private static initAddThis(): void {
    // remove hash http://support.addthis.com/customer/portal/questions/352733-how-to-remove-hash-from-url-
    const addthisConfig = window.addthis_config || {};
    addthisConfig.data_track_addressbar = false;
    window.addthis_config = addthisConfig;
  }

  private initTopPage(): void {
    const app = createApp(VueApp, {
      lang: this.lang,
    });
    app.config.globalProperties.$filters = VueFilters;
    app.mount('#app');
    this.vueApp = app;
  }
}

export default new Stage();
