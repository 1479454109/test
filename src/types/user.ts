type userGlobal = {
  /** 用户ID */
  id: number
  /** 头像  */
  avatar: string
  /** 账户名  */
  account: string
  /** 昵称 */
  nickname?: string
}

export type LoginResult = userGlobal & {
  /** 手机号 */
  mobile: string
  /** 登录凭证 */
  token: string
}

export type userInfo = userGlobal & {
  birthday: string //生日
  fullLocation: string //省市区
  gender: Gender //性别
  profession: string //职业
}

type Gender = '男' | '女'

/** 个人信息 修改请求体参数 */
export type ProfileParams = Pick<userInfo, 'nickname' | 'gender' | 'birthday' | 'profession'> & {
  /** 省份编码 */
  provinceCode?: string
  /** 城市编码 */
  cityCode?: string
  /** 区/县编码 */
  countyCode?: string
}
