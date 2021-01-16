<template>
  <div>
    <template v-if="repos.length === 0">
      <i class="fa fa-spinner fa-spin" />
      Loading...
    </template>
    <template v-else>
      <div v-for="repo in repos" :key="repo.id" class="entry">
        <div class="entry-header">
          <span class="entry-date">
            {{ $filters.moment(repo.pushed_at, 'YYYY/MM/DD') }}
          </span>
          <span class="entry-title">
            <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
            <span><i class="fa fa-star" aria-hidden="true" />{{ repo.stargazers_count }}</span>
          </span>
        </div>
        <p class="entry-summary">
          {{ repo.description }}
        </p>
      </div>
    </template>
  </div>
</template>

<script>
import GitHub from '@/lib/GitHub';

export default {
  name: 'TheHomeGitHub',
  props: {
    userName: {
      type: String,
      required: true,
    },
    numOfRepo: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      repos: [],
    };
  },
  created() {
    this.gitHub = new GitHub({ userName: this.userName });
    this.gitHub.fetchRepos().then((repos) => {
      this.repos = repos.filter((repo) => repo.stargazers_count > 3).slice(0, this.numOfRepo);
    });
  },
};
</script>

<style lang="scss" scoped>
</style>
