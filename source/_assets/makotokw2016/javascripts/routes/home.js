makotokw.Routers = makotokw.Routers || {};

(function () {
  'use strict';

  makotokw.Routers.HomeRouter = Backbone.Router.extend({
    routes: {
      ':page': 'page'
    }
  });

})();
