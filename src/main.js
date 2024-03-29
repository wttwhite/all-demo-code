import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/common.css'
import '@/components'

Vue.use(VueRouter)
Vue.use(elementUi)

const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes: routes,
})
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
