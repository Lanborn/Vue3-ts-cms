// service统一出口
import ANRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'
import { AxiosRequestConfig } from 'axios'

const anRequest = new ANRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    'Content-Type': 'application/json'
  },
  interceptors: {
    requestInterceptor: (config: AxiosRequestConfig<any>) => {
      // 携带token的拦截
      const token = localCache.getCache('token')
      if (token) {
        config.headers!.Authorization = token
      }
      return config
    },
    requestInterceptorCatch: (err: any) => {
      return err
    },
    responseInterceptor: (res: any) => {
      return res
    },
    responseInterceptorCatch: (err: any) => {
      return err
    }
  }
})

export default anRequest
