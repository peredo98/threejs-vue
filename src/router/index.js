import Vue from 'vue'
import Router from 'vue-router'
import Threejs from '@/components/Threejs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Threejs',
      component: Threejs
    }
  ]
})
