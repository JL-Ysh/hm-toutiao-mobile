import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './assets/styles/index.less'

// 移动端适配-使用 [lib-flexible](https://github.com/amfe/lib-flexible) 动态设置 REM 基准值（html 标签的字体大小）
import 'amfe-flexible'

// 导入Vant移动端组件库
import { Button, Cell } from 'vant'

// 注册使用Vant组件
Vue.use(Button)
Vue.use(Cell)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
