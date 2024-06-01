// https://www.11ty.dev/docs/data-js/
module.exports = function () {
  return {
    env: process.env.NODE_ENV || 'production',
  };
};
