const glob = require('glob');
const fs = require('fs');
const rimraf = require('rimraf');

glob('source/_data/*.json', function (er, generatedDataFiles) {
  if (er) {
    console.log(er);
    return;
  }
  generatedDataFiles.forEach((f) => {
    fs.unlink(f, (err) => {
      if (err) {
        console.log(dir, err);
        return;
      }
      console.log(`deleted '${f}' file`);
    });
  });

});

const distDir = [
  'dist',
  '.tmp/dist.gulp',
  '.tmp/dist.webpack'
];

distDir.forEach((dir) => {
  rimraf(dir, (err) => {
    if (err) {
      console.log(dir, err);
      return;
    }
    console.log(`deleted '${dir}' directory`);
  });
});