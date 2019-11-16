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
          <span class="entry-title"><a :href="replaceLink(entry.link)" :target="linkTarget">{{ entry.title }}</a></span>
        </div>
        <p class="entry-summary">{{ entry.contentSnippet }}</p>
      </div>
    </template>
  </div>
</template>

<script>
/** @var {Site} site */
import site from '@assets/fixtures/site.yml';
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
    linkTarget: {
      type: String,
      default: '_blank',
    },
  },
  data() {
    return {
      entries: [],
    };
  },
  created() {
    const useCache = !!this.url.match(/^https?:/);
    const feed = new Feed({ url: this.url, useCache });
    feed.fetch({ maxItem: this.num }).then((entries) => {
      this.entries = entries.map((entry) => {
        let contentText = entry.content;
        try {
          // strip html tags
          const el = document.createElement('div');
          el.innerHTML = contentText;
          contentText = el.innerText;
        } catch (e) {
        }
        // eslint-disable-next-line no-param-reassign
        entry.contentSnippet = contentText.length > this.maxContentLength ? `${contentText.substr(0, this.maxContentLength)}...` : contentText;
        return entry;
      });
    });
  },
  methods: {
    /**
     * @param {string} link
     * @returns {string}
     */
    replaceLink(link) {
      return link.replace(`${site.url}/blog/`, '/blog/');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
