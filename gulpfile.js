/*jshint node: true */
'use strict';

var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var del = require('del');

// configurable paths
var appConfig = {
    source: 'source',
    components: 'source/_assets/components',
    theme: 'source/_assets/makotokw2016',
    distProduction: 'dist',
    distDevelopment: '.dist_development',
    distDevelopmentPreload: '.dist_development_preload',
    distTest: '.dist_test'
};

gulp.task('jshint', function () {
    return gulp.src(['gulpfile.js', appConfig.theme + '/javascripts/**/*.js'])
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'))
        .pipe(plugins.if(!browserSync.active, plugins.jshint.reporter('fail')));
});

gulp.task('bower:install', function () {
    var bower = require('main-bower-files');
    plugins.shell.task(['bower install']);
    gulp.src(bower(), {base: './bower_components'})
        .pipe(plugins.bowerNormalize({bowerJson: './bower.json'}))
        .pipe(gulp.dest(appConfig.components));
});

function sass(env, dest) {
    plugins.rubySass(appConfig.theme + '/stylesheets', {
        loadPath: [
            'bower_components/bootstrap-sass-official/assets/stylesheets',
            'bower_components/font-awesome/scss'
        ],
        lineNumbers: env == 'development'
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
    sass('development', appConfig.distDevelopmentPreload + '/assets');
});

function fixtures(env, dest) {
    gulp.src(appConfig.source + '/_fixtures/*.yml')
        .pipe(plugins.yaml())
        .pipe(gulp.dest(dest))
}

gulp.task('fixtures:dev', function () {
    fixtures('development', appConfig.distDevelopmentPreload + '/data')
});

gulp.task('fixtures:prod', function () {
    fixtures('production', appConfig.distProduction + '/data')
});

gulp.task('clean:dev', function () {
    del([
        appConfig.components,
        appConfig.distDevelopment,
        appConfig.distDevelopmentPreload
    ]);
});

gulp.task('jekyll:dev', function (cb) {
    var exec = require('child_process').exec;
    exec('bundle exec jekyll build --config _config.yml,_config.development.yml --drafts -d ' + appConfig.distDevelopment,
        function (error, stdout, stderr) {
            if (error !== null) {
                console.log('jekyll build error: ' + error);
            }
            return cb();
        });
});

gulp.task('build:dev', [
    'bower:install',
    'fixtures:dev',
    'sass:dev',
    'jekyll:dev',
    'browser-sync'
], function () {
    gulp.watch(appConfig.source + '/**/*.{md,html}', function() {
        runSequence(
            'jekyll:dev',
            browserSync.reload
        )
    });
    gulp.watch(appConfig.theme + '/javascripts/**/*.js', ['jshint']);
    gulp.watch(appConfig.theme + '/stylesheets/**/*.scss', ['sass:dev']);
});

gulp.task('browser-sync', function () {
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