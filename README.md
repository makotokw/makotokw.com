makotokw.com
==============

Project for [makotokw.com](http://makotokw.com)

## Setup Project

Require Git, Node.js(npm), Gulp, Bower and Ruby(Bundler) for setup.


```
git clone git@github.com:makotokw/makotokw.com.git www.makotokw.com
cd www.makotokw.com
yarn
yarn run bower:install
```

## Development

```
yarn run dev
```


### Directory Structure

```
source/
├── _assets             assets source
├── _includes           [template] partial template
│   └── post            [template] partial template for post
├── _layouts            [template] layout template
├── _portfolios         [page] portolio page
├── _posts              [page] post page
├── assets              static assets
│   └── site            common static assets (not depend on theme)
├── blog                [page] blog archive page
└── ja                  [page] japanese page
```


## Build for production

```
yarn build
```

## Depends / Tools

* Build tools
    * [11ty](https://github.com/11ty/eleventy/)
    * [Bower](http://bower.io/)
    * [gulp](https://gulpjs.com/)
    * [Webpack](https://webpack.js.org/)
    * [node-sass](https://github.com/sass/node-sass)
* Frontend Libraries
    * [jQuery](https://jquery.com/) v1.x
    * [Underscore.js](https://underscorejs.org/) v1.x
    * [Backbone.js](https://backbonejs.org/) v1.x
    * [Twitter Bootstrap](https://getbootstrap.com/) v3.x
    * [Material Design for Bootstrap](https://fezvrasta.github.io/bootstrap-material-design/) v3.x
    * [Font Awesome](https://fontawesome.com/) v4.x
    * [GitHub-jQuery-Repo-Widget](https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget)
