/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  configureWebpack: {
    devServer: {
      // fixes the 'Invalid Host Header' error
      // https://v4.webpack.js.org/configuration/dev-server/#devserverdisablehostcheck
      disableHostCheck: true,
    },
  },
};
