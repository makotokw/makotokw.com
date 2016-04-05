makotokw.com
==============

Project for [makotokw.com](http://makotokw.com)

## Setup Project

Require Git, Node.js(npm), Grunt, Bower and Ruby(Bundler) for setup.

```
git clone git@bitbucket.org:makotokw/makotokw.com.git www.makotokw.com
cd www.makotokw.com
bundle install --path=vendor/bundle
npm install
grunt bower:install
```

## Development

```
grunt debug
```


### Directory Structure

```
source/
├── _assets             assets source
│   ├── components          vendor assets installed by Bower
│   └── makotokw2016        theme assets source
│       ├── images
│       ├── javascripts
│       └── stylesheets
├── _drafts             [page] draft post page
├── _fixtures           static data
├── _includes           [template] partial template
│   └── post                [template] partial template for post
├── _layouts            [template] layout template
├── _portfolios         [page] portolio page
├── _posts              [page] post page
├── assets              static assets
│   ├── components          vendor static assets
│   ├── makotokw2016        theme static assets
│   └── site                common static assets (not depend on theme)
├── blog                [page] blog archive page
└── ja                  [page] japanese page
```

## Build for production

```
grunt build
```

## Depends / Tools

* [Jekyll](http://jekyllrb.com/)
 * [Jekyll::AssetsPlugin](https://github.com/ixti/jekyll-assets)
* [Grunt](http://gruntjs.com/)
 * [grunt-jekyll](https://github.com/dannygarcia/grunt-jekyll)
 * [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
 * [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
 * [grunt-contrib-jst](https://github.com/gruntjs/grunt-contrib-jst)
 * [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
 * [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)
 * [grunt-bower-task](https://github.com/yatskevich/grunt-bower-task)
 * [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
* [Bower](http://bower.io/)
* [Compass](http://compass-style.org/)
* Assets
 * [jQuery](http://jquery.com/) v1.x
 * [Underscore.js](http://underscorejs.org/) v1.x
 * [Backbone.js](http://backbonejs.org/) v1.x
 * [Isotope](http://isotope.metafizzy.co/) v2.x
 * [queryloader2](https://github.com/Gaya/queryloader2) v2.x
 * [Twitter Bootstrap](http://getbootstrap.com/) v3.x
 * [Font Awesome](http://fortawesome.github.io/Font-Awesome/) v4.x
 * [GitHub-jQuery-Repo-Widget](https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget)
