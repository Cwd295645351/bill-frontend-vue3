import { COMMON } from '@/utils/api-services'

export const getLoginConfig = COMMON.get('/getLoginConfig')
export const userLogin = COMMON.post('/login')
