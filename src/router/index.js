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
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVmodel.vue')
    },
    {
      path:'/VforAndVBind',
      name:'VforAndVBind',
      component: () => import('../views/VforAndVBind.vue'),
    },
    {
      path:'/VonAndVifAndVshow',
      name:'VonAndVifAndVshow',
      component: () =>import('../views/VonAndVifAndVshow.vue'),
    },
    {
      path:'/Props',
      name:'Props',
      component: () =>import('../views/Props.vue'),
    },
    {
      path:'/emit',
      name:'emit',
      component: () =>import('../views/emit.vue'),
    }
  ]
})

export default router
