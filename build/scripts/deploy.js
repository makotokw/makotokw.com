const Rsync = require('rsync');
const path = require('path');

require('dotenv').config();

if (!process.env.MAKOTOKWCOM_DEPLOY_DEST_HOST || !process.env.MAKOTOKWCOM_DEPLOY_DEST_PATH || !process.env.MAKOTOKWCOM_DEPLOY_SRC_PATH) {
  throw new Error('require MAKOTOKWCOM_DEPLOY_HOST, MAKOTOKWCOM_DEPLOY_SRC and MAKOTOKWCOM_DEPLOY_DEST');
}

const projectDir = path.resolve(__dirname, '../../');

if (projectDir !== process.cwd()) {
  throw new Error(`Invalid current dir: ${process.cwd()}`);
}

// https://github.com/mattijs/node-rsync#readme
const rsync = new Rsync()
  .shell('ssh')
  .flags('avn')
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
