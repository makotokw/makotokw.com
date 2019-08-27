makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  /**
   * StageView = ApplicationView
   */
  makotokw.Views.StageView = Backbone.View.extend({

    // stickyHeaderTop: 100,

    constructor: function () {
      if (!makotokw.Views.StageView.instance) {
        makotokw.Views.StageView.instance = this;
        Backbone.View.apply(makotokw.Views.StageView.instance, arguments);
      }
      return makotokw.Views.StageView.instance;
    },

    initialize: function () {
      // $('#mainNavBar').headroom({
      //   offset: this.stickyHeaderTop
      // });
    }
  });
})();
