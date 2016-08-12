makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  makotokw.Views.RecentPortfolioListView = Backbone.View.extend({
    tagName: 'div',
    className: 'recentPortfolioList',
    template: JST['recent_portfolio_list.html'],

    filters: {},
    events: {},

    initialize: function (/*options*/) {
      _.bindAll(this, 'render');
      this.collection.bind('sync', this.render);
    },

    render: function () {
      var $el = $(this.el).empty();
      if (!this.collection.length) {
        return this;
      }
      this.$content = $el;
      this.collection.each(function (model) {
        var view = new makotokw.Views.PortfolioItemView({
          model: model,
          template: JST['recent_portfolio_item.html']
        });
        this.$content.append(view.render().el);
      }, this);
      return this;
    }
  });
})();
