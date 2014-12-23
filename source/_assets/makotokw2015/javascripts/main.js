window.makotokw = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    isTopPage: false,
    isMobile: false,
    staticAssetsPath: '/assets/makotokw2015/',

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

    // console.log
    if (!window.console) {
        window.console = {
            log: function (a) {
                return a;
            }
        };
    }

    function redirectPage(dest){
        if (window.location.replace) {
            window.location.replace(dest);
        } else {
            window.location = dest;
        }
    }

    // content negotiation on top page
    var referer = document.referrer || '';
    if ($.type(referer) == 'string') {
        if (referer.indexOf(document.location.origin) !== 0) {
            var lang = navigator.language || navigator.userLanguage;
            var langCodes = ['ja'];
            for (var i = 0; i < langCodes.length; i++) {
                if (lang.substr(0, 2) == langCodes[i]) {
                    var pathname = document.location.pathname || '';
                    if ($.type(pathname) == 'string') {
                        if (pathname.match(new RegExp('^/' + lang + '(/|$)'))) {
                            break;
                        }
                    }
                    redirectPage('/' + langCodes[i] + pathname + document.location.search);
                    break
                }
            }
        }
    }

    if ($('.feed-content').length > 0) { // TBD
        makotokw.isTopPage = true;
        google.load('feeds', '1');
        google.setOnLoadCallback(function () {
            makotokw.init();
        });
    } else {
        $(document).ready(function () {
            makotokw.init();
        });
    }
})(jQuery);


