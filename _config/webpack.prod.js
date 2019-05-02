const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = Merge(CommonConfig, {
  mode: 'production',
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('bundles'),
    publicPath: '/bundles/',
  },
  plugins: [
    new CleanWebpackPlugin(['bundles'], {root: path.resolve(__dirname, '..'), verbose: true}),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new MiniCssExtractPlugin({filename: '[name]-[hash].css'}),
    new WebpackAssetsManifest({
      output: '../source/_data/manifest.json',
    }),
  ],
});
