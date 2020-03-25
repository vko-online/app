import { AxiosInstance } from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mocksConfig from './mocksConfig'
import { IMockConfig, IRequestHandler } from './types'

const mockAxios = (axiosInstance: AxiosInstance): MockAdapter => {
  const mock = new MockAdapter(axiosInstance, { delayResponse: 300 })
  const getRequestMatcher = (mockConfig: IMockConfig): IRequestHandler => {
    if (mockConfig.httpMethod === 'post') return mock.onPost(mockConfig.path)
    if (mockConfig.httpMethod === 'put') return mock.onPut(mockConfig.path)
    if (mockConfig.httpMethod === 'delete') {
      return mock.onDelete(mockConfig.path)
    }
    if (mockConfig.httpMethod === 'patch') return mock.onPatch(mockConfig.path)

    return mock.onGet(mockConfig.path)
  }

  mocksConfig.forEach((configItem): void => {
    const matcher = getRequestMatcher(configItem)
    const replyFunc = configItem.replyOnce ? matcher.replyOnce : matcher.reply

    replyFunc(configItem.response.status, configItem.response.data)
  })

  /**
   * Any not mocked request is passed thought to the API
   */
  mock.onAny().passThrough()

  return mock
}

export default mockAxios
