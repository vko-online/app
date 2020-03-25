import { AxiosRequestConfig } from 'axios'
import MockAdapter from 'axios-mock-adapter'

/**
 * Here are types that are not exported by axios-mock-adapter
 * @TODO Monitor the npm package to check this to be fixed
 */
/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface IResponse {
  status: number
  data: any
}

export type HttpMethod = 'get' | 'post' | 'delete' | 'put' | 'patch'

export interface IMockConfig {
  replyOnce?: boolean
  httpMethod: HttpMethod
  path: string
  response: IResponse
}

// Temporary solution, not all axios-mock-adapter types are not exported
export type CallbackResponseSpecFunc = (
  config: AxiosRequestConfig
) => any[] | Promise<any[]>

export type ResponseSpecFunc = (
  statusOrCallback: number | CallbackResponseSpecFunc,
  data?: any,
  headers?: any
) => MockAdapter

export interface IRequestHandler {
  reply: ResponseSpecFunc
  replyOnce: ResponseSpecFunc
  passThrough (): MockAdapter
  networkError (): void
  networkErrorOnce (): void
  timeout (): void
  timeoutOnce (): void
}

export interface IMockAdapterOptions {
  delayResponse?: number
}

export interface IRequestDataMatcher {
  [index: string]: any
  params?: {
    [index: string]: any;
  }
}

export interface IHeadersMatcher {
  [header: string]: string
}

export type RequestMatcherFunc = (
  matcher?: string | RegExp,
  body?: string | IRequestDataMatcher,
  headers?: IHeadersMatcher
) => IRequestHandler
/* eslint-enable  @typescript-eslint/no-explicit-any */
