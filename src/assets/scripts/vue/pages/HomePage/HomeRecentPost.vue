<template>
  <div>
    <template v-if="entries.length === 0">
      <i class="fa fa-spinner fa-spin"></i>
      Loading...
    </template>
    <template v-else>
      <div class="entry" :key="entry.name" v-for="entry in entries">
        <div class="entry-header">
          <span class="entry-date">{{ entry.date | moment('YYYY/MM/DD') }}</span>
          <span class="entry-title"><a :href="entry.link">{{ entry.title }}</a></span>
        </div>
        <p class="entry-summary">{{ entry.contentSnippet }}</p>
      </div>
    </template>
  </div>
</template>

<script>
import Feed from '@/lib/Feed';

export default {
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
  },
  data() {
    return {
      entries: [],
    };
  },
  created() {
    const feed = new Feed({ url: this.url });
    feed.fetch({ maxItem: this.num }).then((entries) => {
      this.entries = entries.map((entry) => {
        let contentText = entry.description;
        try {
          // strip html tags
          const el = document.createElement('div');
          el.innerHTML = entry.description;
          contentText = el.innerText;
        } catch (e) {
        }
        // eslint-disable-next-line no-param-reassign
        entry.contentSnippet = contentText.length > this.maxContentLength ? `${contentText.substr(0, this.maxContentLength)}...` : contentText;
        return entry;
      });
    });
  },
};
</script>

<style>
</style>
