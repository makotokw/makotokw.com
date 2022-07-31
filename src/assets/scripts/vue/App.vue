<template>
  <home-page :lang="lang" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomePage from '@/vue/pages/HomePage/HomePage.vue';

export default defineComponent({
  components: { HomePage },
  props: {
    lang: {
      type: String,
      default: 'en',
    },
  },
});
</script>
