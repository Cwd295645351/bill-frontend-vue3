import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const Login = defineAsyncComponent(() => import('./Login.vue'))

const routes: Array<RouteRecordRaw> = [{ path: '/login', name: 'Login', component: Login }]

export default routes
