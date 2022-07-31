import { createApp, App } from 'vue';
import VueApp from '@/vue/App.vue';
import VueFormattersPlugin from '@/vue/plugins/formatters';

export default function createVueApp(lang: string): App {
  const app = createApp(VueApp, { lang });
  app.use(VueFormattersPlugin);
  return app;
}
