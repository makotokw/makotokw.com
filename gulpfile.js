require('dotenv').config();

const gulp = require('gulp');
const rsync = require('gulp-rsync');

// configurable paths
const appConfig = {
  distProduction: 'dist',
};

gulp.task('deploy', function (cb) {
  if (!process.env.MAKOTOKWCOM_WWW_HOST || !process.env.MAKOTOKWCOM_WWW_DEST) {
    cb('require env');
  }
  return gulp.src(`${appConfig.distProduction}/**`)
    .pipe(rsync({
      root: `${appConfig.distProduction}/`,
      archive: true,
      clean: true,
      hostname: process.env.MAKOTOKWCOM_WWW_HOST,
      destination: process.env.MAKOTOKWCOM_WWW_DEST,
    }));
});
