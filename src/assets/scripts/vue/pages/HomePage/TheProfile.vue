<!--suppress HtmlUnknownTarget -->
<template>
  <div class="profile">
    <img class="authorIcon authorIcon-isPinned" :src="icon_url" :alt="author.screen_name">
    <p class="authorSummary">
      I'm makoto_kw, a Software Engineer, Full Stack, Japanese and live in Tokyo.
    </p>
    <div class="row">
      <ul class="menuLang">
        <li class="menuLangItem menuLangItem-en" :class="{ 'menuLangItem-active': isEn }">
          <a href="/" class="btn menuLangButton">English</a>
        </li>
        <li class="menuLangItem menuLangItem-ja" :class="{ 'menuLangItem-active': isJa }">
          <a href="/ja/" class="btn menuLangButton">Japanese</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import site from '@assets/fixtures/site.yaml';

export default defineComponent({
  name: 'TheProfile',
  props: {
    lang: {
      type: String,
      default: 'en',
    },
  },
  data() {
    return {
      isEn: this.lang === 'en',
      isJa: this.lang === 'ja',
      icon_url: `https://s.gravatar.com/avatar/${site.author.gravator_hash}?s=200`,
      author: site.author,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
