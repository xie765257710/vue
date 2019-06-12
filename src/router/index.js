import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Order from '@/components/Order'
import Msg from '@/components/Message'
import Mine from '@/components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/msg',
      name: 'msg',
      component: Msg
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    }
  ]
})
