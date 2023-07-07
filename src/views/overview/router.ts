import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const Overview = defineAsyncComponent(() => import('./Overview.vue'))

const routes: Array<RouteRecordRaw> = [{ path: '/layout/overview', name: 'Overview', component: Overview }]

export default routes
