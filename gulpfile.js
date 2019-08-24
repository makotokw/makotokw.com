require('dotenv').config();

const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const runSequence = require('run-sequence');
const fs = require('fs');

// configurable paths
const appConfig = {
  source: 'src/site',
  bowerComponent: 'bower_components',
  scripts: 'src/assets/scripts.gulp',
  fixtures: 'src/assets/fixtures',
  bowerRc: JSON.parse(fs.readFileSync('.bowerrc')),
  distProduction: 'dist',
  distDevelopment: '.tmp/dist.gulp',
};

appConfig.dist = process.env.NODE_ENV === 'production' ? appConfig.distProduction : appConfig.distDevelopment;

gulp.task('jst', function () {
  gulp.src(`${appConfig.scripts}/templates/*.html`)
    .pipe(plugins.templateCompile({
      namespace: 'JST',
      name: function (file) {
        return file.relative;
      },
    }))
    .pipe(plugins.concat('templates.js'))
    .pipe(gulp.dest(`${appConfig.scripts}/templates`));
});

gulp.task('js:vendorFirst', function () {
  return gulp.src([
    `${appConfig.bowerComponent}/modernizr/modernizr.js`,
    `${appConfig.bowerComponent}/jquery/jquery.js`,
  ])
    .pipe(plugins.concat('vendor_first.js'))
    .pipe(gulp.dest(`${appConfig.dist}/assets`));
});

gulp.task('js:vendor', function () {
  return gulp.src([
    `${appConfig.bowerComponent}/jquery.easing/js/jquery.easing.js`,
    `${appConfig.bowerComponent}/headroom.js/dist/headroom.js`,
    `${appConfig.bowerComponent}/headroom.js/dist/jQuery.headroom.js`,
    `${appConfig.bowerComponent}/isotope/dist/isotope.pkgd.js`,
    `${appConfig.bowerComponent}/moment/moment.js`,
    `${appConfig.bowerComponent}/underscore/underscore.js`,
    `${appConfig.bowerComponent}/underscore.string/lib/underscore.string.js`,
    `${appConfig.bowerComponent}/backbone/backbone.js`,
    `${appConfig.bowerComponent}/bootstrap-sass/assets/javascripts/bootstrap.js`,
    `${appConfig.bowerComponent}/bootstrap-material-design/dist/js/material.js`,
    `${appConfig.bowerComponent}/bootstrap-material-design/dist/js/ripples.js`,
    `${appConfig.bowerComponent}/jquery.githubRepoWidget/index.js`,
  ])
    .pipe(plugins.concat('vendor2.js'))
    .pipe(gulp.dest(`${appConfig.dist}/assets`));
});

gulp.task('js:main', ['jst'], function () {
  return gulp.src([
    `${appConfig.scripts}/libs/main.js`,
    `${appConfig.scripts}/routes/*.js`,
    `${appConfig.scripts}/models/*.js`,
    `${appConfig.scripts}/collections/*.js`,
    `${appConfig.scripts}/templates/*.js`,
    `${appConfig.scripts}/views/*.js`,
  ])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('main2.js'))
    .pipe(plugins.sourcemaps.write('.', {}))
    .pipe(gulp.dest(`${appConfig.dist}/assets`));
});

// Fixtures(yaml to json)
gulp.task('fixtures', function () {
  return gulp.src(`${appConfig.fixtures}/*.yml`)
    .pipe(plugins.yaml())
    // output for 11ty/data
    .pipe(gulp.dest(`${appConfig.source}/_data`))
    // output for js application
    .pipe(gulp.dest(`${appConfig.dist}/data`));
});

// Build
gulp.task('build', function (cb) {
  return runSequence(
    ['js:main', 'js:vendorFirst', 'js:vendor', 'fixtures'],
    cb,
  );
});

gulp.task('deploy', function (cb) {
  if (!process.env.MAKOTOKWCOM_WWW_HOST || !process.env.MAKOTOKWCOM_WWW_DEST) {
    cb('require env');
  }
  return gulp.src(`${appConfig.distProduction}/**`)
    .pipe(plugins.rsync({
      root: `${appConfig.distProduction}/`,
      archive: true,
      clean: true,
      hostname: process.env.MAKOTOKWCOM_WWW_HOST,
      destination: process.env.MAKOTOKWCOM_WWW_DEST,
    }));
});

gulp.task('default', ['build'], function () {
});
