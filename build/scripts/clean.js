const { glob } = require('glob');
const fs = require('fs');
const { rimraf } = require('rimraf');

glob('src/site/_data/*.json').then((generatedDataFiles) => {
  generatedDataFiles.forEach((f) => {
    fs.unlink(f, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`deleted '${f}' file`);
    });
  });
}).catch((e) => {
  console.error(e);
  process.exit(1);
});

const distDir = [
  'dist',
  '.tmp/dist.webpack',
];

distDir.forEach((dir) => {
  rimraf(dir).then((result) => {
    if (!result) {
      console.error(`unable to delete '${dir}' directory`);
      return;
    }
    console.log(`deleted '${dir}' directory`);
  }).catch((reason) => {
    console.error(`unable to delete '${dir}' directory`, reason);
  });
});
