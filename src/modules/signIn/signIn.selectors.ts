import { createSelector } from 'reselect'
import { IState } from './signIn.types'
import { MODULE_NAME } from './signIn.constants'

const selectState = (state: { [MODULE_NAME]: IState }): IState =>
  state[MODULE_NAME]

export const getIsAuthorizing = createSelector(
  selectState,
  (state: IState): boolean => state.isAuthorizing
)

export const getSignInError = createSelector(
  selectState,
  (state: IState): string => state.signInError
)

export const getEmail = createSelector(
  selectState,
  (state: IState): string => state.email
)

export const getSignInAccessToken = createSelector(
  selectState,
  (state: IState): string => state.accessToken
)
