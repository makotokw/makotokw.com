const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    app: [
      './source/_assets/scripts/app.js',
      './source/_assets/styles/app.scss'
    ],
  },
  externals: /\/makotokw2016\/fonts\//,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: '_config/postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'source/_bower/bootstrap-sass/assets/stylesheets',
                'source/_bower/bootstrap-material-design/sass',
                'source/_bower/font-awesome/scss',
                'source/assets',
                /*
                - _bower
                - _assets/makotokw2016/javascripts
                - _assets/makotokw2016/stylesheets
                - _assets/makotokw2016/images*/

              ],
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
};
