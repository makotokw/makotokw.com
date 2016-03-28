makotokw.Collections = makotokw.Collections || {};

(function () {
    'use strict';

    makotokw.Collections.PortfolioCollection = Backbone.Collection.extend({

        model: makotokw.Models.PortfolioModel,

        initialize: function (models, options) {
            this.url = options.url;
        }

    });

})();
