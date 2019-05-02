const fs = require('fs');
const rimraf = require('rimraf');

fs.unlink('source/_data/manifest.json', (err) => {
});
rimraf('_site', (err) => {
});
rimraf('bundles', (err) => {
});
