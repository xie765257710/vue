// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant'
import 'vant/lib/index.css'

import fastClick from 'fastclick'
fastClick.attach(document.body)
Vue.use(Vant)

import '../static/css/reset.css'
import '../static/css/border.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
