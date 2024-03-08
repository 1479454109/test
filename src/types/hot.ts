import type { PageResult, LikeItem } from './global'

export type HotType = {
  bannerPicture: string
  id: string
  subTypes: HotItemsType[]
  title: string
}

export type HotItemsType = {
  goodsItems: PageResult<LikeItem>
  id: string
  title: string
}
