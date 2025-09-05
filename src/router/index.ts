import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Services from '../views/Services.vue'
import Pricing from '../views/Pricing.vue'
import Tracking from '../views/Tracking.vue'
import Contact from '../views/Contact.vue'
import ServiceDetail from '../views/ServiceDetail.vue'
import Pickup from '../views/Pickup.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/Dashboard.vue'
import ManagerDashboard from '../views/ManagerDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/services/:type',
    name: 'service-detail',
    component: ServiceDetail,
    props: true
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: Pricing
  },
  {
    path: '/tracking',
    name: 'tracking',
    component: Tracking
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../views/Tools.vue')
  },
  {
    path: '/pickup',
    name: 'pickup',
    component: Pickup
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true }
  },
  {
    path: '/manager-dashboard',
    name: 'manager-dashboard',
    component: ManagerDashboard,
    meta: { requiresAuth: true, requiresManager: true }
  },
  {
    path: '/purchase-delegate',
    name: 'purchase-delegate',
    component: () => import('../views/PurchaseDelegate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router