/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    devServer: {
      // fixes the 'Invalid Host Header' error
      disableHostCheck: true,
    },
  },
};
