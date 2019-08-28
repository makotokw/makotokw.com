const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const glob = require('glob');

// fixtures/*.yml: to edit by human
const fixturesDir = path.resolve(__dirname, '../../src/assets/fixtures');
// site/_data/*.json: to read by 11ty
const siteDataDir = path.resolve(__dirname, '../../src/site/_data');

try {
  glob(`${fixturesDir}/*.yml`, {}, function (er, files) {
    if (er) {
      console.error(er);
      return;
    }
    files.forEach((srcFile) => {
      const srcFileInfo = path.parse(srcFile);
      const jsonFileName = srcFileInfo.base.replace(/\.ya?ml$/, '.json');
      const doc = yaml.safeLoad(fs.readFileSync(srcFile, 'utf8'));
      fs.writeFileSync(`${siteDataDir}/${jsonFileName}`, JSON.stringify(doc, null, null));
    });
  });
} catch (e) {
  console.error(e);
}
