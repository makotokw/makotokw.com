var path = require('path');

module.exports = function (grunt) {
    grunt.initConfig({
        bower: {
            install: {
                options: {
                    targetDir: './source/_assets/components',
                    cleanTargetDir: true,
                    layout: function(type, component) {
                        var renamedType = type;
                        if (type == 'js') renamedType = 'javascripts';
                        else if (type == 'css') renamedType = 'stylesheets';
                        else if (type == 'font') renamedType = 'fonts';

                        var renamedComponent = component;
                        if (component == 'sass-bootstrap') renamedComponent = 'bootstrap';

                        // moved fonts dir to asset root
                        if (renamedType == 'fonts') {
                            return path.join('..', '..', 'assets', renamedType);
                        }

                        return path.join(renamedType, renamedComponent);
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.registerTask('default', ['bower']);
};