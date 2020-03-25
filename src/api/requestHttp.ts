import axios, {
  AxiosError,
  AxiosResponse,
  AxiosRequestConfig,
  AxiosInstance
} from 'axios'
import get from 'lodash/get'
import AsyncStorage from '@react-native-community/async-storage'

import * as util from 'src/utils'
import { LOCAL_STORAGE_KEYS } from 'src/constants'
import { mockAxios } from './mocks'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface IExtendedAxiosRequestConfig extends AxiosRequestConfig {
  /**
   * serverErrorInterceptor will skip the included statuses
   */
  statusesNoErrors?: number[]
  /**
   * serverErrorInterceptor will be skipped if true
   */
  skipError?: boolean
}

interface IAxiosExtendedInstance extends AxiosInstance {
  get<T = any, R = AxiosResponse<T>> (
    url: string,
    config?: IExtendedAxiosRequestConfig
  ): Promise<R>
  delete<T = any, R = AxiosResponse<T>> (
    url: string,
    config?: IExtendedAxiosRequestConfig
  ): Promise<R>
  post<T = any, R = AxiosResponse<T>> (
    url: string,
    data?: any,
    config?: IExtendedAxiosRequestConfig
  ): Promise<R>
  put<T = any, R = AxiosResponse<T>> (
    url: string,
    data?: any,
    config?: IExtendedAxiosRequestConfig
  ): Promise<R>
  patch<T = any, R = AxiosResponse<T>> (
    url: string,
    data?: any,
    config?: IExtendedAxiosRequestConfig
  ): Promise<R>
}

const instance = axios.create({
  baseURL: util.getBaseUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}) as IAxiosExtendedInstance

mockAxios(instance)

const IGNORED_UNAUTHORIZED_ROUTES = ['/auth', 'is_logged_in']
const UNAUTHORIZED_STATUS = 401

const handleError = (error: object): void => {
  const status = get(error, 'response.status')
  const url = get(error, 'request.responseURL', '')

  if (
    status === UNAUTHORIZED_STATUS &&
    !IGNORED_UNAUTHORIZED_ROUTES.find((r: string): boolean => url.includes(r))
  ) {
    // return LocalStorage.remove(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  }

  // @TODO Add notifications here
  // eslint-disable-next-line
  console.warn(error)
}

instance.interceptors.request.use(
  (config): AxiosRequestConfig => {
    const accessToken = AsyncStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)

    if (accessToken) {
      config.headers.Authorization = accessToken
    }

    return config
  }
)

instance.interceptors.response.use(
  undefined,
  async (error: AxiosError): Promise<any> => {
    handleError(error)

    const response = get(error, 'message.isAxiosError')
      ? get(error, 'message.response')
      : get(error, 'response')

    const errorData = response || error

    return Promise.reject(errorData)
  }
)
/* eslint-enable @typescript-eslint/no-explicit-any */

export default instance
