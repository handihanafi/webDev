module.exports = {
  devServer: {
    compress: true,
    // disableHostCheck: true,
    allowedHosts: 'all',
  },
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true,
      includeLocales: false,
      enableBridge: true
    }
  },
  lintOnSave: false
}
