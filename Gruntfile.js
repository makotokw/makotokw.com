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
        components: 'source/_assets/components',
        scripts: 'source/_assets/makotokw2014/javascripts',
        styles: 'source/_assets/makotokw2014/stylesheets'
    };

    grunt.initConfig({
        makotokw: appConfig,
        bower: {
            install: {
                options: {
                    targetDir: '<%= makotokw.components %>',
                    cleanTargetDir: true,
                    layout: function (type, component) {
                        var renamedType = type;
                        if (type === 'js') {
                            renamedType = 'javascripts';
                        } else if (type === 'css') {
                            renamedType = 'stylesheets';
                        } else if (type === 'font') {
                            renamedType = 'fonts';
                        }

                        var renamedComponent = component;
                        if (component === 'sass-bootstrap') {
                            renamedComponent = 'bootstrap';
                        }

                        // moved fonts dir to asset root
                        if (renamedType === 'fonts') {
                            return path.join('..', '..', 'assets', renamedType);
                        }

                        return path.join(renamedType, renamedComponent);
                    }
                }
            }
        },
        watch: {
            options: {
                nospawn: true,
                interval: 5007
            },
            jst: {
                files: [
                    '<%= makotokw.scripts %>/templates/*.ejs'
                ],
                tasks: ['jst']
            },
            jekyll: {
                tasks: ['jekyll:dev'],
                files: [
                    'source/**/*.html',
                    'source/**/*.js',
                    'source/**/*.scss'
                ]
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '.jekyll/**/*'
                ]
            }
        },
        connect: {
            options: {
                port: SERVER_PORT,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.jekyll')
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
                '<%= makotokw.scripts %>/{,*/}*.js'
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
                    '<%= makotokw.scripts %>/templates/templates.js': ['<%= makotokw.scripts %>/templates/*.ejs']
                }
            }
        },
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
                    dest: '.jekyll',
                    serve: true,
                    port: SERVER_PORT,
                    watch: true,
                    drafts: true
                }
            },
            dev: {
                options: {
                    dest: '.jekyll',
                    drafts: true
                }
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

    grunt.registerTask('serve', function (target) {
        return grunt.task.run([
            'jekyll:serve'
        ]);
    });

    grunt.registerTask('debug', function (target) {
        grunt.task.run([
            'jst',
            'jekyll:dev',
            'connect:livereload',
            'watch'
        ]);
    });


    grunt.registerTask('default', ['build']);
};
