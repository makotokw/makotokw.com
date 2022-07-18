<template>
  <div>
    <template v-if="entries.length === 0">
      <i class="fa fa-spinner fa-spin" />
      Loading...
    </template>
    <template v-else>
      <div v-for="entry in entries" :key="entry.name" class="entry">
        <div class="entry-header">
          <span class="entry-date">{{ $filters.moment(entry.date, 'YYYY/MM/DD') }}</span>
          <span class="entry-title"><a :href="replaceLink(entry.link)" :target="linkTarget">{{ entry.title }}</a></span>
        </div>
        <p class="entry-summary">
          {{ entry.contentSnippet }}
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import site from '@assets/fixtures/site.yaml';
import Feed, { FeedEntry } from '@/lib/feed';

export default defineComponent({
  name: 'HomeRecentPost',
  props: {
    url: {
      type: String,
      required: true,
    },
    num: {
      type: Number,
      default: 5,
    },
    maxContentLength: {
      type: Number,
      default: 180,
    },
    linkTarget: {
      type: String,
      default: '_blank',
    },
  },
  data() {
    return {
      entries: [] as FeedEntry[],
    };
  },
  created() {
    const useCache = !!this.url.match(/^https?:/);
    const feed = new Feed(this.url, useCache);
    feed.fetch(this.num).then((entries) => {
      this.entries = entries.map((entry) => {
        let contentText = entry.content || '';
        try {
          // strip html tags
          const el = document.createElement('div');
          el.innerHTML = contentText;
          contentText = el.innerText;
        } catch (e) {
        }
        // eslint-disable-next-line no-param-reassign
        entry.contentSnippet = contentText.length > this.maxContentLength ? `${contentText.substring(0, this.maxContentLength)}...` : contentText;
        return entry;
      });
    });
  },
  methods: {
    replaceLink(link: string): string {
      return link.replace(`${site.url}/blog/`, '/blog/');
    },
  },
});
</script>

<style lang="scss" scoped>
</style>
