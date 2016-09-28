makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  makotokw.Views.GitHubView = Backbone.View.extend({
    tagName: 'div',
    template: JST['github.html'],

    initialize: function () {
      _.bindAll(this, 'onLoaded');
      this.listenTo(this.model, 'change:isLoaded', this.onLoaded);
    },

    onLoaded: function () {
      this.render();
    },

    render: function () {
      $(this.el).html(this.template(this.model.attributes));
      return this;
    }
  });

})();
