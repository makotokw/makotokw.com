const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
  // read 11ty's package.json to get 11ty version
  const e = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../node_modules/@11ty/eleventy/package.json'), 'utf8'));
  return {
    version: e.version,
    env: process.env.NODE_ENV || 'production',
  };
};
