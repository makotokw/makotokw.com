/*global makotokw, Backbone, _*/

makotokw.Models = makotokw.Models || {};

(function () {
    'use strict';

    makotokw.Models.PortfolioModel = Backbone.Model.extend({

        url: '',

        initialize: function () {
        },

        /*jshint camelcase: false */
        defaults: {
            title: '',
            summary: '',
            category: '',
            status: 'active', // active, inactive, maintanance
            tile_size: 'default', // default, mini, large
            thumbnail: makotokw.staticAssetsPath + 'images/icon.png',
            url: '',
            tags: [], // array of tag id
            display_tags: [], // array of tag id
            copyright_year: null,
            last_updated_year: null
        },

        validate: function (/*attrs, options*/) {
        },

        parse: function (response/*, options*/) {
            response.display_tags = response.display_tags || [];

            if (!_(response.category).isBlank()) {
                response.display_tags.push(response.category);
            }

            if (response.copyright_year > 0) {
                response.display_tags.push(response.copyright_year);
            }
            return response;
        }
    });

})();
