window.makotokw = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    isTopPage: false,
    isMobile: false,
    staticAssetsPath: '/assets/makotokw2016/',

    init: function () {
        'use strict';

        _.mixin(_.string.exports());

        this.isMobile = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i) && !Modernizr.draganddrop;
        this.stageView = new makotokw.Views.StageView();
        if (this.isTopPage) {
            this.currentView = new makotokw.Views.HomeView();
        }
    }
};

(function ($) {
    'use strict';

    // bootstrap-material-design
    $.material.init();

    // console.log
    if (!window.console) {
        window.console = {
            log: function (a) {
                return a;
            }
        };
    }

    function redirectPage(dest) {
        if (window.location.replace) {
            window.location.replace(dest);
        } else {
            window.location = dest;
        }
    }

    function redirectPageByContentNegotiation() {
        // content negotiation on top page
        var referer = document.referrer;
        if ($.type(referer) === 'string' && referer.length > 0) {
            if (!document.location || !document.location.origin) {
                return;
            }
            // redirect only a referer is a external url
            if (referer.indexOf(document.location.origin) !== 0) {
                var userLanguage = navigator.language || navigator.userLanguage;
                var langCodes = ['ja'];
                for (var i = 0; i < langCodes.length; i++) {
                    var langCode = langCodes[i];
                    if (userLanguage.substr(0, 2) === langCodes[i]) {
                        var pathname = document.location.pathname || '';
                        if ($.type(pathname) === 'string') {
                            if (pathname.match(new RegExp('^/' + langCode + '(/|$)'))) {
                                return;
                            }
                        }
                        redirectPage('/' + langCodes[i] + pathname + document.location.search + document.location.hash);
                        return;
                    }
                }
            }
        }
    }

    redirectPageByContentNegotiation();

    /*jshint camelcase: false */
    // remove hash http://support.addthis.com/customer/portal/questions/352733-how-to-remove-hash-from-url-
    var addthis_config = window.addthis_config || {};
    addthis_config.data_track_addressbar = false;
    window.addthis_config = addthis_config;
    /*jshint camelcase: true */

    if ($('.topSection').length > 0) { // TBD
        makotokw.isTopPage = true;
    }
    $(document).ready(function () {
        makotokw.init();
    });
})(jQuery);


