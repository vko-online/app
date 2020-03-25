import get from 'lodash/get'

import { IState } from './signIn.types'
import * as CONSTANTS from './signIn.constants'
import IAction from 'src/interfaces/IAction'

const initialState: IState = {
  email: '',
  isAuthorizing: false,
  signInError: '',
  accessToken: ''
}

export default (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case CONSTANTS.RESET_STATE:
      return initialState
    case CONSTANTS.SIGN_IN_REQUEST:
      return {
        ...state,
        signInError: initialState.signInError,
        isAuthorizing: true
      }
    case CONSTANTS.SIGN_IN_SUCCESS:
      return {
        ...state,
        accessToken: get(action, 'payload.accessToken', ''),
        email: get(action, 'payload.email', ''),
        isAuthorizing: false
      }
    case CONSTANTS.SIGN_IN_FAILURE:
      return { ...state, signInError: action.error, isAuthorizing: false }
    case CONSTANTS.SIGN_IN_RESET_ERROR:
      return { ...state, signInError: initialState.signInError }
    default:
      return state
  }
}
