// https://webpack.js.org/configuration/
// https://webpack.js.org/configuration/configuration-types/
module.exports = function webpackConfig({ app }, args) {
  return require(`./build/webpack.${app.env}.js`);
};
