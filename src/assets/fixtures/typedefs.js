/**
 * @typedef {Object} Portfolio
 * @property {string} name
 * @property {string} name.ja
 * @property {string[]} categories
 * @property {string[]} tags
 * @property {string} url
 * @property {string} source_url
 * @property {number} copyright_year
 * @property {number} last_updated_year
 * @property {string} status
 */

/**
 * @typedef {Object} PortfolioTag
 * @property {string} id
 * @property {string} name
 * @property {string} category
 */


/**
 * @typedef {Object} GoogleAnalytics
 * @property {string} account
 * @property {string} domain
 */

/**
 * @typedef {Object} SiteAuthor
 * @property {string} name
 * @property {string} email
 * @property {string} screen_name
 * @property {string} github
 * @property {string} twitter
 * @property {string} twitter_ja
 */

/**
 * @typedef {Object} Site
 * @property {string} lang
 * @property {string} title
 * @property {string} url
 * @property {string} subscribe_url
 * @property {string} blog_ja_url
 * @property {string} github_url
 * @property {string} qiita_url
 * @property {string} twitter_url
 * @property {string} twitter_ja_url
 * @property {string} linkedin_url
 * @property {string} disqus_short_name
 * @property {GoogleAnalytics} google_analytics
 * @property {string} download_url
 * @property {string} addthis_profile_id
 * @property {SiteAuthor} author
 */
