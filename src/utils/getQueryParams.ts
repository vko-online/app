import queryString from 'query-string'

const getQueryParams = (searchValue: string): queryString.ParsedQuery<string> =>
  queryString.parse(searchValue)

export default getQueryParams
