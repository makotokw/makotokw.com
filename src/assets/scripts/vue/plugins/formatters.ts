import { App } from 'vue';
import { DateTime } from 'luxon';
import portfolioTags from '@assets/fixtures/portfolio_tags.yaml';

export default {
  install: (app: App) => {
    // eslint-disable-next-line no-param-reassign
    app.config.globalProperties.$formatters = {
      dateTime(value: string | undefined, luxonFormat: string): string {
        if (!value) {
          return '';
        }
        const jsDate = new Date(value);
        return DateTime.fromJSDate(jsDate).toFormat(luxonFormat);
      },
      tagName(value: string): string {
        const tag = portfolioTags.find((t: PortfolioTag) => t.id === value);
        return tag && tag.name ? tag.name : value;
      },
    };
  },
};
