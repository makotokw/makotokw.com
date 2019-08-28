/* eslint-disable no-cond-assign */
const path = require('path');
const fs = require('fs');
const axios = require('axios');
const filenamifyUrl = require('filenamify-url');
const FeedParser = require('feedparser');

const dataDir = path.resolve(__dirname, '../../dist/data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { mode: 0o755, recursive: true });
}

function createJsonWriter({ filename }) {
  const items = [];
  const feedParser = new FeedParser();
  feedParser.on('readable', function () {
    let item;
    while ((item = feedParser.read())) {
      items.push(item);
    }
  });
  feedParser.on('end', function () {
    fs.writeFileSync(`${dataDir}/${filename}`, JSON.stringify(items, null, null));
  });
  feedParser.on('error', function (error) {
    console.error(error);
  });
  return feedParser;
}

function feedToJson({ url }) {
  axios({
    method: 'get',
    url: url,
    responseType: 'stream',
  }).then((response) => {
    response.data.pipe(createJsonWriter({ filename: `${filenamifyUrl(url)}.json` }));
  });
}

feedToJson({ url: 'https://blog.makotokw.com/feed/' });
feedToJson({ url: 'https://qiita.com/makoto_kw/feed.atom' });
