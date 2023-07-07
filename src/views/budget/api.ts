import { BUDGET } from '@/utils/api-services'

const service = BUDGET

export const getBudgetList = service.get('/list')
export const budgetAdd = service.post('/add')
export const budgetEdit = service.post('/edit')
export const budgetDelete = service.post('/delete')
