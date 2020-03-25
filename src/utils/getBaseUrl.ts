import last from 'lodash/last'
/**
 * Define base server url
 * @return Server base url
 */
// eslint-disable-next-line
export const getBaseUrl = (): string => {
  const baseUrl =
    process.env.REACT_APP_BASE_API_URL || 'missingBaseApiUrlEnvVar'
  return last(baseUrl) !== '/' ? `${baseUrl}/` : baseUrl
}
