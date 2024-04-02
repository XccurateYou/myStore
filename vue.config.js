const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     '/login': {
  //       target: 'http://10.129.152.215:8080/userManagement/logIn',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
