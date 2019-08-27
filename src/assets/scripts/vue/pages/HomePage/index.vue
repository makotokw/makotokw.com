<template>
  <div>
    <section id="portfolio" class="topSection topSection-portfolio">
      <div class="container">
        <div class="topSectionContent">
          <div class="row">
            <div class="col-md-6">
              <div class="topSubSection topSubSection-software">
                <h3 class="topSubSectionTitle">Software</h3>
                <recent-portfolio></recent-portfolio>
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
                <git-hub></git-hub>
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
  </div>
</template>

<script>
import site from '@assets/fixtures/site.yml';
import GitHub from './GitHub';
import RecentPortfolio from './RecentPortfolio';

export default {
  name: 'HomePage',
  components: {
    GitHub,
    RecentPortfolio,
  },
  data() {
    return {
      site,
    };
  },
};
</script>

<style>
</style>
