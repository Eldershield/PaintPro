import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserLogin from '../components/UserLogin.vue'
import UserRegister from '../components/UserRegister.vue'
import PaintsView from '../views/PaintsView.vue'
import ColorSimulator from '../views/ColorSimulator.vue'
import BlogView from '../views/BlogView.vue'
import PaintCalculator from '../views/PaintCalculator.vue'
import Inspiracion from '../views/Inpiracion.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: UserLogin
    },
    {
      path: '/register',
      name: 'register',
      component: UserRegister
    },
    {
      path: '/catalogo',
      name: 'catalogo',
      component: PaintsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/simulador',
      name: 'simulador',
      component: ColorSimulator
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/paint-calculator',
      name: 'paint-calculator',
      component: PaintCalculator
    },
{
  path: '/inspo',
  name: 'inspo',
  component: Inspiracion
    },
 


  ]
})

// Protección de rutas
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
