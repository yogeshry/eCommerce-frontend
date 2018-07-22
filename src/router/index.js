import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Detail from '@/components/Detail'
import Cart from '@/components/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }, {
      path: '/:id',
      name: 'Detail',
      component: Detail,
      props: true
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    }
  ],
  mode: 'history'
})
