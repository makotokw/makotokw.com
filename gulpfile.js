/*jshint node: true */
'use strict';

require('dotenv').config();

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var fs = require('fs');

// configurable paths
var appConfig = {
  source: 'source',
  bowerComponent: 'bower_components',
  assets: 'source/_assets',
  bowerRc: JSON.parse(fs.readFileSync('.bowerrc')),
  distProduction: 'dist',
  distDevelopment: '.tmp/dist.gulp',
};

appConfig.dist = process.env.NODE_ENV === 'production' ? appConfig.distProduction : appConfig.distDevelopment;

// Javascripts
gulp.task('jshint', function () {
  //noinspection JSUnresolvedVariable,JSUnresolvedFunction
  return gulp.src(['gulpfile.js', appConfig.assets + '/scripts/**/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    ;
});
gulp.task('jst', function () {
  //noinspection JSUnresolvedFunction
  gulp.src(appConfig.assets + '/scripts/templates/*.html')
    .pipe(plugins.templateCompile({
      namespace: 'JST',
      name: function (file) {
        return file.relative;
      },
    }))
    .pipe(plugins.concat('templates.js'))
    .pipe(gulp.dest(appConfig.assets + '/scripts/templates'));
});

gulp.task('js:vendorFirst', function () {
  //noinspection JSUnresolvedFunction,JSUnresolvedVariable
  return gulp.src([
    appConfig.bowerComponent + '/modernizr/modernizr.js',
    appConfig.bowerComponent + '/jquery/jquery.js',
  ])
    .pipe(plugins.concat('vendor_first.js'))
    .pipe(gulp.dest(appConfig.dist + '/assets'));
});

gulp.task('js:vendor', function () {
  //noinspection JSUnresolvedFunction,JSUnresolvedVariable
  return gulp.src([
    appConfig.bowerComponent + '/jquery.easing/js/jquery.easing.js',
    appConfig.bowerComponent + '/headroom.js/dist/headroom.js',
    appConfig.bowerComponent + '/headroom.js/dist/jQuery.headroom.js',
    appConfig.bowerComponent + '/isotope/dist/isotope.pkgd.js',
    appConfig.bowerComponent + '/moment/moment.js',
    appConfig.bowerComponent + '/underscore/underscore.js',
    appConfig.bowerComponent + '/underscore.string/lib/underscore.string.js',
    appConfig.bowerComponent + '/backbone/backbone.js',
    appConfig.bowerComponent + '/bootstrap-sass/assets/javascripts/bootstrap.js',
    appConfig.bowerComponent + '/bootstrap-material-design/dist/js/material.js',
    appConfig.bowerComponent + '/bootstrap-material-design/dist/js/ripples.js',
    appConfig.bowerComponent + '/jquery.githubRepoWidget/index.js',
  ])
    .pipe(plugins.concat('vendor.js'))
    .pipe(gulp.dest(appConfig.dist + '/assets'));
});

gulp.task('js:main', ['jst'], function () {
  //noinspection JSUnresolvedFunction,JSUnresolvedVariable
  return gulp.src([
    appConfig.assets + '/scripts/libs/main.js',
    appConfig.assets + '/scripts/routes/*.js',
    appConfig.assets + '/scripts/models/*.js',
    appConfig.assets + '/scripts/collections/*.js',
    appConfig.assets + '/scripts/templates/*.js',
    appConfig.assets + '/scripts/views/*.js',
  ])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('main.js'))
    .pipe(plugins.sourcemaps.write('.', {}))
    .pipe(gulp.dest(appConfig.dist + '/assets'))
    ;
});

// Fixtures(json data)
gulp.task('fixtures', function () {
  //noinspection JSUnresolvedFunction
  return gulp.src(appConfig.source + '/_data/*.yml')
    .pipe(plugins.yaml())
    .pipe(gulp.dest(appConfig.dist + '/data'))
    ;
});

// Build
gulp.task('build', function (cb) {
  return runSequence(
    ['js:main', 'js:vendorFirst', 'js:vendor', 'fixtures'],
    cb
  );
});

// gulp.task('deploy', function (cb) {
//   if (!process.env.MAKOTOKWCOM_WWW_HOST || !process.env.MAKOTOKWCOM_WWW_DEST) {
//     cb('require env');
//   }
//   return gulp.src(appConfig.distProduction + '/**')
//     .pipe(plugins.rsync({
//       root: appConfig.distProduction + '/',
//       archive: true,
//       clean: true,
//       hostname: process.env.MAKOTOKWCOM_WWW_HOST,
//       destination: process.env.MAKOTOKWCOM_WWW_DEST,
//     }));
// });

gulp.task('default', ['build'], function () {
});