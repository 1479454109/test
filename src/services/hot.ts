import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'
import type { HotType } from '@/types/hot'

type HotParams = PageParams & { subType?: string }
export const getHotRecommendAPI = (url: string, data?: HotParams) =>
  http<HotType>({
    method: 'GET',
    url: url,
    data,
  })
