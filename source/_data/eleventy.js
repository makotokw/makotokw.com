const fs = require('fs');
const path = require('path');

module.exports = function (eleventyConfig) {
  const e = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../node_modules/@11ty/eleventy/package.json'), 'utf8'));
  return {
    version: e.version,
    environment: process.env.ELEVENTY_ENV,
  };
};