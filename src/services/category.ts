import { http } from '@/utils/http'
import type { CategoryTopType } from '@/types/category'
export const getCategoryTopAPI = () =>
  http<CategoryTopType[]>({
    method: 'GET',
    url: '/category/top',
    data: {},
  })
