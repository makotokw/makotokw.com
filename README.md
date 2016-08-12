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

* Build tools
 * [Jekyll](http://jekyllrb.com/)
 * [Jekyll::AssetsPlugin](https://github.com/ixti/jekyll-assets)
 * [gulp](http://gulpjs.com/)
 * [Bower](http://bower.io/)
 * [Sass](http://sass-lang.com/)
* Assets
 * [jQuery](http://jquery.com/) v1.x
 * [Underscore.js](http://underscorejs.org/) v1.x
 * [Backbone.js](http://backbonejs.org/) v1.x
 * [Twitter Bootstrap](http://getbootstrap.com/) v3.x
 * [Font Awesome](http://fortawesome.github.io/Font-Awesome/) v4.x
 * [GitHub-jQuery-Repo-Widget](https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget)
 * [Isotope](http://isotope.metafizzy.co/) v2.x
