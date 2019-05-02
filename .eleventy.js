const fs = require('fs');
const manifest = fs.existsSync('./source/_data/manifest.json') ?
  JSON.parse(fs.readFileSync('./source/_data/manifest.json', 'utf8')) :
  {};

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./source/assets');
  eleventyConfig.addPassthroughCopy('./source/favicon.ico');
  eleventyConfig.addPassthroughCopy('./source/BingSiteAuth.xml');
  eleventyConfig.addPassthroughCopy('./source/googleca9b70e876030815.html');

  const dummyTags = [
    'asset_path',
    'github',
    'download_url',
    'portfolio_url',
    'highlight',
    'endhighlight',
  ];
  dummyTags.forEach(function (tag) {
    eleventyConfig.addLiquidTag(tag, function (liquidEngine) {
      return {
        render: function (scope, hash) {
          return Promise.resolve('');
        },
      };
    });
  });

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
      output: './_site',
    },
  };
};