<template>
  <div>
    <div v-for="p in portfolios" :key="p.name" class="entry">
      <div class="entry-header">
        <span class="entry-date">{{ p.last_updated_year }}</span>
        <span class="entry-title">
          <a :href="p.url">{{ p.name }}</a>
        </span>
        <span class="entry-categories">
          <span v-for="slug in p.categories" :key="slug" class="label label-portfolio" :class="`label-portfolio-${slug}`">
            {{ $filters.tag_name(slug) }}
          </span>
        </span>
      </div>
      <p class="entry-summary">
        {{ p.description }}
      </p>
    </div>
  </div>
</template>

<script>
import portfolios from '@assets/fixtures/portfolios.yml';

export default {
  name: 'TheHomeRecentPortfolio',
  props: {
    num: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      portfolios: portfolios
        .filter((/** Portfolio */p) => p.status === 'active')
        .sort((/** Portfolio */a, /** Portfolio */b) => `${b.last_updated_year}-${b.copyright_year}`.localeCompare(`${a.last_updated_year}-${a.copyright_year}`))
        .slice(0, this.num),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
