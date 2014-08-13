/*global makotokw, Backbone, google*/

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

        loadFeed: function() {
            var me = this;
            var feed = new google.feeds.Feed(this.get('url'));
            feed.load(function (result) {
                var f = result.feed || {};
                me.set('entries', f.entries ? f.entries : []);
            });
        }

    });

})();
