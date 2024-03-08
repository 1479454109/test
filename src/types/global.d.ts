// 分页
export type PageParams = {
  page: number
  pageSize: number
}

//商品类型
export type LikeItem = {
  desc: string
  id: string
  name: string
  orderNum: number
  picture: string
  price: string
}
//列表类型
export type PageResult<T> = {
  counts: number
  items: T[]
  page: number
  pageSize: number
  pages: number
}
