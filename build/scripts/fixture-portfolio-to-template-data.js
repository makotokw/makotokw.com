const YAML = require('yaml');
const fs = require('fs');
const path = require('path');

const fixturePath = path.resolve(__dirname, '../../src/assets/fixtures/portfolios.yml');
const portfolios = YAML.parse(fs.readFileSync(fixturePath, 'utf8'));
const portfoliosPageDir = path.resolve(__dirname, '../../src/site/_portfolios');

portfolios.forEach(function (portfolio) {
  if (!portfolio.url) {
    return;
  }
  const matched = portfolio.url.match(/^\/(|ja\/)portfolio\/(.*)\/(.*)\//);
  if (!matched) {
    return;
  }
  const [, , category, page] = matched;

  ['', '.ja'].forEach(function (categorySuffix) {
    const pagePath = `${portfoliosPageDir}/${category}${categorySuffix}/${page}.md`;
    if (!fs.existsSync(pagePath)) {
      return;
    }
    const dataPath = pagePath.replace(/\.md$/, '.11tydata.json');
    fs.writeFileSync(dataPath, JSON.stringify({ portfolio }, null, null));
  });
});
