// 存放路径: src/services/home.ts
import { http } from '@/utils/http'
import type { BannerItem, CategoryItem, MutliItem, PageResult, LikeItem } from '../types/home'

/**
 * 首页-广告轮播图区域
 * @param distributionSite 广告区域展示位置（投放位置 投放位置，1为首页，2为分类商品页） 默认是1
 */
export const getHomeBannerAPI = (distributionSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionSite,
    },
  })
}

/**
 * 首页-获取分类数据
 */
export const getCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
    data: {},
  })
}

/**
 * 首页-获取推荐
 */
export const getMutliAPI = () => {
  return http<MutliItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
    data: {},
  })
}

/**
 * 首页-猜你喜欢
 */
export const getGuessLikeAPI = (page = 1, pageSize = 10) => {
  return http<PageResult<LikeItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data: {
      page,
      pageSize,
    },
  })
}
