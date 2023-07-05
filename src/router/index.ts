import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import loginRoute from '@/components/login/router'
import layoutRoute from '@/components/layout/router.js'

const routes: Array<RouteRecordRaw> = [{ path: '/', redirect: '/login' }]

routes.push(...loginRoute)
routes.push(...layoutRoute)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
