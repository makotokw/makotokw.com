const fs = require('fs');
const moment = require('moment');

const src = './src/site';
const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const site = JSON.parse(fs.readFileSync(`${src}/_data/site.json`, 'utf8'));
const portfolioTags = JSON.parse(fs.readFileSync(`${src}/_data/portfolio_tags.json`, 'utf8'));
const manifest = fs.existsSync(`${src}/_data/manifest.json`) ? JSON.parse(fs.readFileSync(`${src}/_data/manifest.json`, 'utf8')) : {};

const staticPaths = [
  'assets',
  'favicon.ico',
  'BingSiteAuth.xml',
  'googleca9b70e876030815.html',
  'downloads/reserverd.txt',
];

module.exports = function (eleventyConfig) {
  // copy static
  staticPaths.forEach((staticPath) => eleventyConfig.addPassthroughCopy(`${src}/${staticPath}`));

  // Markdown
  const markdownIt = require('markdown-it');
  // https://github.com/markdown-it/markdown-it#init-with-presets-and-options
  const options = {
    html: true,
    breaks: false,
    linkify: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  eleventyConfig.addLiquidTag('asset_path', function (Liquid) {
    return {
      parse: function (tagToken, remainTokens) {
        this.path = tagToken.args;
      },
      render: function (scope, hash) {
        let bundlePath = `/assets/${this.path}?v=${pkg.version}`;
        if (process.env.NODE_ENV === 'production') {
          if (manifest[this.path]) {
            bundlePath = `/assets/${manifest[this.path]}`;
          }
        }
        return bundlePath;
      },
    };
  });

  eleventyConfig.addLiquidTag('github', function (Liquid) {
    return {
      parse: function (tagToken, remainTokens) {
        this.path = tagToken.args;
      },
      render: function (scope, hash) {
        return `<div class="github-widget" data-repo="${this.path}"></div>`;
      },
    };
  });

  eleventyConfig.addLiquidTag('download_url', function (Liquid) {
    return {
      parse: function (tagToken, remainTokens) {
        this.path = tagToken.args;
      },
      render: function (scope, hash) {
        return site.download_url + this.path;
      },
    };
  });

  // post collections by category
  const categories = ['product', 'programing', 'computing'];
  categories.forEach(function (category) {
    eleventyConfig.addCollection(category, function (collection) {
      return collection.getFilteredByTag('posts').filter(function (item) {
        return 'category' in item.data && item.data.category.toLowerCase() === category;
      });
    });
  });

  eleventyConfig.addFilter('jsonify', function (variable) {
    return JSON.stringify(variable);
  });

  eleventyConfig.addFilter('date_to_xmlschema', function (s) {
    return moment(s).toISOString(true);
  });

  eleventyConfig.addFilter('date_to_rfc2822', function (s) {
    return moment(s).locale('en').format('ddd, DD MMM YYYY HH:mm:ss ZZ');
  });

  eleventyConfig.addFilter('condense_spaces', function (content) {
    return content.replace(/\r?\n/g, ' ').replace(/\s{2,}/g, ' ');
  });

  eleventyConfig.addFilter('sort_portfolio', function (items) {
    return items.sort(function (a, b) {
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
    });
  });

  eleventyConfig.addFilter('portfolio_tag_name', function (slug) {
    const tag = portfolioTags.find(function (t) {
      return t.id === slug;
    });
    if (tag) {
      return tag.name;
    }
    return slug;
  });

  return {
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
