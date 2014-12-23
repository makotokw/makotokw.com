/*global makotokw, _, Backbone, JST*/

makotokw.Views = makotokw.Views || {};

(function () {
    'use strict';

    makotokw.Views.PortfolioView = Backbone.View.extend({
        tagName: 'div',
        className: 'portfolio',
        template: JST['portfolio'],

        render: function () {
            var atts = this.model.attributes;

            // Add 'portfolio-* ' class to portfolio element to filter by
            // add size and category as className
            var cls = [];
            _.each(['tile_size', 'category'], function (element) {
                if (!_(atts[element]).isBlank()) {
                    cls.push('portfolio-' + makotokw.Views.PortfolioTagView.toTagClassName(atts[element]));
                }
            });
            // add
            _.each(['tags', 'display_tags'], function (element) {
                _.each(atts[element], function (tagId) {
                    cls.push('portfolio-' + tagId);
                });
            });
            var $el = $(this.el)
                .html(this.template(this.model.attributes))
                .addClass(cls.join(' '))
            ;

            /*jshint camelcase: false */
            // append Tags to display
            var $tags = $el.find('.portfolio-tags');
            _.each(atts.display_tags, function (tagId) {
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
