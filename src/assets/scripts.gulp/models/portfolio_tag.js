makotokw.Models = makotokw.Models || {};

(function () {
  'use strict';

  makotokw.Models.PortfolioTagModel = Backbone.Model.extend({
    url: '',
    defaults: {
      name: '',
      category: '',
      selected: false
    }
  });

})();
