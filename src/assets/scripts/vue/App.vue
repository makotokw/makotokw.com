<template>
  <home-page :lang="lang"></home-page>
</template>

<script>
import HomePage from '@/vue/pages/HomePage/index';

export default {
  components: { HomePage },
  props: {
    lang: {
      type: String,
      default: 'en',
    },
  },
};
</script>
