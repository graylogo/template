// vue.config.vue用于自定义配置
// 自定义启动端口

module.exports = {
  configureWebpack: {
    devServer: {
      host: 'localhost',
      port: 8888, // 端口号
      open: true,
      https: false,
      // Mock数据
      // before(app){

      // }
      //   跨域配置
      //   proxy: { // 配置跨域
      //     '/api': {
      //       target: 'http://localhost:8008/api/', // 这里后台的地址模拟的;应该填写你们真实的后台接口
      //       ws: true,
      //       changOrigin: true, // 允许跨域
      //       pathRewrite: {
      //         '^/api': ''// 请求的时候使用这个api就可以
      //       }
      //     }
      // }
      proxy: { // 配置跨域
        '/api': {
          target: 'http://localhost:8008/api/', // 这里后台的地址模拟的;应该填写你们真实的后台接口
          ws: true,
          changOrigin: true, // 允许跨域
          pathRewrite: {
            '^/api': ''// 请求的时候使用这个api就可以
          }
        }

      }
    }
  }
}
