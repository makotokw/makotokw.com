const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const CommonConfig = require('./webpack.common.js');

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
    new MiniCssExtractPlugin({ filename: '[name]-[hash].css' }),
    // https://github.com/webdeveric/webpack-assets-manifest
    new WebpackAssetsManifest({
      output: path.resolve('src/site/_data/manifest.json'),
    }),
  ],
});
