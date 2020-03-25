import { IState, IServerError } from './core.types'
import * as CONSTANTS from './core.constants'
import IAction from 'src/interfaces/IAction'

export const initialState: IState = {
  isAuthenticated: false,
  isAuthLoading: true,
  isLoggingOut: false,
  serverError: null
}

export default (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case CONSTANTS.SET_AUTH_LOADER:
      return { ...state, isAuthLoading: false }
    case CONSTANTS.LOGOUT_REQUEST:
      return { ...state, isLoggingOut: true }
    case CONSTANTS.LOGOUT_SUCCESS:
      return { ...state, isLoggingOut: false, isAuthenticated: false }
    case CONSTANTS.LOGOUT_FAILURE:
      return { ...state, isLoggingOut: false }
    case CONSTANTS.SET_SERVER_ERROR:
      return { ...state, serverError: action.payload as IServerError }
    case CONSTANTS.RESET_SERVER_ERROR:
      return { ...state, serverError: initialState.serverError }
    default:
      return state
  }
}
