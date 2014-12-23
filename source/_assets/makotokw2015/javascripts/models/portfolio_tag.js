/*global makotokw, Backbone*/

makotokw.Models = makotokw.Models || {};

(function () {
    'use strict';

    makotokw.Models.PortfolioTagModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            name: '',
            category: '',
            selected: false
        }
    });

})();
