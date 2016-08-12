makotokw.Models = makotokw.Models || {};

(function () {
  'use strict';

  makotokw.Models.PortfolioModel = Backbone.Model.extend({

    url: '',

    /*jshint camelcase: false */
    defaults: {
      name: '',
      description: '',
      categories: [],
      status: 'active', // active, inactive, maintenance
      tile_size: 'default', // default, mini, large
      thumbnail: makotokw.staticAssetsPath + 'images/icon.png',
      url: '',
      tags: [], // array of tag id
      display_tags: [], // array of tag id
      copyright_year: null,
      last_updated_year: null
    },

    parse: function (response/*, options*/) {

      // translate attributes
      if (makotokw.lang !== 'en') {
        _.each(['name', 'description', 'url'], function (attributeName) {
          if (response[attributeName + '.' + makotokw.lang]) {
            response[attributeName] = response[attributeName + '.' + makotokw.lang];
          }
        });
      }

      // aggregate tags
      response.display_tags = response.display_tags || [];
      if (response.categories && response.categories.length > 0) {
        response.display_tags.push(response.categories);
      }
      if (response.copyright_year > 0) {
        response.display_tags.push(response.copyright_year);
      }
      return response;
    }
  });

})();
