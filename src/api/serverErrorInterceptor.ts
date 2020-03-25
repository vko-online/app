import { Store, AnyAction } from 'redux'
import { AxiosResponse } from 'axios'
import get from 'lodash/get'
import { navigate } from 'src/navigation'

import * as coreActions from 'src/core/core.actions'
import { PATHS } from 'src/constants'

const STATUS_CODES_TO_SKIP = [401, 422]

/* eslint-disable @typescript-eslint/no-explicit-any */
type Interceptor = (error: any) => any

const serverErrorInterceptor = (
  store: Store<any, AnyAction>
): Interceptor => async (
  error: AxiosResponse
): Promise<AxiosResponse | void> => {
  if (get(error, 'config.skipError', false)) return Promise.reject(error)

  const statusesNoErrors = get(error, 'config.statusesNoErrors', [])

  if (statusesNoErrors.includes(error.status)) return Promise.reject(error)
  if (error.status === 401) {
    navigate(PATHS.SIGN_IN)
    store.dispatch(coreActions.logoutSuccess())
    return Promise.reject(error)
  }

  if (STATUS_CODES_TO_SKIP.includes(error.status)) return Promise.reject(error)

  const isServerError = error.status > 300

  if (!isServerError) return Promise.reject(error)

  const isHtmlResponseError = get(error, 'headers.content-type', '').includes(
    'text/html'
  )
  const errorType = isHtmlResponseError ? 'html' : 'text'

  store.dispatch(
    coreActions.setServerError(
      get(error, 'data.message') || JSON.stringify(error.data) || String(error),
      errorType
    )
  )

  return error
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export default serverErrorInterceptor
