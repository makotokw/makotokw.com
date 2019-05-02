makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  makotokw.Views.RecentPortfolioListView = Backbone.View.extend({
    tagName: 'div',
    className: 'recentPortfolioList',
    template: JST['recent_portfolio_list.html'],

    filters: {},
    events: {},

    recentItems: [],

    initialize: function (/*options*/) {
      _.bindAll(this, 'onCollectionSynced');
      this.collection.bind('sync', this.onCollectionSynced);
    },

    onCollectionSynced: function () {
      this.recentItems = this.collection.where({status: 'active'});
      this.recentItems = _.sortBy(this.recentItems, function (item) {
        /*jshint camelcase: false */
        return item.attributes.last_updated_year + '-' + item.attributes.copyright_year;
      }).reverse();
      this.render();
    },

    render: function () {
      var $el = $(this.el).empty();
      if (!this.recentItems.length) {
        return this;
      }
      this.$content = $el;
      _.each(this.recentItems, function (model) {
        var view = new makotokw.Views.PortfolioItemView({
          model: model,
          className: 'entry portfolioItem',
          template: JST['recent_portfolio_item.html']
        });
        this.$content.append(view.render().el);
      }, this);
      return this;
    }
  });
})();
