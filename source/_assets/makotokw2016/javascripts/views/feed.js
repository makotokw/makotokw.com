makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  makotokw.Views.FeedView = Backbone.View.extend({

    initialize: function () {
      _.bindAll(this, 'feedLoaded');
      this.listenTo(this.model, 'change:entries', this.feedLoaded);
    },

    feedLoaded: function () {
      this.render();
    },

    render: function () {
      var $entries = $('<ul/>').addClass('feedArticleList list-unstyled');
      _.each(this.model.get('entries'), function (entry) {
        $('<li/>').html(JST['feed_entry.html'](entry)).appendTo($entries);
      });
      $(this.el).empty().append($entries);
    }
  });
})();
