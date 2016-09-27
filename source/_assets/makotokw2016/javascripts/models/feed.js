makotokw.Models = makotokw.Models || {};

(function () {
  'use strict';

  makotokw.Models.FeedModel = Backbone.Model.extend({

    url: '',

    initialize: function () {
    },

    defaults: {
      entries: []
    },

    validate: function (/*attrs, options*/) {
    },

    parse: function (response/*, options*/) {
      return response;
    },

    loadFeedByYql: function (numEntries) {
      var me = this;

      // https://developer.yahoo.com/yql/console/
      // select * from feednormalizer where url='http://example.com/rss' and output='atom_1.0'
      var yql = 'select * from feednormalizer where url=\'' + this.get('url') + '\' and output=\'atom_1.0\'';
      $.ajax('https://query.yahooapis.com/v1/public/yql', {
        data: {q: yql, format: 'json'},
        dataType: 'jsonp',
        cache: true
      }).done(function (data) {
        if (data && data.query && data.query.results && data.query.results) {
          var f = data.query.results.feed || {};
          var entries = [];
          _.each(f.entry || [], function (entry, index) {
            if (index < numEntries) {
              if (_.isObject(entry.title)) {
                entry.title = entry.title.content;
              }
              entry.link = entry.link.href;
              entry.publishedDate = entry.published;
              var minLength = 180;
              var contentText = $('<div/>').html(entry.content.content).text();
              entry.contentSnippet = contentText.length > minLength ? contentText.substr(0, minLength) + '...' : contentText;
              entries.push(entry);
            }
          });
          me.set('entries', entries);
        }
      });
    },

    loadFeed: function (numEntries) {
      this.loadFeedByYql(numEntries);
    }

  });

})();
