import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
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
          path: '/profile',
          name: 'profile',
          component: () => import('../views/childrenView/ProfileView.vue')
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
