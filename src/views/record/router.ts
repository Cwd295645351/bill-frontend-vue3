import { defineAsyncComponent } from 'vue'
import { RouteRecordRaw } from 'vue-router'

const Record = defineAsyncComponent(() => import('./Record.vue'))

const routes: Array<RouteRecordRaw> = [{ path: '/layout/record', name: 'Record', component: Record }]

export default routes
