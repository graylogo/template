import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/reset.css' // 样式初始化
import './theme/index.css'
import './plugins/element.js'
import ElementUI from 'element-ui'
import axios from 'axios'

// 注册filter
import filters from './utils/filter'
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
// 打印插件
import Print from 'vue-print-nb'
import 'element-ui/lib/theme-chalk/index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'

Vue.use(ElementUI)
Vue.use(Print)

Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
