import { http } from '@/utils/http'
import type { LoginResult } from '@/types/user'

/**
 * 登录
 */
export const LoginWxMinAPI = (code: string, iv: string, encryptedData: string) => {
  return http({
    method: 'POST',
    url: '/login/wxMin',
    data: {
      code,
      iv,
      encryptedData,
    },
  })
}

/**
 * 登录-内测版
 */
export const LoginWxMinSimpleAPI = (phoneNumber: string) => {
  return http<LoginResult>({
    method: 'POST',
    url: '/login/wxMin/simple',
    data: {
      phoneNumber,
    },
  })
}
