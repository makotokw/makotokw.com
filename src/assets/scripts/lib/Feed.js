import axios from 'axios';
import filenamifyUrl from 'filenamify-url';

/**
 * @typedef {Object} FeedEntry
 * @property {string} guid
 * @property {string} title
 * @property {string} date
 * @property {string} description
 * @property {string} summary
 */


/**
 * Feed
 */
class Feed {
  constructor({ url }) {
    this.url = url;
    this.cacheJsonUrl = `/data/${filenamifyUrl(url)}.json`;
    this.repos = [];
  }

  /**
   * @returns {Promise<FeedEntry[]>}
   */
  fetch({ maxItem = 10 }) {
    return axios({
      url: this.cacheJsonUrl,
    }).then(({ data }) => {
      if (Array.isArray(data)) {
        return data.slice(0, maxItem);
      }
      return [];
    });
  }
}

export default Feed;
