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
            {{ $formatters.dateTime(repo.pushed_at, 'yyyy/MM/dd') }}
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

<script lang="ts">
import { defineComponent } from 'vue';
import GitHub, { GitHubRepo } from '@/lib/GitHub';

export default defineComponent({
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
      repos: [] as GitHubRepo[],
    };
  },
  created() {
    const gitHub = new GitHub(this.userName);
    gitHub.fetchRepos().then((repos) => {
      this.repos = repos.filter((repo) => repo.stargazers_count > 3).slice(0, this.numOfRepo);
    });
  },
});
</script>

<style lang="scss" scoped>
</style>
