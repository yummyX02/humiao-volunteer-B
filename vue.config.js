const { defineConfig } = require('@vue/cli-service')

// let publicPath = process.env.NODE_ENV === 'production' ? '/vue3-antd-admin/' : './'
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir:'dist',
  assetsDir:'assets'

})
