module.exports = {
  layout: 'default',
  eleventyComputed: {
    permalink(data) {
      return data.app.env === 'development' ? `/styleguide/${data.page.fileSlug}/` : false;
    },
  },
};
