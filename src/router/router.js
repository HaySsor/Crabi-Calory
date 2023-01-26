import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomeView.vue'
import useUserStore from '../stores/user'


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
      component: () => import('@/pages/LoginSignView.vue')

      // component: () => import('../pages/AboutView.vue')
    },
    {
      path: '/userHomePage',
      name: 'userHomePage',
      component: () => import('@/pages/UserHomePage.vue'),
      children: [
        {
          path: 'addMeal',
          name: 'addMeal',
          component: () => import('@/layout/AddMealView.vue')
        },
        {
          path: 'weightHistory',
          name: 'weightHistory',
          component: () => import('@/layout/WeightHistoryView.vue')
        },
        {
          path: 'mealList',
          name: 'mealList',
          component: () => import('@/layout/MealListView.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/layout/ProfileView.vue')
        }
      ],
      meta: {
        requiresAuth: true,
      },
    }
  ],

  linkExactActiveClass: 'active'
})

router.beforeEach((to, form, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }
  const store = useUserStore()

  if (store.userLoggedIn) {
    next()
  } else {
    next({
      name: 'home'
    })
  }
})

export default router
