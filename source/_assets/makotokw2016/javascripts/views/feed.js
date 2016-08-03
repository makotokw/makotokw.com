makotokw.Views = makotokw.Views || {};

(function () {
    'use strict';

    makotokw.Views.FeedView = Backbone.View.extend({

        initialize: function () {
            _.bindAll(this, 'feedLoaded');
            this.listenTo(this.model, 'change:entries', this.feedLoaded);
        },

        feedLoaded: function() {
            this.render();
        },

        render: function () {
            var $content = $(this.el).empty();
            var entries = this.model.get('entries');
            var me = this;
            var $entries = $('<ul/>').addClass('feedArticleList list-unstyled').appendTo($content);
            _.each(entries, function (entry){
                _.extend(entry, {friendlyPublishedDate: me.dateFormat(new Date(entry.publishedDate))});
                $('<li/>').html(JST['feed_entry.html'](entry)).appendTo($entries);
            });
        },

        dateFormat: function(date) {
            var a = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
            for (var i = 0; i < a.length; i++) {
                if (a[i] < 10) {
                    a[i] = '0' + a[i];
                }
            }
            return a.join('/');
        }

    });

})();
