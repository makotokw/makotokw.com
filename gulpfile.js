/*jshint node: true */
'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var fs = require('fs');
var del = require('del');

// configurable paths
var appConfig = {
  source: 'source',
  _assetsVendor: 'source/_assets/vendor',
  assetsVendor: 'source/assets/vendor',
  theme: 'source/_assets/makotokw2016',
  bowerRc: JSON.parse(fs.readFileSync('.bowerrc')),
  distProduction: 'dist',
  sassCache: '.tmp/.sass-cache',
  distDevelopment: '.tmp/dist_dev',
  distDevelopmentPreload: '.tmp/dist_dev_preload',
  design: 'design'
};

// Clean tasks
gulp.task('clean:dev', ['bower:clean-main-files'], function () {
  del([
    appConfig.sassCache,
    appConfig.distDevelopment,
    appConfig.distDevelopmentPreload
  ]);
});

gulp.task('clean:prod', ['bower:clean-main-files'], function () {
  del([
    appConfig.distProduction
  ]);
});

// Dependencies
//noinspection JSUnresolvedVariable
gulp.task('bower:install', plugins.shell.task(['bower install']));
gulp.task('bower:clean-main-files', function () {
  del([
    appConfig._assetsVendor,
    appConfig.assetsVendor
  ]);
});
gulp.task('bower:main-files', ['bower:install', 'bower:clean-main-files'], function () {
  var bower = require('main-bower-files');
  //noinspection JSUnresolvedFunction
  return gulp.src(bower(), {base: appConfig.bowerRc.directory})
  // https://github.com/cthrax/gulp-bower-normalize
    .pipe(plugins.bowerNormalize({bowerJson: './bower.json'}))
    .pipe(plugins.if('*.js', gulp.dest(appConfig._assetsVendor)))
    .pipe(plugins.if('*/fonts/*.*', gulp.dest(appConfig.assetsVendor)))
    ;
});

// Javascripts
gulp.task('jshint', function () {
  //noinspection JSUnresolvedVariable,JSUnresolvedFunction
  return gulp.src(['gulpfile.js', appConfig.theme + '/javascripts/**/*.js'])
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    ;
});
gulp.task('jst', function () {
  //noinspection JSUnresolvedFunction
  gulp.src(appConfig.theme + '/javascripts/templates/*.html')
    .pipe(plugins.templateCompile({
      namespace: 'JST',
      name: function (file) {
        return file.relative;
      }
    }))
    .pipe(plugins.concat('templates.js'))
    .pipe(gulp.dest(appConfig.theme + '/javascripts/templates'));
});
gulp.task('js:dev', ['jst'], function () {
  //noinspection JSUnresolvedFunction,JSUnresolvedVariable
  return gulp.src([
    appConfig.theme + '/javascripts/main.js',
    appConfig.theme + '/javascripts/routes/*.js',
    appConfig.theme + '/javascripts/models/*.js',
    appConfig.theme + '/javascripts/collections/*.js',
    appConfig.theme + '/javascripts/templates/*.js',
    appConfig.theme + '/javascripts/views/*.js'
  ])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.concat('app.js'))
    .pipe(plugins.sourcemaps.write('.', {}))
    .pipe(gulp.dest(appConfig.distDevelopmentPreload + '/assets'))
    .pipe(browserSync.stream({match: '**/*.js'}))
    ;
});

// Fixtures(json data)
function fixtures(dest) {
  //noinspection JSUnresolvedFunction
  return gulp.src(appConfig.source + '/_data/*.yml')
    .pipe(plugins.yaml())
    .pipe(gulp.dest(dest))
    ;
}
gulp.task('fixtures:dev', function () {
  return fixtures(appConfig.distDevelopmentPreload + '/data');
});
gulp.task('fixtures:prod', function () {
  return fixtures(appConfig.distProduction + '/data');
});


