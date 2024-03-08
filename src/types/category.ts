import type { LikeItem } from './global'
export type CategoryTopChildrenType = {
  brands: null
  categories: null
  goods: LikeItem[]
  id: string
  name: string
  parentId: null
  parentName: null
  picture: string
  saleProperties: null
}
export type CategoryTopType = {
  children: CategoryTopChildrenType[]
  id: string
  imageBanners: []
  name: string
  picture: string
}
