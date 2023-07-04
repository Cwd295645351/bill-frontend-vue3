import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import loginRoute from '@/components/login/router'

const routes: Array<RouteRecordRaw> = [{ path: '/', redirect: '/login' }]
routes.push(...loginRoute)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
