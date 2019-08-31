const path = require('path');
const fs = require('fs');
const filenamifyUrl = require('filenamify-url');
const RssParser = require('rss-parser');

const dataDir = path.resolve(__dirname, '../../dist/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { mode: 0o755, recursive: true });
}

/**
 * @see https://github.com/rbren/rss-parser
 * @typedef {Object} RssParserFeed
 * @property {string} feedUrl
 * @property {string} title
 * @property {string} link
 * @property {RssParserFeedEntry[]} items
 */

/**
 * @see https://github.com/rbren/rss-parser
 * @typedef {Object} RssParserFeedEntry
 * @property {string} title
 * @property {string} link
 * @property {string} isoDate
 * @property {string} creator
 * @property {string} content
 * @property {string} contentSnippet
 * @property {string} guid
 */

/**
 * @param url
 * @returns {Promise<void>}
 */
async function feedToJson({ url }) {
  const parser = new RssParser();
  const feed = await parser.parseURL(url);
  fs.writeFileSync(`${dataDir}/${filenamifyUrl(url)}.json`, JSON.stringify(feed, null, null));
}

feedToJson({ url: 'https://blog.makotokw.com/feed/' });
feedToJson({ url: 'https://qiita.com/makoto_kw/feed.atom' });
