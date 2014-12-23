/*global makotokw, Backbone*/

makotokw.Routers = makotokw.Routers || {};

(function () {
    'use strict';

    makotokw.Routers.PortfolioRouter = Backbone.Router.extend({
        routes: {
            'portfolios': 'index', // will call PortfolioListView.clearFilter
            'portfolios/tag/:tag': 'tag' // will call PortfolioListView.filter
        }
    });

})();
