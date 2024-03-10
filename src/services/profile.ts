import { http } from '@/utils/http'
import type { userInfo, ProfileParams } from '@/types/user'

/**
 * 获取个人信息
 */
export const getMemberProfileAPI = () => {
  return http<userInfo>({
    method: 'GET',
    url: '/member/profile',
    data: {},
  })
}

export const putMemberProfileAPI = (data: ProfileParams) => {
  return http({
    method: 'PUT',
    url: '/member/profile',
    data,
  })
}
