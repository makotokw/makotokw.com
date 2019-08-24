const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './source/_assets/scripts.webpack/main.js',
      './source/_assets/styles/app.scss',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
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
        test: /\.(css|scss)$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
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
                path: 'build/postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                'bower_components/bootstrap-sass/assets/stylesheets',
              ],
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                if (process.env.NODE_ENV === 'development') {
                  return '[name].[ext]';
                }
                return '[name]-[hash].[ext]';
              },
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyPlugin([
      {
        from: 'source/_assets/images/*.png',
        to: 'images',
        flatten: true,
      },
    ]),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.join(__dirname, '../source/_assets/scripts.webpack'),
      assets: path.join(__dirname, '../source/_assets'),
      bower: path.join(__dirname, '../bower_components'),
    },
  },
};
