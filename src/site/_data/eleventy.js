const fs = require('node:fs');
const path = require('node:path');

// https://www.11ty.dev/docs/data-js/
module.exports = function () {
  // read 11ty's package.json to get 11ty version
  const e = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../node_modules/@11ty/eleventy/package.json'), 'utf8'));
  return {
    version: e.version,
  };
};
