import { createSelector } from 'reselect'
import { IState, IServerError } from './core.types'
import { MODULE_NAME } from './core.constants'

const selectState = (state: { [MODULE_NAME]: IState }): IState =>
  state[MODULE_NAME]

export const getIsAuthenticated = createSelector(
  selectState,
  (state: IState): boolean => state.isAuthenticated
)

export const getIsAuthLoading = createSelector(
  selectState,
  (state: IState): boolean => state.isAuthLoading
)

export const getServerError = createSelector(
  selectState,
  (state: IState): IServerError | null => state.serverError
)
