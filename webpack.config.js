// https://webpack.js.org/configuration/
// https://webpack.js.org/configuration/configuration-types/
module.exports = function (env) {
  return require(`./build/webpack.${env}.js`);
};
