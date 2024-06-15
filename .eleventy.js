// noinspection JSUnusedLocalSymbols

const fs = require('fs');
const { DateTime } = require('luxon');
const markdownIt = require('markdown-it');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
// const UpgradeHelper = require('@11ty/eleventy-upgrade-help');

const src = './src/site';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const site = JSON.parse(fs.readFileSync(`${src}/_data/site.json`, 'utf8'));
/** @type {PortfolioTag[]} */
const portfolioTags = JSON.parse(fs.readFileSync(`${src}/_data/portfolio_tags.json`, 'utf8'));
const manifest = fs.existsSync(`${src}/_data/manifest.json`) ? JSON.parse(fs.readFileSync(`${src}/_data/manifest.json`, 'utf8')) : {};

const staticPaths = [
  'assets',
  'favicon.ico',
  'BingSiteAuth.xml',
  'googleca9b70e876030815.html',
  'downloads/reserved.txt',
];

// eslint-disable-next-line func-names
module.exports = function (eleventyConfig) {
  // eleventyConfig.addPlugin(UpgradeHelper);

  // https://www.11ty.dev/docs/languages/liquid/#optional-use-your-own-options
  // https://liquidjs.com/tutorials/options.html#dynamicPartials
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false,
  });
  // https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(false);

  eleventyConfig.addPlugin(syntaxHighlight);

  // https://www.11ty.io/docs/languages/markdown/
  // https://github.com/markdown-it/markdown-it#init-with-presets-and-options
  const options = {
    html: true,
    breaks: false,
    linkify: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  // copy static
  staticPaths.forEach((staticPath) => eleventyConfig.addPassthroughCopy(`${src}/${staticPath}`));

  eleventyConfig.addLiquidTag('asset_path', (Liquid) => ({
    parse(tagToken, remainTokens) {
      this.path = tagToken.args;
    },
    render(scope, hash) {
      let bundlePath = `/assets/${this.path}?v=${pkg.version}`;
      if (process.env.NODE_ENV === 'production') {
        if (manifest[this.path]) {
          bundlePath = `/assets/${manifest[this.path]}`;
        }
      }
      return bundlePath;
    },
  }));

  eleventyConfig.addLiquidTag('github', (Liquid) => ({
    parse(tagToken, remainTokens) {
      this.path = tagToken.args;
    },
    render(scope, hash) {
      return `<div class="github-widget" data-repo="${this.path}"></div>`;
    },
  }));

  eleventyConfig.addLiquidTag('download_url', (Liquid) => ({
    parse(tagToken, remainTokens) {
      this.path = tagToken.args;
    },
    render(scope, hash) {
      return site.download_url + this.path;
    },
  }));

  // post collections by category
  const categories = ['product', 'programing', 'computing'];
  categories.forEach((category) => {
    eleventyConfig.addCollection(category, (collection) => collection.getFilteredByTag('posts').filter((item) => 'category' in item.data && item.data.category.toLowerCase() === category));
  });

  eleventyConfig.addFilter('jsonify', (/* any */variable) => JSON.stringify(variable));

  eleventyConfig.addFilter('date_to_xmlschema', (/* Date */date) => DateTime.fromJSDate(date).toISO());

  eleventyConfig.addFilter('date_to_rfc2822', (/* Date */date) => DateTime.fromJSDate(date).setLocale('en').toRFC2822());

  eleventyConfig.addFilter('condense_spaces', (/* string */content) => content.replace(/\r?\n/g, ' ').replace(/\s{2,}/g, ' '));

  eleventyConfig.addFilter('sort_portfolio', (/* Portfolio[] */items) => items.sort((a, b) => {
    const ay = a.copyright_year ? a.copyright_year : 2000;
    const by = b.copyright_year ? b.copyright_year : 2000;
    let ret = by - ay;
    if (ret === 0) {
      if (a.categories.length > 0 && b.categories.length > 0) {
        ret = a.categories[0].localeCompare(b.categories[0]);
      }
    }
    if (ret === 0) {
      ret = a.name.localeCompare(b.name);
    }
    return ret;
  }));

  eleventyConfig.addFilter('portfolio_tag_name', (/* string */slug) => {
    const tag = portfolioTags.find((t) => t.id === slug);
    if (tag) {
      return tag.name;
    }
    return slug;
  });

  return {
    templateFormats: ['html', 'liquid', 'md'],
    dataTemplateEngine: 'liquid',
    markdownTemplateEngine: 'liquid',
    htmlTemplateEngine: 'liquid',
    passthroughFileCopy: true,
    dir: {
      input: `${src}`,
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: './dist',
    },
  };
};
