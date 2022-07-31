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
            {{ $formatters.tagName(slug) }}
          </span>
        </span>
      </div>
      <p class="entry-summary">
        {{ p.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import portfolios from '@assets/fixtures/portfolios.yaml';

export default defineComponent({
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
        .filter((p) => p.status === 'active')
        .sort((a, b) => `${b.last_updated_year}-${b.copyright_year}`.localeCompare(`${a.last_updated_year}-${a.copyright_year}`))
        .slice(0, this.num),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
