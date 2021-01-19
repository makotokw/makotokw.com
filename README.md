makotokw.com
==============

Project for [makotokw.com](https://makotokw.com)

## Getting Started

Require Git, Node.js and Yarn to set up.

```
git clone git@github.com:makotokw/makotokw.com.git www.makotokw.com
cd www.makotokw.com
yarn
yarn run dev
```

## Directory Structure

```
src
├── assets                  source files for webpack
└── site                    source files for 11ty
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
    * [11ty](https://github.com/11ty/eleventy/) v0.11
    * [Webpack](https://webpack.js.org/) v5
    * [Babel](https://babeljs.io/) v7
    * [dart-sass](https://github.com/sass/dart-sass)
    * [ESLint](https://eslint.org/) v7
* Frontend Framework
    * [jQuery](https://jquery.com/) v3
    * [Vue.js](https://vuejs.org/) v3
    * [Twitter Bootstrap](https://getbootstrap.com/) v4
    * [Font Awesome](https://fontawesome.com/) v5
