const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@": "./src",
        'components': "@/components",
        'router': "@/router",
        'page': "@/page",
        "assets": "@/assets"
      }
    }
  }
})
