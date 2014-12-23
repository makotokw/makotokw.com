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
        theme: 'source/_assets/makotokw2014',
        distProduction: 'dist',
        distDevelopment: '.dist_development',
        distDevelopmentPreload: '.dist_development_preload',
        distTest: '.dist_test'
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
            fixtures: {
                files: ['<%= makotokw.source %>/_fixtures/*.yml'],
                tasks: ['convert:development']
            },
            js: {
                files: [
                    '<%= makotokw.theme %>/javascripts/{,*/}*.js'
                ],
                tasks: ['uglify:preload']
            },
            jst: {
                files: [
                    '<%= makotokw.theme %>/javascripts/templates/*.ejs'
                ],
                tasks: ['jst']
            },
            compass: {
                files: ['<%= makotokw.theme %>/stylesheets/{,*/}*.{scss,sass}'],
                tasks: ['compass:preload']
            },
            jekyll: {
                tasks: ['jekyll:dev'],
                files: [
                    '<%= makotokw.source %>/**/*.html'
                ]
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%= makotokw.distDevelopment %>/**/*',
                    '<%= makotokw.distDevelopmentPreload %>/assets/*.css',
                    '<%= makotokw.distDevelopmentPreload %>/assets/*.js'
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
                            mountFolder(connect, appConfig.distDevelopmentPreload),
                            mountFolder(connect, appConfig.distDevelopment)
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
            options: {
                processName: function(filepath) {
                    return filepath.match(/templates\/(.+)\.ejs/)[1];
                }
            },
            source: {
                files: {
                    '<%= makotokw.theme %>/javascripts/templates/templates.js': ['<%= makotokw.theme %>/javascripts/templates/*.ejs']
                }
            },
            preload: {
                files: {
                    '.dist_development_preload/assets/templates/templates.js': ['<%= makotokw.theme %>/javascripts/templates/*.ejs']
                }
            }
        },
        compass: {
            preload: {
                options: {
                    sassDir: '<%= makotokw.theme %>/stylesheets',
                    cssDir: '<%= makotokw.distDevelopmentPreload %>/assets',
                    imagesDir: '<%= makotokw.source %>/assets/site/images',
                    javascriptsDir: '<%= makotokw.theme %>/javascripts',
                    fontsDir: '<%= makotokw.source %>/assets/site/fonts',
                    importPath: '<%= makotokw.components %>/stylesheets',
                    relativeAssets: true
                }
            }
        },
        uglify: {
            preload: {
                files: {
                    '.dist_development_preload/assets/app.js': [
                        '<%= makotokw.theme %>/javascripts/main.js',
                        '<%= makotokw.theme %>/javascripts/routes/*.js',
                        '<%= makotokw.theme %>/javascripts/models/*.js',
                        '<%= makotokw.theme %>/javascripts/collections/*.js',
                        '<%= makotokw.theme %>/javascripts/views/*.js'
                    ]
                }
            }
        },
        convert: {
            options: {
                explicitArray: false
            },
            development: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= makotokw.source %>/_fixtures/',
                        src: ['*.yml'],
                        dest: '<%= makotokw.distDevelopmentPreload %>/data',
                        ext: '.json'
                    }
                ]
            },
            production: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= makotokw.source %>/_fixtures/',
                        src: ['*.yml'],
                        dest: '<%= makotokw.distProduction %>/data',
                        ext: '.json'
                    }
                ]
            }
        },
        // https://github.com/dannygarcia/grunt-jekyll
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
                    dest: '<%= makotokw.distTest %>',
                    serve: true,
                    port: SERVER_PORT,
                    watch: true,
                    drafts: true
                }
            },
            dev: {
                options: {
                    dest: '<%= makotokw.distDevelopment %>',
                    config: '_config.yml,_config.development.yml',
                    drafts: true
                }
            }
        },
        open: {
            jekyll: {
                path: 'http://localhost:<%= jekyll.serve.options.port %>/'
            }
        },
        clean: {
            test: ['<%= makotokw.distTest %>'],
            development: ['<%= makotokw.distDevelopment %>', '<%= makotokw.distDevelopmentPreload %>'],
            production: ['<%= makotokw.distProduction %>']
        },
        rsync: {
            options: {
                args: ['-avz', '--delete'],
                exclude: ['.git*', '.DS_Store'],
                recursive: true
            },
            dist: {
                options: {
                    src: './<%= makotokw.distProduction %>/',
                    dest: '/usr/local/arcadia/www.makotokw.com/dist/',
                    host: 'aries.makotokw.com',
                    syncDestIgnoreExcl: true
                }
            }
        }
    });

    grunt.registerTask('build', function (/*target*/) {
        grunt.task.run([
            'jst:source',
            'jekyll:dist',
            'convert:development'
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
            'clean:development',
            'jst:source',
            'convert:development',
            'jekyll:dev',
            'uglify:preload',
            'jst:preload',
            'compass:preload',
            'connect:server',
            'open:jekyll',
            'watch'
        ]);
    });

    grunt.registerTask('default', ['build']);
};
