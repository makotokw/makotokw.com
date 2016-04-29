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
    components: 'source/_assets/components',
    theme: 'source/_assets/makotokw2016',
    bowerRc: JSON.parse(fs.readFileSync('.bowerrc')),
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
gulp.task('js:dev', function() {
    return gulp.src([
            appConfig.theme + '/javascripts/main.js',
            appConfig.theme + '/javascripts/routes/*.js',
            appConfig.theme + '/javascripts/models/*.js',
            appConfig.theme + '/javascripts/collections/*.js',
            appConfig.theme + '/javascripts/views/*.js'
        ])
        .pipe(plugins.concat('app.js'))
        .pipe(gulp.dest(appConfig.distDevelopmentPreload + '/assets'))
        .pipe(browserSync.stream({match: '**/*.js'}))
        ;
});


gulp.task('bower:install', plugins.shell.task(['bower install']));
gulp.task('bower:main-files', ['bower:install'], function () {
    var bower = require('main-bower-files');
    return gulp.src(bower(), {base: appConfig.bowerRc.directory})
        .pipe(plugins.bowerNormalize({bowerJson: './bower.json'}))
        .pipe(gulp.dest(appConfig.components));
});

function sass(env, dest) {
    return plugins.rubySass(appConfig.theme + '/stylesheets', {
        loadPath: [
            appConfig.bowerRc.directory + '/bootstrap-sass/assets/stylesheets',
            appConfig.bowerRc.directory + '/bootstrap-material-design/sass',
            appConfig.bowerRc.directory + '/font-awesome/scss'
        ],
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

function fixtures(env, dest) {
    return gulp.src(appConfig.source + '/_fixtures/*.yml')
        .pipe(plugins.yaml())
        .pipe(gulp.dest(dest))
    ;
}

gulp.task('fixtures:dev', function () {
    return fixtures('development', appConfig.distDevelopmentPreload + '/data');
});

gulp.task('fixtures:prod', function () {
    return fixtures('production', appConfig.distProduction + '/data');
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
        function (error, stdout/*, stderr*/) {
            if (error !== null) {
                console.log('jekyll build error: ' + error);
            }
            console.log(stdout);
            return cb();
        });
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

gulp.task('build:dev', function (cb) {
    return runSequence(
        'bower:main-files',
        ['fixtures:dev', 'sass:dev'],
        'jekyll:dev',
        cb
    );
});

gulp.task('serve:dev', function () {
    runSequence(
        'build:dev',
        'browser-sync'
    );
    gulp.watch(appConfig.source + '/**/*.{md,html,yml}', function() {
        runSequence(
            'jekyll:dev',
            browserSync.reload
        );
    });
    gulp.watch(appConfig.theme + '/javascripts/**/*.js', ['jshint', 'js:dev']);
    gulp.watch(appConfig.theme + '/stylesheets/**/*.scss', ['sass:dev']);
    gulp.watch(appConfig.source + '/_fixtures/*.yml', ['fixtures:dev']);
});

gulp.task('default', ['serve:dev'], function() {
});
