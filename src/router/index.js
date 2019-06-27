import Vue from 'vue'
import Router from 'vue-router'
import Myblog from '../components/myblog'
import ElementUI from 'element-ui'

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
