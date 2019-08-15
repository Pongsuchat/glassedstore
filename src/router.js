import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'
import Warehouse from './views/Warehouse'
import Product from './views/Product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: Warehouse
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    }
  ]
})