import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfigurationView from '@/views/ConfigurationView.vue'
import ScoreView from '../views/ScoreView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/configuration',
      name: 'configuration',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: ConfigurationView,
    },
    {
      path: '/score',
      name: 'score',
      component: ScoreView,
    }
  ],
})

export default router
