const path = require('node:path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CommonConfig = require('./webpack.common');

module.exports = merge(CommonConfig, {
  mode: 'production',
  output: {
    filename: '[name]-[hash].js',
    path: path.resolve('dist/assets'),
    publicPath: '/assets/',
    assetModuleFilename: 'images/[name]-[hash][ext][query]',
  },
  plugins: [
    // https://ja.vuejs.org/api/compile-time-flags
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
      __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    }),
    new CleanWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new MiniCssExtractPlugin({ filename: '[name]-[hash].css' }),
  ],
});
