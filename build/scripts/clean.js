const { glob } = require('glob');
const fs = require('fs');
const { rimraf } = require('rimraf');

glob('src/site/_data/*.json', (er, generatedDataFiles) => {
  if (er) {
    console.error(er);
    return;
  }
  generatedDataFiles.forEach((f) => {
    fs.unlink(f, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(`deleted '${f}' file`);
    });
  });
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
