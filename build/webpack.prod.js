const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = Merge(CommonConfig, {
  mode: 'production',
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('dist/assets'),
    publicPath: '/assets/',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new CopyPlugin([
      {
        from: 'source/_assets/images/*.png',
        to: 'images',
        flatten: true,
      },
    ]),
    new MiniCssExtractPlugin({filename: '[name]-[hash].css'}),
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest({
      output: path.resolve('source/_data/manifest.json'),
    }),
  ],
});