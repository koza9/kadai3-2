import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CardView from '../views/CardView.vue' 

import tabView from '../views/tabView.vue' 
import linkView from '../views/linkView.vue'
import RirekiView from '../views/RirekiView.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/card',
      name: 'card',
      component: CardView,
    },

    {
      path: '/tab',
      name: 'tab',
      component: tabView,
    },

    {
      path: '/link',
      name: 'link',
      component: linkView,
    },

    {
      path: '/rireki',
      name: 'rireki',
      component: RirekiView,
    },

    {
      path: '/quiz',
      name: 'quiz',
      component:QuizView,
    },
  ],
})

export default router