import moment from 'moment'

export default (date: string, format = 'DD/MM/YYYY'): boolean =>
  moment().diff(moment(date, format), 'days') === 0
