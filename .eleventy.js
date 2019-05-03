const fs = require('fs');

const site = fs.existsSync('./source/_data/site.json') ?
  JSON.parse(fs.readFileSync('./source/_data/site.json', 'utf8')) :
  {};
const manifest = fs.existsSync('./source/_data/manifest.json') ?
  JSON.parse(fs.readFileSync('./source/_data/manifest.json', 'utf8')) :
  {};
const portfolioTags = fs.existsSync('./source/_data/portfolio_tags.json') ?
  JSON.parse(fs.readFileSync('./source/_data/portfolio_tags.json', 'utf8')) :
  {};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./source/assets');
  eleventyConfig.addPassthroughCopy('./source/favicon.ico');
  eleventyConfig.addPassthroughCopy('./source/BingSiteAuth.xml');
  eleventyConfig.addPassthroughCopy('./source/googleca9b70e876030815.html');

  // Markdown
  let markdownIt = require('markdown-it');
  // https://github.com/markdown-it/markdown-it#init-with-presets-and-options
  let options = {
    html: true,
    breaks: false,
    linkify: true,
  };
  eleventyConfig.setLibrary('md', markdownIt(options));

  eleventyConfig.addLiquidTag('env', function (Liquid) {
    return {
      render: async function (scope, hash) {
        return Promise.resolve(process.env.NODE_ENV);
      },
    };
  });

  eleventyConfig.addLiquidTag('asset_path', function (Liquid) {
    return {
      parse: function (tagToken, remainTokens) {
        this.str = tagToken.args;
      },
      render: async function (scope, hash) {
        const str = await Liquid.evalValue(this.str, scope);
        let bundlePath = `/assets/${str}`;
        if (process.env.NODE_ENV === 'production') {
          if (manifest[str]) {
            Promise.reject(`'${str}' bundle path is not found in manifest.json`);
          }
          bundlePath = `/assets/${manifest[str]}`;
        }
        return Promise.resolve(bundlePath);
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

  eleventyConfig.addFilter('condense_spaces', function (content) {
    let result = content.replace(/\r?\n/g, ' ');
    return result.replace(/\s{2,}/g, ' ');
  });

  eleventyConfig.addFilter('sort_portfolio', function (items) {
    return items.sort(function (a, b) {
      const ay = a.copyright_year ? a.copyright_year : 2000;
      const by = b.copyright_year ? b.copyright_year : 2000;
      return by - ay;
    });
  });

  eleventyConfig.addFilter('portfolio_tag_name', function (slug) {
    const tag = portfolioTags.find(function(t) {
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
      input: './source',
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
      output: './dist',
    },
  };
};
