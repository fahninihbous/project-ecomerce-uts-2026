import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import Cart from '../views/Cart.vue'
import Search from '../views/Search.vue'
import ProductDetail from '../views/ProductDetail.vue'
// import Category from '../views/Category.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },

  {
    path: '/search',
    name: 'search',
    component: Search
  },

  {
    path: '/productdetail',
    name: 'productdetail',
    component: ProductDetail
  },

//   {
//     path: '/category',
//     name: 'category',
//     component: Category
//   }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router