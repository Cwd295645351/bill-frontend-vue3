import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const Login = defineAsyncComponent(() => import('./Layout.vue'))

const routes: Array<RouteRecordRaw> = [{ path: '/layout', name: 'Layout', component: Login }]

export default routes
