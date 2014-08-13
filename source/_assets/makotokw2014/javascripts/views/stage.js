/*global makotokw, _, Backbone*/
makotokw.Views = makotokw.Views || {};

(function () {
    'use strict';

    /**
     * StageView = ApplicationView
     */
    makotokw.Views.StageView = Backbone.View.extend({

        stickyHeaderTop: 100,

        constructor: function () {
            if (!makotokw.Views.StageView.instance) {
                makotokw.Views.StageView.instance = this;
                Backbone.View.apply(makotokw.Views.StageView.instance, arguments);
            }
            return makotokw.Views.StageView.instance;
        },

        initialize: function () {
            console.log('stage.initialize');
            this.$menuTop = $('#menuTop');
            $(window).bind('scroll.stage', _.bind(this.onScrollWindow, this));
        },

        onScrollWindow: function (/*e*/) {
            if ($(window).scrollTop() > this.stickyHeaderTop) {
                this.$menuTop.fadeIn();
            } else {
                this.$menuTop.fadeOut();
            }
        }
    });
})();
