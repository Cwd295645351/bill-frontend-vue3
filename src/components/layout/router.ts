import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const Layout = defineAsyncComponent(() => import('./Layout.vue'))

const routes: Array<RouteRecordRaw> = [{ path: '/layout', name: 'Layout', component: Layout, children: [] }]

export default routes
