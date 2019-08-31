<!--suppress HtmlUnknownTarget, JSUnresolvedVariable -->
<template>
  <div>
    <section id="portfolio" class="topSection topSection-portfolio">
      <div class="container">
        <div class="topSectionContent">
          <div class="row">
            <div class="col-md-6">
              <div class="topSubSection topSubSection-software">
                <h3 class="topSubSectionTitle">Software</h3>
                <the-home-recent-portfolio :num="resentPortfolioEntries"></the-home-recent-portfolio>
                <div class="topSubSectionFooter">
                  <a href="./portfolio/" class="btn archiveButton" title="Portfolio Archives">
                    Archives
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="topSubSection topSubSection-github">
                <h3 class="topSubSectionTitle">
                  <i class="fa fa-github" aria-hidden="true"></i> Code
                </h3>
                <the-home-git-hub :user-name="site.author.github" :num-of-repo="gitHubRepoEntries"></the-home-git-hub>
                <div class="topSubSectionFooter">
                  <a :href="site.github_url" class="btn archiveButton" title="GitHub Archives"
                     target="_blank">Archives</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="article" class="topSection topSection-article">
      <div class="container">
        <div class="topSectionContent">
          <div class="row">
            <div class="col-md-6">
              <div class="topSubSection topSubSection-blog">
                <h3 class="topSubSectionTitle">Blog</h3>
                <div class="feedContent feedContent-blog">
                  <home-recent-post :url="feedConfig.blog"></home-recent-post>
                </div>
                <div class="topSubSectionFooter">
                  <a :href="site.blog_ja_url" class="btn archiveButton" title="Blog Archives" target="_blank">Archives</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="topSubSection topSubSection-qiita">
                <h3 class="topSubSectionTitle">Qiita</h3>
                <div class="feedContent feedContent-qiita">
                  <home-recent-post :url="feedConfig.qiita"></home-recent-post>
                </div>
                <div class="topSubSectionFooter">
                  <a :href="site.qiita_url" class="btn archiveButton" title="Qiita Archives" target="_blank">Archives</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import site from '@assets/fixtures/site.yml';
import TheHomeGitHub from './TheHomeGitHub';
import TheHomeRecentPortfolio from './TheHomeRecentPortfolio';
import HomeRecentPost from './HomeRecentPost';

export default {
  name: 'HomePage',
  components: {
    TheHomeGitHub,
    TheHomeRecentPortfolio,
    HomeRecentPost,
  },
  data() {
    return {
      site,
      resentPortfolioEntries: 8,
      gitHubRepoEntries: 8,
      feedNumEntries: 5,
      feedConfig: {
        blog: 'https://blog.makotokw.com/feed/',
        // https://qiita.com/Qiita/items/9c0a57ad98a511e566ed
        qiita: 'https://qiita.com/makoto_kw/feed.atom',
      },
    };
  },
};
</script>

<style>
</style>
