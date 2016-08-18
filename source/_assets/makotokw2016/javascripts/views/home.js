makotokw.Views = makotokw.Views || {};

(function () {
  'use strict';

  makotokw.Views.HomeView = Backbone.View.extend({
    events: {},
    feedNumEntries: 5,
    feedConfig: {
      'Blog': 'http://blog.makotokw.com/feed/',
      // http://qiita.com/Qiita/items/9c0a57ad98a511e566ed
      'Qiita': 'http://qiita.com/makoto_kw/feed.atom'
    },

    initialize: function () {
      this.initializeRouter();
      this.initializeHistory();
      this.initializeNavBar();
      this.initializePortfolio();
      this.loadFeeds();
    },

    initializeNavBar: function () {
      console.log('initializeNavBar');
      var $mainNavBar = $('#mainNavBar');
      var $navItems = $mainNavBar.find('a');
      this.mainNavBarHeight = $navItems.outerHeight() + 15;
      this.$scrollItems = $('#home,.topSection');
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

    initializeHistory: function () {
      $(function () {
        Backbone.history.start();
      });
    },

    initializePortfolio: function () {
      // create portfolio and tag connection
      makotokw.portfolioTagCollection = new makotokw.Collections.PortfolioTagCollection([], {
        url: '/data/portfolio_tags.json'
      });
      makotokw.portfolioCollection = new makotokw.Collections.PortfolioCollection([], {
        url: '/data/portfolios.json'
      });
      // request portfolio-list after portfolio-tag
      makotokw.portfolioTagCollection.on('sync', function () {
        makotokw.portfolioCollection.fetch();
      });

      this.recentPortfolioListView = new makotokw.Views.RecentPortfolioListView({
        collection: makotokw.portfolioCollection
      });
      $('#recentPortfolioList').empty().append(this.recentPortfolioListView.$el);
      this.recentPortfolioListView.render();

      // TODO: isotope version
      // this.portfolioTagListView = new makotokw.Views.PortfolioTagListView({
      //   collection: makotokw.portfolioTagCollection
      // });
      // this.portfolioListView = new makotokw.Views.PortfolioListView({
      //   collection: makotokw.portfolioCollection
      // });
      // $('#portfolioTagList').empty().append(this.portfolioTagListView.$el);
      // this.portfolioTagListView.render();
      // $('#portfolioList').empty().append(this.portfolioListView.$el);
      // this.portfolioListView.render();

      makotokw.portfolioTagCollection.fetch();
    },


    findCurrentPage: function () {
      var scrollTop = $(window).scrollTop() + this.mainNavBarHeight;
      var $pages = this.$scrollItems.map(function () {
        if ($(this).offset().top < scrollTop) {
          return this;
        }
      });
      return ($pages.length) ? $pages[$pages.length - 1] : null;
    },

    scrollToPage: function (page) {
      // console.log('scrollToPage', page);
      var target = '#' + page;
      var $target = $(target);
      if ($target.length === 0) {
        return;
      }

      var offsetTop = target === '#home' ? 0 : $target.offset().top - this.mainNavBarHeight;

      // TODO: isMobile
      $('html, body').stop().animate({
        scrollTop: offsetTop
      }, window.speed, 'easeInOutExpo');
    },

    scrollToPortfolioPage: function () {
      var $currentPage = this.findCurrentPage();
      if ($currentPage) {
        if ($currentPage.attr('id') === 'portfolio') {
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