// Stylesheets
function sass(env, dest) {
  //noinspection JSUnresolvedFunction
  return plugins.rubySass(appConfig.theme + '/stylesheets', {
    loadPath: [
      appConfig.bowerRc.directory + '/bootstrap-sass/assets/stylesheets',
      appConfig.bowerRc.directory + '/bootstrap-material-design/sass',
      appConfig.bowerRc.directory + '/font-awesome/scss'
    ],
    cacheLocation: appConfig.sassCache,
    lineNumbers: env === 'development'
  })
    .pipe(plugins.plumber())
    .pipe(plugins.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream({match: '**/*.css'}))
    ;
}
gulp.task('sass:dev', function () {
  return sass('development', appConfig.distDevelopmentPreload + '/assets');
});

// Jekyll
gulp.task('jekyll:dev', function (cb) {
  var exec = require('child_process').exec;
  exec('bundle exec jekyll build --config _config.yml,_config.development.yml --drafts -d ' + appConfig.distDevelopment,
    function (error, stdout/*, stderr*/) {
      console.log(stdout);
      return cb(error);
    });
});
gulp.task('jekyll:prod', function (cb) {
  var exec = require('child_process').exec;
  exec('JEKYLL_ENV=production bundle exec jekyll build',
    function (error, stdout/*, stderr*/) {
      console.log(stdout);
      return cb(error);
    });
});

// Build
gulp.task('build:dev', function (cb) {
  return runSequence(
    'clean:dev',
    'bower:main-files',
    ['sass:dev', 'js:dev'],
    ['fixtures:dev', 'jekyll:dev'],
    cb
  );
});
gulp.task('build:prod', function (cb) {
  return runSequence(
    'clean:prod',
    'bower:main-files',
    ['fixtures:prod', 'jekyll:prod'],
    cb
  );
});

// Serve
gulp.task('browserSync:dev', function () {
  browserSync.init({
    port: 8084,
    server: {
      baseDir: [
        appConfig.distDevelopmentPreload,
        appConfig.distDevelopment
      ]
    },
    reloadDebounce: 2000
  });
});
gulp.task('serve:dev', function (cb) {
  runSequence(
    'build:dev',
    'browserSync:dev',
    cb
  );
  // gulp.watch(appConfig.source + '/**/*.{md,html,yml}', function() {
  //     return runSequence(
  //         'jekyll:dev',
  //         browserSync.reload
  //     );
  // });
  gulp.watch(appConfig.theme + '/javascripts/templates/*.html', ['jst']);
  gulp.watch(appConfig.theme + '/javascripts/**/*.js', ['jshint', 'js:dev']);
  gulp.watch(appConfig.theme + '/stylesheets/**/*.scss', ['sass:dev']);
  gulp.watch(appConfig.source + '/_fixtures/*.yml', ['fixtures:dev']);
});
gulp.task('serve:prod', function (cb) {
  runSequence(
    'build:prod',
    'browserSync:prod',
    cb
  );
});
gulp.task('browserSync:prod', function () {
  browserSync.init({
    port: 8085,
    server: {
      baseDir: [
        appConfig.distProduction
      ]
    }
  });
});

gulp.task('browserSync:design', function () {
  browserSync.init({
    port: 8086,
    server: {
      baseDir: [
        appConfig.distDevelopmentPreload,
        appConfig.design,
        appConfig.distDevelopment
      ]
    },
    reloadDebounce: 2000
  });
});
gulp.task('serve:design', function (cb) {
  runSequence(
    'browserSync:design',
    cb
  );
  gulp.watch(appConfig.design + '/*.{html}', function () {
    return runSequence(
      browserSync.reload
    );
  });
  gulp.watch(appConfig.theme + '/javascripts/templates/*.html', ['jst']);
  gulp.watch(appConfig.theme + '/javascripts/**/*.js', ['jshint', 'js:dev']);
  gulp.watch(appConfig.theme + '/stylesheets/**/*.scss', ['sass:dev']);
  gulp.watch(appConfig.source + '/_fixtures/*.yml', ['fixtures:dev']);
});

gulp.task('debug', ['serve:dev'], function () {
});

gulp.task('build', ['build:prod'], function () {
});

gulp.task('default', ['serve:dev'], function () {
});
