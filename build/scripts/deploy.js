const Rsync = require('rsync');
const path = require('path');
const { glob } = require('glob');

require('dotenv').config();

if (!process.env.MAKOTOKWCOM_DEPLOY_DEST_HOST || !process.env.MAKOTOKWCOM_DEPLOY_DEST_PATH || !process.env.MAKOTOKWCOM_DEPLOY_SRC_PATH) {
  throw new Error('require MAKOTOKWCOM_DEPLOY_HOST, MAKOTOKWCOM_DEPLOY_SRC and MAKOTOKWCOM_DEPLOY_DEST');
}

const projectDir = path.resolve(__dirname, '../../');

if (projectDir !== process.cwd()) {
  throw new Error(`Invalid current dir: ${process.cwd()}`);
}

glob(`${process.env.MAKOTOKWCOM_DEPLOY_SRC_PATH}/assets/app-*.js`, (er, files) => {
  if (er || !files || files.length === 0) {
    throw new Error('app-*.js is not found. development build?');
  }
});

// https://github.com/mattijs/node-rsync#readme
const rsync = new Rsync()
  .shell('ssh')
  .flags('av')
  // for cert-bot (Let's Encrypt)
  .exclude(['.well-know'])
  .delete()
  .source(process.env.MAKOTOKWCOM_DEPLOY_SRC_PATH)
  .destination(`${process.env.MAKOTOKWCOM_DEPLOY_DEST_HOST}:${process.env.MAKOTOKWCOM_DEPLOY_DEST_PATH}`);

rsync.execute(
  // callback
  (error, code, cmd) => {
    // we're done
    if (error) {
      console.error(error);
    }
    console.log(`done ${process.env.MAKOTOKWCOM_DEPLOY_DEST_HOST}:${process.env.MAKOTOKWCOM_DEPLOY_DEST_PATH}`);
  },
  // stdoutHandler
  (data) => {
    console.log(data.toString('utf-8'));
  },
  // stderrHandler
  (data) => {
    console.error(data.toString('utf-8'));
  },
);
