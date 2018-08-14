// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import App from './App'
import Admin from '@/components/AdminComponents/Admin'
import Default from '@/components/Default'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.min.css'
import Chat from '@/components/ChatComponents'

axios.defaults.baseURL = 'http://localhost:8080'
Vue.use(Vuetify)
Vue.use(VueAxios, axios)
Vue.use(Chat)

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.component('default-layout', Default)
Vue.component('admin-layout', Admin)

/* eslint-disable no-new */
// Vue instance
new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>'
})
