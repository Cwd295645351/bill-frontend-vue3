import { RouteRecordRaw } from 'vue-router'

const Layout = () => import('./Layout.vue')

const routes: Array<RouteRecordRaw> = [{ path: '/layout', name: 'Layout', component: Layout, children: [] }]

export default routes
