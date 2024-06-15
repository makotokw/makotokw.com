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
dist
├── assets                  output directory by 11ty and webpack
│    └── (app|vendor)-*.*   output files by webpack
└── *                       output directory/files by 11ty

src
├── assets                  source files for webpack
└── site                    source files for 11ty
    ├── _includes           [template] partial template
    │    └── post           [template] partial template for post
    ├── _layouts            [template] layout template
    ├── _portfolios         [page] portolio page
    ├── _posts              [page] post page
    ├── assets              static assets
    │    └── site            common static assets (not depend on theme)
    ├── blog                [page] blog archive page
    └── ja                  [page] japanese page
```


## Build for production

```
yarn build
```

## Depends / Tools

* Node.js
* [ESLint](https://eslint.org/) v8
* Static Site
    * [11ty](https://www.11ty.dev/) v2
* Frontend
    * TypeScript
    * Build tools
      * [Webpack](https://webpack.js.org/) v5
      * [Dart Sass](https://github.com/sass/dart-sass)
    * Framework
        * [Vue.js](https://vuejs.org/) v3
        * [Twitter Bootstrap](https://getbootstrap.com/) v5
        * [Font Awesome](https://fontawesome.com/) v6
