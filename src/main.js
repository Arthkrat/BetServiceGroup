import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import {store} from './store'
import VueRouter from 'vue-router'
import {router} from './routes.js'
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
