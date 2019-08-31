const path = require('path');
const webpack = require('webpack');
const Merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CommonConfig = require('./webpack.common.js');

const port = 3000;
const webpackDevServerPort = 9000;

module.exports = Merge(CommonConfig, {
  mode: 'development',
  output: {
    filename: '[name].js',
    path: path.resolve('dist/assets'),
    publicPath: '/assets/',
  },
  devtool: 'inline-source-map',
  plugins: [
    // use browserSync to reload a page after 11ty build.
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: port,
        proxy: `http://localhost:${webpackDevServerPort}`,
        // watch 11ty output files
        files: ['dist'],
        // Wait for building all files by 11ty.
        reloadDelay: 2000,
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
    port: webpackDevServerPort,
    contentBase: [
      path.resolve('.tmp/dist.gulp'),
      path.resolve('dist'),
    ],
    open: false,
    hot: true,
    clientLogLevel: 'silent',
  },
});
