makotokw.Views = makotokw.Views || {};

(function () {
    'use strict';

    makotokw.Views.HomeView = Backbone.View.extend({
        events: {},
        feedNumEntries: 5,
        feedConfig: {
            'Blog': 'http://blog.makotokw.com/feed/',
            // http://qiita.com/Qiita/items/9c0a57ad98a511e566ed
            'Qiita': 'http://qiita.com/makoto_kw/feed.atom',
            'Github': 'http://github.com/makotokw.atom'
        },

        initialize: function () {
            this.loadFeeds();

            var $pageHome = this.$pageHome = $('.page-home');

            if (!makotokw.isMobile) {
                $pageHome.css('height', window.innerHeight + 'px');
                $pageHome.addClass('page-home-full');
                $(window).bind('resize.home', _.bind(this.onResizeWindow, this));
            }
            $pageHome.css('background-image', 'url("' + makotokw.staticAssetsPath + 'images/bg-home.png")');

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
            this.initializeScroller();
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
            // page routing
            this.router = new makotokw.Routers.HomeRouter();
            this.router.on('route:page', this.scrollToPage, this);

            // portfolio routing
            this.portfolioRouter = new makotokw.Routers.PortfolioRouter();
            this.portfolioRouter.on(
                'route:index',
                function () {
                    this.scrollToPortfolioPage();
                    this.portfolioListView.clearFilter();
                },
                this
            );
            this.portfolioRouter.on(
                'route:tag',
                function (tag) {
                    this.scrollToPortfolioPage();
                    this.portfolioListView.filter(tag);
                },
                this
            );
        },

        initializeScroller: function () {
            var $menuTop = $('#menuTop');
            var $menuItems = $menuTop.find('a');
            this.menuTopHeight = $menuTop.outerHeight() + 15;

            this.$scrollItems = $menuItems.map(function () {
                var href = $(this).attr('href');
                var matches = /#([\w]+)/.exec(href);
                if (matches) {
                    var target = '#page' + _.str.capitalize(matches[1]);
                    $(this).data('target', target);
                    var $item = $(target);
                    if ($item.length) {
                        return $item;
                    }
                }
            });
            var me = this;
            var onMenuClick = function (e) {
                var href = this.hash;
                // TODO: check external link
                if (href.length > 0) {
                    me.scrollToPage(href.replace('#', ''));
                    e.preventDefault();
                }
            };
            $menuItems.click(onMenuClick);
            this.$menuItems = $menuItems;

            $('#menuHome').find('.circle-menu').click(onMenuClick);

            // TODO: enable or delete
            //$(window).bind('scroll.home', _.bind(this.refreshHeader, this));
        },

        onLoad: function () {
            $(function () {
                Backbone.history.start();
            });
        },

        onResizeWindow: function (/*e*/) {
            this.$pageHome.css('height', window.innerHeight + 'px');
        },

        findCurrentPage: function() {
            var scrollTop = $(window).scrollTop() + this.menuTopHeight;
            var $pages = this.$scrollItems.map(function () {
                if ($(this).offset().top < scrollTop) {
                    return this;
                }
            });
            return ($pages.length) ? $pages[$pages.length - 1] : null;
        },

        refreshHeader: function () {
            var $currentPage = this.findCurrentPage();
            if ($currentPage) {
                var currentPageId = '#' + $currentPage.attr('id')|| '';
                this.$menuItems.each(function () {
                    if ($(this).data('target') === currentPageId) {
                        $(this).parent().addClass('active');
                    } else {
                        $(this).parent().removeClass('active');
                    }
                });
            }
        },

        scrollToPage: function (page) {

            console.log('scrollToPage', page);

            var target = '#page' + _.str.capitalize(page);
            var $target = $(target);
            if ($target.length === 0) {
                return;
            }

            var offsetTop = target === '#pageHome' ? 0 : $target.offset().top - this.menuTopHeight;

            // TODO: isMobile
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, window.speed, 'easeInOutExpo');
        },

        scrollToPortfolioPage: function() {
            var $currentPage = this.findCurrentPage();
            if ($currentPage) {
                if ($currentPage.attr('id') === 'pagePortfolio') {
                    return;
                }
            }
            this.scrollToPage('portfolio');
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
                model.loadFeed(this.feedNumEntries);
            }, this);
        }
    });

})();
