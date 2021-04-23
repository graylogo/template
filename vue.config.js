// vue.config.vue用于自定义配置
// 自定义启动端口

module.exports = {
  configureWebpack: {
    devServer: {
      port: 8888, // 端口号
      open: true
      // Mock数据
      // before(app){

      // }
    }
  }
}
