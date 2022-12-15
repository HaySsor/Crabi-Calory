import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


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
      component: () => import('@/views/LoginSignView.vue')

      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/userHomePage',
      name: 'userHomePage',
      component: () => import('@/views/UserHomePage.vue'),
      children: [
        {
          path: '/addMeal',
          name: 'addMeal',
          component: () => import('@/views/childrenView/AddMealView.vue')
        },
        {
          path: '/weightHistory',
          name: 'weightHistory',
          component: () => import('@/views/childrenView/WeightHistoryView.vue')
        },
        {
          path: '/mealList',
          name: 'mealList',
          component: () => import('@/views/childrenView/MealListView.vue')
        },
        {
          path:'/profile',
          name:'profile',
          component: () => import('../views/childrenView/ProfileView.vue')
        }
      ],
    }
  ],
  linkExactActiveClass: 'active'
})

export default router
