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
import AddCategories from '@/components/AdminComponents/AddCategories'
import AddProducts from '@/components/AdminComponents/AddProducts'
import ViewCategories from '@/components/AdminComponents/ViewCategories'
import ViewProducts from '@/components/AdminComponents/ViewProducts'
import ViewUsers from '@/components/AdminComponents/ViewUsers'
import ViewOrders from '@/components/AdminComponents/ViewOrders'
import ViewCart from '@/components/AdminComponents/ViewCart'
import AddAdmin from '@/components/AdminComponents/AddAdmin'
import ViewAdmin from '@/components/AdminComponents/ViewAdmin'
import Profile from '@/components/Profile'

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
      path: '/profile',
      name: 'Profile',
      component: Profile,
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
    },
    {
      path: '/admin/AddCategories',
      name: 'AddCategories',
      component: AddCategories,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/AddProducts',
      name: 'AddProducts',
      component: AddProducts,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/ViewCategories',
      name: 'ViewCategories',
      component: ViewCategories,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/ViewProducts',
      name: 'ViewProducts',
      component: ViewProducts,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/ViewUsers',
      name: 'ViewUsers',
      component: ViewUsers,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/ViewOrders',
      name: 'ViewOrders',
      component: ViewOrders,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/ViewCart',
      name: 'ViewCart',
      component: ViewCart,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/AddAdmin',
      name: 'AddAdmin',
      component: AddAdmin,
      meta: {layout: 'admin'}
    },
    {
      path: '/admin/ViewAdmin',
      name: 'ViewAdmin',
      component: ViewAdmin,
      meta: {layout: 'admin'}
    }
  ],
  mode: 'history'
})
