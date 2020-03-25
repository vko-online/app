import { AxiosResponse } from 'axios'

const getResponseErrorMessage = (response: AxiosResponse): string => {
  if (Array.isArray(response.data.error)) {
    return response.data.error.join('')
  }

  return 'Something bad happened'
}

export default getResponseErrorMessage
