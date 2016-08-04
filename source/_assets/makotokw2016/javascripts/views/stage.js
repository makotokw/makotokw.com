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
      this.$mainNavBar = $('#mainNavBar');
      if (makotokw.isTopPage) {
        $(window).bind('scroll.stage', _.bind(this.stickyHeader, this));
        this.$mainNavBar.hide();
      } else {
        $(window).bind('scroll.stage', _.bind(this.stickyFooter, this));
        $(window).bind('resize.stage', _.bind(this.stickyFooter, this));
        this.$mainNavBar.show();
        this.stickyFooter();
      }
    },

    stickyHeader: function (/*e*/) {
      if ($(window).scrollTop() > this.stickyHeaderTop) {
        if (makotokw.isTopPage) {
          this.$mainNavBar.fadeIn();
        } else {
          this.$mainNavBar.fadeOut();
        }
      } else {
        if (makotokw.isTopPage) {
          this.$mainNavBar.fadeOut();
        } else {
          this.$mainNavBar.fadeIn();
        }
      }
    },

    stickyFooter: function (/*e*/) {
      var $margin = $('#footerMargin');
      var docHeight = $(document.body).height() - $margin.height();
      if (docHeight < $(window).height()) {
        var diff = $(window).height() - docHeight;
        $margin.height(diff);
      }
    }

  });
})();
