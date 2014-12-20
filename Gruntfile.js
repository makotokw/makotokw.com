'use strict';
var LIVERELOAD_PORT = 38084;
var SERVER_PORT = 8084;
var lrSnippet = require('connect-livereload')({
    port: LIVERELOAD_PORT
});
var path = require('path');
var mountFolder = function (connect, dir) {
    return connect.static(path.resolve(dir));
};

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    // configurable paths
    var appConfig = {
        source: 'source',
        components: 'source/_assets/components',
        theme: 'source/_assets/makotokw2014'
    };

    grunt.initConfig({
        makotokw: appConfig,
        bower: {
            install: {
                options: {
                    targetDir: '<%= makotokw.components %>',
                    cleanTargetDir: true,
                    layout: function (type, component) {
                        var renamedComponent = component;
                        if (component === 'bootstrap-sass-official') {
                            renamedComponent = 'bootstrap';
                        }

                        // parse sub directory
                        var subPath = '';
                        var matches = /^([\w]+)\/(.+)$/g.exec(type);
                        if (matches) {
                            type = matches[1];
                            subPath = matches[2];
                        }

                        // moved fonts dir to asset root
                        if (type === 'fonts') {
                            return path.join('..', '..', 'assets', 'components', type);
                        }

                        return path.join(type, renamedComponent, subPath);
                    }
                }
            }
        },
        watch: {
            options: {
                livereload: false
            },
            jst: {
                files: [
                    '<%= makotokw.theme %>/javascripts/templates/*.ejs'
                ],
                tasks: ['jst']
            },
            compass: {
                files: ['<%= makotokw.theme %>/stylesheets/{,*/}*.{scss,sass}'],
                tasks: ['compass:theme']
            },
            jekyll: {
                tasks: ['jekyll:dev'],
                files: [
                    'source/**/*.html'
                ]
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '.jekyll/**/*',
                    '.tmp/assets/*.css'
                ]
            }
        },
        connect: {
            server: {
                options: {
                    port: SERVER_PORT,
                    hostname: '0.0.0.0',
                    livereload: LIVERELOAD_PORT,
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.dist_development_preload'),
                            mountFolder(connect, '.dist_development')
                        ];
                    }
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= makotokw.theme %>/javascripts/{,*/}*.js'
            ]
        },
        jst: {
            compile: {
                options: {
                    processName: function(filepath) {
                        return filepath.match(/templates\/(.+)\.ejs/)[1];
                    }
                },
                files: {
                    '<%= makotokw.theme %>/javascripts/templates/templates.js': ['<%= makotokw.theme %>/javascripts/templates/*.ejs']
                }
            }
        },
        compass: {
            theme: {
                options: {
                    sassDir: '<%= makotokw.theme %>/stylesheets',
                    cssDir: '.dist_development_preload/assets',
                    imagesDir: '<%= makotokw.source %>/assets/site/images',
                    javascriptsDir: '<%= makotokw.theme %>/javascripts',
                    fontsDir: '<%= makotokw.source %>/assets/site/fonts',
                    importPath: '<%= makotokw.components %>/stylesheets',
                    relativeAssets: true
                }
            }
        },
        //// TODO:
        //uglify: {
        //    dist: {
        //        files: {
        //            '.dist_development_preload/assets/app.js': [
        //                '<%= makotokw.theme %>/javascripts'
        //            ]
        //        }
        //    }
        //},
        jekyll: {
            options: {
                bundleExec: true
            },
            dist: {
                options: {
                }
            },
            serve: {
                options: {
                    dest: '.dist_test',
                    serve: true,
                    port: SERVER_PORT,
                    watch: true,
                    drafts: true
                }
            },
            dev: {
                options: {
                    dest: '.dist_development',
                    config: '_config.yml,_config.development.yml',
                    drafts: true
                }
            }
        },
        open: {
            jekyll: {
                path: 'http://localhost:<%= jekyll.serve.options.port %>/ja/home.html'
            }
        },
        rsync: {
            options: {
                args: ['-avz', '--delete'],
                exclude: ['.git*', '.DS_Store'],
                recursive: true
            },
            dist: {
                options: {
                    src: './dist/',
                    dest: '/usr/local/arcadia/www.makotokw.com/dist/',
                    host: 'aries.makotokw.com',
                    syncDestIgnoreExcl: true
                }
            }
        }
    });

    grunt.registerTask('build', function (/*target*/) {
        grunt.task.run([
            'jst',
            'jekyll:dist'
        ]);
    });

    grunt.registerTask('deploy', function (/*target*/) {
        grunt.task.run([
            'rsync:dist'
        ]);
    });

    grunt.registerTask('serve', function (/*target*/) {
        return grunt.task.run([
            'jekyll:serve'
        ]);
    });

    grunt.registerTask('debug', function (target) {
        grunt.task.run([
            'jst',
            'jekyll:dev',
            'compass::theme',
            'connect:server',
            'open:jekyll',
            'watch'
        ]);
    });

    grunt.registerTask('default', ['build']);
};
