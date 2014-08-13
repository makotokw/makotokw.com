/*global makotokw, _, Backbone*/

makotokw.Views = makotokw.Views || {};

(function () {
    'use strict';

    makotokw.Views.HomeView = Backbone.View.extend({
        events: {
        },
        feedConfig: {
            'Blog': 'http://blog.makotokw.com/feed/',
            // http://qiita.com/Qiita/items/9c0a57ad98a511e566ed
            'Qiita': 'http://qiita.com/makoto_kw/feed.atom',
            'Github': 'http://github.com/makotokw.atom'
        },

        initialize: function () {
            console.log('home.initialize');
            this.loadFeeds();

            var $pageHome = this.$pageHome = $('.page-home');

            if (!makotokw.isMobile) {
                $pageHome.css('height', window.innerHeight + 'px');
                $pageHome.addClass('page-home-full');
                $(window).bind('resize.home', _.bind(this.onResizeWindow, this));
            }
            $pageHome.css('background-image', 'url("/assets/site/images/bg-home.png")');

            var me = this;
            $('body').queryLoader2({
                barColor: '#2C3E50',
                backgroundColor: '#fff',
                percentage: true,
                barHeight: 30,
                completeAnimation: 'grow',
                onComplete: function () {
                    me.onLoad();
                }
            });

            $('#prePage').fadeOut().remove();

            this.initializePortfolio();
            this.initializeRouter();
        },

        initializePortfolio: function () {

            // create portfolio and tag connection
            makotokw.portfolioTagCollection = new makotokw.Collections.PortfolioTagCollection([], {
                url: '/data/portfolio_tag.json'
            });
            makotokw.portfolioCollection = new makotokw.Collections.PortfolioCollection([], {
                url: '/data/portfolio.json'
            });
            // request portfolio-list after portfolio-tag
            makotokw.portfolioTagCollection.on('sync', function () {
                makotokw.portfolioCollection.fetch();
            });

            this.portfolioTagListView = new makotokw.Views.PortfolioTagListView({
                collection: makotokw.portfolioTagCollection
            });
            this.portfolioListView = new makotokw.Views.PortfolioListView({
                collection: makotokw.portfolioCollection
            });

            $('#portfolioTagListView').empty().append(this.portfolioTagListView.$el);
            this.portfolioTagListView.render();

            $('#portfolioListView').empty().append(this.portfolioListView.$el);
            this.portfolioListView.render();

            makotokw.portfolioTagCollection.fetch();
        },

        initializeRouter: function () {
            this.router = new makotokw.Routers.HomeRouter();
            this.router.on('route:page', this.scrollToPage, this);

            //
            this.portfolioRouter = new makotokw.Routers.PortfolioRouter();
            this.portfolioRouter.on(
                'route:index',
                function () {
                    this.portfolioListView.clearFilter();
                },
                this
            );
            this.portfolioRouter.on(
                'route:tag',
                function (tag) {
                    this.portfolioListView.filter(tag);
                },
                this
            );
        },

        onLoad: function () {
            $(function () {
                Backbone.history.start();
            });
        },

        onResizeWindow: function (/*e*/) {
            this.$pageHome.css('height', window.innerHeight + 'px');
        },

        scrollToPage: function (page) {
            var target = '#page' + _.str.capitalize(page);
            var topMenuHeight = makotokw.Views.StageView.prototype.stickyHeaderTop;
            var offsetTop = target === '#pageHome' ? 0 : $(target).offset().top - topMenuHeight + 30;
            // TODO: isMobile
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, window.speed, 'easeInOutExpo');
        },

        loadFeeds: function () {
            _.each(this.feedConfig, function (element, key) {
                var model = new makotokw.Models.FeedModel({
                    url: element
                });
                new makotokw.Views.FeedView({
                    el: $('#feed' + key + 'Content'),
                    model: model
                });
                model.loadFeed();
            });
        }
    });

})();
