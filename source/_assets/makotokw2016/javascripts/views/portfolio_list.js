makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  /**
   * PortfolioListView with isotope
   */
  makotokw.Views.PortfolioListView = Backbone.View.extend({
    tagName: 'div',
    className: 'portfolioList',
    template: JST['portfolio_list.html'],

    filters: {},
    events: {},

    initialize: function (/*options*/) {
      _.bindAll(this, 'render');
      this.collection.bind('sync', this.render);
    },

    clearFilter: function () {
      this.$content.isotope({filter: ''});
    },

    filter: function (tag) {
      this.$content.isotope({filter: '.portfolio-' + tag});
    },

    render: function () {
      var $el = $(this.el).empty();
      if (!this.collection.length) {
        return this;
      }
      this.$content = $el;
      this.collection.each(function (model) {
        var view = new makotokw.Views.PortfolioItemView({model: model});
        this.$content.append(view.render().el);
      }, this);

      var me = this;
      setTimeout(
        function () {
          me.$content.isotope({
            itemSelector: '.portfolioItem',
            layoutMode: 'masonry'
          });
        },
        1
      );

      return this;
    }

  });

})();
