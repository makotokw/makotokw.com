const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve('.tmp/dist.webpack/assets'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:8080',
        files: ['source'],
        open: true,
      },
      {
        reload: false,
      },
    ),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    contentBase: [
      path.resolve('.tmp/dist.gulp'),
      path.resolve('dist'),
    ],
    open: false,
    hot: true,
  },
});
