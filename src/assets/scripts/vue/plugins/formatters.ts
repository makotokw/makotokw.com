import { App } from 'vue';
import moment from 'moment';
import portfolioTags from '@assets/fixtures/portfolio_tags.yaml';

export default {
  install: (app: App) => {
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$formatters = {
      dateTime(value: moment.MomentInput, format: string): string {
        return moment(value).format(format);
      },
      tagName(value: string): string {
        const tag = portfolioTags.find((t: PortfolioTag) => t.id === value);
        return tag && tag.name ? tag.name : value;
      },
    };
  },
};
