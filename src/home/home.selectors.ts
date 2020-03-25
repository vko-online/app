// import { createSelector } from 'reselect'
import { IState } from './home.types'
import { MODULE_NAME } from './home.constants'

export const selectState = (state: { [MODULE_NAME]: IState }): IState =>
  state[MODULE_NAME]
