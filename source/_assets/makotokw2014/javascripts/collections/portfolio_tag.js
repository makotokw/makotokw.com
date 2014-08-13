/*global makotokw, Backbone*/

makotokw.Collections = makotokw.Collections || {};

(function () {
    'use strict';

    makotokw.Collections.PortfolioTagCollection = Backbone.Collection.extend({

        model: makotokw.Models.PortfolioTagModel,

        initialize: function (models, options) {
            this.url = options.url;
        }

    });

})();
