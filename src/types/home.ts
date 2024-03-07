export type BannerItem = {
  hrefUrl: string
  id: string
  imgUrl: string
  type: string
}

export type CategoryItem = {
  id: string
  name: string
  icon: string
}

export type MutliItem = {
  alt: string
  id: string
  pictures: string[]
  target: string
  title: string
  type: number
}

// 猜你喜欢
export type LikeItem = {
  desc: string
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}
export type PageResult<T> = {
  counts: number
  items: T[]
  page: number
  pageSize: number
  pages: number
}
