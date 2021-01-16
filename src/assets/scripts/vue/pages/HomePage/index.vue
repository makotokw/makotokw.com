<!--suppress HtmlUnknownTarget, JSUnresolvedVariable -->
<template>
  <div>
    <section id="portfolio" class="topSection topSection-portfolio">
      <div class="container">
        <div class="topSectionContent">
          <div class="row">
            <div class="col-md-6">
              <div class="topSubSection topSubSection-software">
                <h3 class="topSubSectionTitle">
                  <i class="fa fa-briefcase" /> Software
                </h3>
                <the-home-recent-portfolio :num="feedNumEntries" />
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
                  <i class="fab fa-github" /> Code
                </h3>
                <the-home-git-hub :user-name="site.author.github" :num-of-repo="feedNumEntries" />
                <div class="topSubSectionFooter">
                  <a :href="site.github_url" class="btn archiveButton" title="GitHub Archives" target="_blank">Archives</a>
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
                <h3 class="topSubSectionTitle">
                  <i :class="blog.iconClass" /> Blog
                </h3>
                <div class="feedContent feedContent-blog">
                  <home-recent-post :url="blog.feedUrl" :num="feedNumEntries" :link-target="blog.linkTarget" />
                </div>
                <div class="topSubSectionFooter">
                  <a :href="blog.url" class="btn archiveButton" title="Blog Archives" :target="blog.linkTarget">Archives</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="topSubSection topSubSection-qiita">
                <h3 class="topSubSectionTitle">
                  <i class="fas fa-search" /> Qiita
                </h3>
                <div class="feedContent feedContent-qiita">
                  <home-recent-post :url="qiita.feedUrl" :num="feedNumEntries" />
                </div>
                <div class="topSubSectionFooter">
                  <a :href="qiita.url" class="btn archiveButton" title="Qiita Archives" target="_blank">Archives</a>
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
/** @var {Site} site */
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
  props: {
    lang: {
      type: String,
      default: 'en',
    },
  },
  data() {
    const isJa = this.lang === 'ja';
    return {
      site,
      feedNumEntries: 5,
      blog: {
        url: isJa ? site.blog_ja_url : `${site.path}/blog/`,
        feedUrl: isJa ? `${site.blog_ja_url}/feed/` : `${site.path}/atom.xml`,
        linkTarget: isJa ? '_blank' : '_self',
        iconClass: isJa ? 'fab fa-wordpress-simple' : 'fa fa-book',
      },
      qiita: {
        url: site.qiita_url,
        // https://qiita.com/Qiita/items/9c0a57ad98a511e566ed
        feedUrl: 'https://qiita.com/makoto_kw/feed.atom',
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
