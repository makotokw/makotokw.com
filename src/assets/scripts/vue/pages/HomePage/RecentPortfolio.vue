<template>
  <div>
    <div class="entry" :key="p.name" v-for="p in portfolios">
      <div class="entry-header">
        <span class="entry-date">{{ p.last_updated_year }}</span>
        <span class="entry-title">
          <a :href="p.url">{{  p.name }}</a>
        </span>
        <span class="entry-categories">
          <span :key="slug" class="label label-portfolio" :class="`label-portfolio-${slug}`" v-for="slug in p.categories">
            {{ slug | tag_name }}
          </span>
        </span>
      </div>
      <p class="entry-summary">{{  p.description }}</p>
    </div>
  </div>
</template>

<script>
import portfolios from '@assets/fixtures/portfolios.yml';

export default {
  name: 'RecentPortfolio',
  props: {
    displayCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      portfolios: portfolios
        .filter((/** Portfolio */p) => p.status === 'active')
        .sort((/** Portfolio */a, /** Portfolio */b) => `${b.last_updated_year}-${b.copyright_year}`.localeCompare(`${a.last_updated_year}-${a.copyright_year}`))
        .slice(0, this.displayCount),
    };
  },
};
</script>

<style>
</style>
