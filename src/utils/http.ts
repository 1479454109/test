import { useMemberStore } from '@/stores'

const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(option: UniApp.RequestOptions) {
    //1.非http开头需拼接地址
    if (!option.url.startsWith('http')) {
      option.url = baseURL + option.url
    }
    //2.请求超时，默认60s
    option.timeout = 10000
    //3.添加请求头标识
    option.header = {
      ...option.header,
      'source-client': 'miniapp',
    }
    //4.添加token 请求头
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      option.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

//请求函数
// @param UniApp.RequestOptions
// @returns Promise
interface Data<T> {
  code: string
  msg: string
  result: T //动态类型
}
export const http = <T>(options: UniApp.RequestOptions) => {
  //返回 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      //请求成功
      success(res) {
        const status = res.statusCode
        if (status >= 200 && status < 300) {
          resolve(res.data as Data<T>)
        } else if (status == 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误',
        })
        reject(err)
      },
    })
  })
}
