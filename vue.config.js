const prefix = require('./src/config/qlik-resources/qlik-resources.json')['qlik-servers'].main.prefix;

module.exports = {
  publicPath: `${prefix ? '/' + prefix + '/' : '/'}extensions/client-reporting-no`,
  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  },

  //Enable automatic code fix when saved
  // chainWebpack: config => {
  //   config.module
  //     .rule("eslint")
  //     .use("eslint-loader")
  //     .options({
  //       fix: true
  //     });
  // },

  //Added for fix auto reload 
  devServer: {
    host: 'localhost'
  }
};
