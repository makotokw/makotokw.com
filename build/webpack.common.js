const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyPlugin = require('copy-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/assets/scripts/main.ts',
      './src/assets/styles/app.scss',
    ],
  },
  module: {
    rules: [
      // {
      //   enforce: 'pre',
      //   test: /\.(ts|js|vue)$/,
      //   exclude: /(node_modules)/,
      //   loader: 'eslint-loader',
      //   options: {
      //     emitWarning: true,
      //   },
      // },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
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
        use: [
          {
            loader: 'json-loader',
          },
          {
            loader: 'yaml-loader',
            // https://github.com/eemeli/yaml-loader
            options: {
              asJSON: true,
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpg|png)$/,
        type: 'asset/resource',
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
          to: 'images/[name][ext]',
        },
      ],
    }),
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest({
      output: path.resolve('src/site/_data/manifest.json'),
    }),
    new ESLintPlugin({
      extensions: ['.js', '.ts', '.vue'],
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src/assets/scripts'),
      '@assets': path.resolve(__dirname, '../src/assets'),
    },
    fallback: {
      // filenamify-url
      path: false,
      // rss-parser
      stream: require.resolve('stream-browserify'),
      buffer: false,
      url: false,
      timers: false,
      http: false,
      https: false,
    },
  },
};
