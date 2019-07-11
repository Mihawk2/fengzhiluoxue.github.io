import Vue from 'vue'
import Router from 'vue-router'
import Myblog from '../views/myblog'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'myblog',
      component: Myblog
    }
  ]
})
