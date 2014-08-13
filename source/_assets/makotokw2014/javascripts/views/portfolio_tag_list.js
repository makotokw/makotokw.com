/*global makotokw, Backbone, JST*/

makotokw.Views = makotokw.Views || {};

(function () {
    'use strict';

    makotokw.Views.PortfolioTagListView = Backbone.View.extend({

        template: JST['portfolio_tag_list'],

        className: 'portfolio-tag-list-view',

        events: {
            'click .portfolio-tag': 'tagClick'
        },

        initialize: function (/*options*/) {
            _.bindAll(this, 'render', 'tagClick');
            this.collection.bind('sync', this.render);
        },

        tagClick: function (e) {
            var $this = $(e.toElement);
            var tagId = $this.attr('data-tag');
            var url = _(tagId).isBlank() ? '/portfolios' : '/portfolios/tag/' + tagId;
            Backbone.history.navigate(url, {trigger: true});
        },

        render: function () {
            var $el = $(this.el).empty();
            if (!this.collection.length) {
                return this;
            }

            // load JST template
            $(this.el).empty().html(this.template());
            var group = this.collection.groupBy(function (portfolioTagModel) {
                return portfolioTagModel.get('category');
            });
            _.each(group, function(value, key, list){
                $el.append(JST['portfolio_tag_category']({
                    title: key,
                    list: value
                }));
            });

            return this;
        }

    });

})();
