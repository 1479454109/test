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

export type PageResult<T> = {
  counts: number
  items: T[]
  page: number
  pageSize: number
  pages: number
}
