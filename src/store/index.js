import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import categories from './modules/categories'
import auth from './modules/auth'
import admin from './modules/admin'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    cart,
    products,
    categories,
    auth,
    admin
  }
})
