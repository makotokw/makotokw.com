/*global makotokw, $, _, google, Modernizr*/

window.makotokw = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},

    init: function () {
        'use strict';

        _.mixin(_.string.exports());

        this.isTopPage = $('.feed-content').length > 0; // TBD
        this.isMobile = navigator.userAgent.match(/(iPhone)|(iPod)|(android)|(webOS)/i) && !Modernizr.draganddrop;
        this.stageView = new makotokw.Views.StageView();
        if (this.isTopPage) {
            this.currentView = new makotokw.Views.HomeView();
        }
    }

};

(function () {
    'use strict';
    if (!window.console) {
        window.console = {
            log: function (a) {
                return a;
            }
        };
    }
    if ($('.feed-content').length > 0) {
        google.load('feeds', '1');
        google.setOnLoadCallback(function () {
            makotokw.init();
        });
    } else {
        $(document).ready(function () {
            makotokw.init();
        });
    }
})();


