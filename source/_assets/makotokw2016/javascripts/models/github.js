makotokw.Models = makotokw.Models || {};

(function () {
  'use strict';

  makotokw.Models.GitHubModel = Backbone.Model.extend({

    defaults: {
      user: false,
      sumStarts: 0,
      repos: [],
      isLoaded: false
    },

    updateLoadedFlag: function() {
      if (this.attributes.repos.length > 0) {
        this.set('isLoaded', true);
      }
    },

    load: function(numRepos) {
      this.loadRepos(numRepos);
    },

    loadRepos: function (numRepos) {
      var userName = this.get('userName');
      if (!userName) {
        return;
      }
      numRepos = numRepos || 30;
      var me = this;
      var today = moment().format('YYYYMMDD');
      // https://developer.github.com/v3/repos/
      $.ajax('https://api.github.com/users/' + userName + '/repos?sort=pushed&per_page=100', {
        dataType: 'jsonp',
        jsonpCallback : '_callback' + today,
        cache: true
      }).done(function (response) {
        if ($.isArray(response.data)) {
          var count = 0;
          var sumStarts = 0;
          var repos = _.filter(response.data, function (repo) {
            //noinspection JSUnresolvedVariable
            if (repo.fork) {
              return false;
            }
            /*jshint camelcase: false */
            //noinspection JSUnresolvedVariable
            var stars = repo.stargazers_count;
            /*jshint camelcase: true */

            sumStarts += repo.stars;
            if (stars === 0) {
              return false;
            }
            return (count++ < numRepos);
          });
          me.set('sumStarts', sumStarts);
          me.set('repos', repos);
          me.updateLoadedFlag();
        }
      });
    }
  });

})();
