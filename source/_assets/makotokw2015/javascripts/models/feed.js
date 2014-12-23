/*global google*/
makotokw.Models = makotokw.Models || {};

(function () {
    'use strict';

    makotokw.Models.FeedModel = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
            entries: []
        },

        validate: function(/*attrs, options*/) {
        },

        parse: function(response/*, options*/)  {
            return response;
        },

        loadFeed: function(numEntries) {
            var me = this;
            // https://developers.google.com/feed/v1/devguide
            var feed = new google.feeds.Feed(this.get('url'));
            feed.setNumEntries(numEntries);
            feed.load(function (result) {
                var f = result.feed || {};
                me.set('entries', f.entries || []);
            });
        }

    });

})();
