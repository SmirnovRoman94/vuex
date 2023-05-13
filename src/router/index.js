import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.bak.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.bak.vue'),
  },
  {
    path: '/vacancy',
    name: 'vacancy',
    component: () => import('../views/VacancyView.bak.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFoundView.bak.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
