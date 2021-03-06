const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  entry: {
    vendor: [
      'expose-loader?exposes[]=$&exposes[]=jQuery!jquery',
    ],
    app: [
      './src/assets/scripts/main.js',
      './src/assets/styles/app.scss',
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        exclude: /(node_modules)/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
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
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: 'build/postcss.config.js',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [
                  path.resolve(__dirname, '../node_modules/bootstrap-sass/assets/stylesheets'),
                ],
              },
            },
          },
        ],
      },
      // https://github.com/okonet/yaml-loader
      {
        test: /\.ya?ml$/,
        use: ['json-loader', 'yaml-loader'],
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
    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images/*.png',
          to: 'images/[name].[ext]',
        },
      ],
    }),
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest({
      output: path.resolve('src/site/_data/manifest.json'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src/assets/scripts'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    },
    fallback: {
      // filenamify-url
      path: false,
      // rss-parser
      stream: require.resolve('stream-browserify'),
      timers: false,
      http: false,
      https: false,
    },
  },
};
