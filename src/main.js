import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import router from '@/router'
import App from './App.vue'

// Tip提示信息
// 开发环境在控制台的提示信息  更详细
Vue.config.productionTip = false

Vue.use(ElementUI)

// main.js 的职责
// 1.导入项目所需要依赖的资源（js包 css文件 其他资源）
// 2.创建一个根实例

// 根实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
