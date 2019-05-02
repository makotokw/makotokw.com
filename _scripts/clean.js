const fs = require('fs');
const rimraf = require('rimraf');

fs.unlink('source/_data/manifest.json', (err) => {
});
rimraf('dist', (err) => {
});
rimraf('.tmp/dist.gulp', (err) => {
});
rimraf('.tmp/dist.webpack', (err) => {
});