makotokw.com
==============

## Setup Project

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


## Deploy

```
grunt build
grunt deploy
```

## Depends


* [GitHub-jQuery-Repo-Widget](https://github.com/JoelSutherland/GitHub-jQuery-Repo-Widget)

### Jekyll and Grunt to build site

* [jekyll](http://jekyllrb.com/)
* [Jekyll::AssetsPlugin](https://github.com/ixti/jekyll-assets)

* [grunt-jekyll](https://github.com/dannygarcia/grunt-jekyll)
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
* [connect-livereload](https://github.com/intesso/connect-livereload)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch)
* [grunt-contrib-jst](https://github.com/gruntjs/grunt-contrib-jst)
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [jshint-stylish](https://github.com/sindresorhus/jshint-stylish)
* [grunt-bower-task](https://github.com/yatskevich/grunt-bower-task)
* [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks)
