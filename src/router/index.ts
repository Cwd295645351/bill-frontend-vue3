import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import loginRoute from '@/components/login/router'
import layoutRoute from '@/components/layout/router.js'

const routes: Array<RouteRecordRaw> = [{ path: '/', redirect: '/login' }]

// 读取 views 页面钟定义的路由
const routeModules: any = import.meta.glob('@/views/**/router.ts', { eager: true })
const childRoutes = Object.keys(routeModules)
  .map((path: string) => routeModules[path].default)
  .flat()
layoutRoute[0].children?.push(...childRoutes)

routes.push(...loginRoute)
routes.push(...layoutRoute)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
