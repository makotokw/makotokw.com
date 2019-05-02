const fs = require('fs');
const rimraf = require('rimraf');

fs.unlink('source/_data/manifest.json', (err) => {
});
rimraf('dist', (err) => {
});
rimraf('bundles', (err) => {
});
