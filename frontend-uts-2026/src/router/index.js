import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import Cart from '../views/Cart.vue'
import Search from '../views/Search.vue'
import ProductDetail from '../views/ProductDetail.vue'
import Checkout from '../views/Checkout.vue'
import PlaceOrder from '../views/PlaceOrder.vue'

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
    path: '/register',
    name: 'register',
    component: RegisterView // Pastikan di-import jika dipakai, atau biarkan lazy load
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/new-products',
    name: 'new-products',
    component: () => import('../views/NewProducts.vue')
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
  
  // --- Halaman yang Membutuhkan Login (Protected Routes) ---
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: { requiresAuth: true } // Menandakan butuh login
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: Checkout,
    meta: { requiresAuth: true }
  },
  {
    path: '/placeorder',
    name: 'placeorder',
    component: PlaceOrder,
    meta: { requiresAuth: true }
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../views/MyOrder.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/edit-profile',
    name: 'edit-profile',
    component: () => import('../views/EditProfile.vue'),
    meta: { requiresAuth: true }
  },

  // --- Halaman Khusus Admin ---
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    meta: { requiresAuth: true, requiresAdmin: true } // Butuh login & status admin
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
    meta: { requiresAuth: true, requiresAdmin: true }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// --- Navigation Guard untuk Menyambungkan ke Backend Auth ---
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token') // Mengambil token dari hasil login backend
  const userRole = localStorage.getItem('role') // Opsional: jika role disimpan di localStorage

  // Cek jika halaman butuh login
  if (to.meta.requiresAuth && !token) {
    next({ name: 'login' }) // Lempar ke halaman login jika belum punya token
  } 
  // Cek jika halaman khusus admin
  else if (to.meta.requiresAdmin && userRole !== 'admin') {
    alert('Akses ditolak! Anda bukan admin.')
    next({ name: 'home' }) // Lempar balik ke home jika bukan admin
  } 
  else {
    next() // Lanjutkan perjalanan halaman
  }
})

export default router