import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import ProductDetail from '@/components/ProductDetail'
import Cart from '@/components/Cart'
import SubCategory from '@/components/SubCategory'
import AdminIndex from '@/components/AdminComponents/Index'
import AdminLogin from '@/components/AdminComponents/Login'

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
      path: '/product/:id',
      name: 'ProductDetail',
      component: ProductDetail,
      props: true
    }, {
      path: '/sc/:id',
      name: 'SubCategory',
      component: SubCategory,
      props: true
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/admin',
      name: 'AdminIndex',
      component: AdminIndex,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/login',
      name: 'AdminLogin',
      component: AdminLogin,
      meta: {layout: 'admin'}
    }
  ],
  mode: 'history'
})
