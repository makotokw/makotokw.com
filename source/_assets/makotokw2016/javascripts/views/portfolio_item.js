makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  makotokw.Views.PortfolioItemView = Backbone.View.extend({
    tagName: 'div',
    className: 'portfolioItem',
    template: JST['portfolio_item.html'],

    initialize: function(options) {
      if (options.template) {
        this.template = options.template;
      }
    },

    render: function () {
      var attributes = this.model.attributes;

      // Add 'portfolio-* ' class to portfolio element to filter by
      // add size and category as className
      var cls = [];
      _.each(['tile_size', 'category'], function (element) {
        if (!_(attributes[element]).isBlank()) {
          cls.push('portfolioItem-' + makotokw.Views.PortfolioTagView.toTagClassName(attributes[element]));
        }
      });
      // add
      _.each(['tags', 'display_tags'], function (element) {
        _.each(attributes[element], function (tagId) {
          cls.push('portfolioItem-' + tagId);
        });
      });
      var $el = $(this.el)
          .html(this.template(this.model.attributes))
          .addClass(cls.join(' '))
        ;

      /*jshint camelcase: false */
      // append Tags to display
      var $tags = $el.find('.portfolioItem-tags');
      _.each(attributes.display_tags, function (tagId) {
          var tag = makotokw.portfolioTagCollection.get(tagId);
          if (!tag) {
            console.log('unknown tagId: ' + tagId);
            return;
          }
          var tagView = new makotokw.Views.PortfolioTagView({model: tag});
          $tags.append(tagView.render().el);
        }
      );

      return this;
    }

  });

})();
