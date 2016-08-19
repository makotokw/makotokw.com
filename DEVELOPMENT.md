# Development

## Assets Pipeline

A => f(x) => B

* [Dealing with Bower Files](http://jonstuebe.com/2014/12/26/dealing-with-bower-files/)

### Third-party packages

* bower packages => ``bower install`` =>  ``source/_bower_components``

### Javascripts

* ``source/_bower_components/*/*.js`` => ``main-bower-files`` with ``gulp-bower-normalize`` => ``source/_assets/components/*/*.js``
* ``source/_assets/{theme}/templates/*.html`` => ``gulp-template-compile`` => ``source/_assets/{theme}/templates/templates.js``
* ``source/_assets/components/*/*.js`` + ``source/_assets/{theme}/javascripts/*.js`` => ``jekyll`` with ``jekyll-assets`` => ``.dist/app.js``
* ``source/_assets/components/*/*.js`` + ``source/_assets/{theme}/javascripts/*.js`` => ``gulp-concat`` => ``.dist_development_preload/app.js``
* ``source/_data/*.yaml`` => ``gulp-yaml`` => ``.dist_development_preload/data/*.json``

### Stylesheets 

* ``source/_bower_components/*/*.sass`` and ``source/_assets/{theme}/stylesheets/*.sass`` => ``jekyll`` with ``jekyll-assets`` => ``.dist/app.css``
* ``source/_bower_components/*/*.sass`` and ``source/_assets/{theme}/stylesheets/*.sass`` => ``gulp-ruby-sass`` => ``.dist_development_preload/app.css``

### Images (fonts)

* ``source/_bower_components/*.{font}`` => ``main-bower-files`` with ``gulp-bower-normalize`` => ``source/assets/components/*/font/*.*``