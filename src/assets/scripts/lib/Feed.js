import axios from 'axios';
import filenamifyUrl from 'filenamify-url';
import RSSParser from 'rss-parser';

/**
 * Feed
 */
class Feed {
  constructor({ url, useCache = true }) {
    this.url = url;
    this.useCache = useCache;
    this.repos = [];
  }

  /**
   * @param {RssParserFeed} feed
   * @param {Number} maxItem
   * @return {RssParserFeedEntry[]}
   */
  parseEntries({ feed, maxItem }) {
    let items = [];
    if (Array.isArray(feed.items)) {
      // noinspection JSUnresolvedVariable
      items = feed.items.slice(0, maxItem).map((item) => ({
        id: item.guid,
        link: item.link,
        title: item.title,
        date: item.isoDate || item.pubDate,
        content: item.content,
      }));
    }
    return items;
  }

  /**
   * @returns {Promise<RssParserFeedEntry[]>}
   */
  fetchFromCache({ maxItem = 10 }) {
    const cacheJsonUrl = `/data/${filenamifyUrl(this.url)}.json`;
    return axios({
      url: cacheJsonUrl,
    }).then(({ data }) => this.parseEntries({ feed: data, maxItem }));
  }

  /**
   * @returns {Promise<RssParserFeedEntry[]>}
   */
  fetchFromOrigin({ maxItem = 10 }) {
    const parser = new RSSParser();
    return parser.parseURL(this.url).then((feed) => this.parseEntries({ feed, maxItem }));
  }

  /**
   * @returns {Promise<RssParserFeedEntry[]>}
   */
  fetch({ maxItem = 10 }) {
    if (this.useCache) {
      return this.fetchFromCache({ maxItem });
    }
    return this.fetchFromOrigin({ maxItem });
  }
}

export default Feed;
