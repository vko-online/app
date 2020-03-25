import { AxiosResponse } from 'axios'
import { ThunkDispatch, ThunkAction } from 'redux-thunk'
import { AnyAction } from 'redux'
import AsyncStorage from '@react-native-community/async-storage'
import * as CONSTANTS from './core.constants'
import { requestHttp, urls } from 'src/api'
import IAction from 'src/interfaces/IAction'
import IStatusedMessage from 'src/interfaces/IStatusedMessage'
import { LOCAL_STORAGE_KEYS } from 'src/constants'

export const setAuthLoading = (): IAction => ({
  type: CONSTANTS.SET_AUTH_LOADER
})

export const logoutRequest = (): IAction => ({
  type: CONSTANTS.LOGOUT_REQUEST
})
export const logoutSuccess = (): IAction => ({
  type: CONSTANTS.LOGOUT_SUCCESS
})
export const logoutFailure = (): IAction => ({
  type: CONSTANTS.LOGOUT_FAILURE
})

export const logout = (): ThunkAction<
  Promise<AxiosResponse<IStatusedMessage>>,
  {},
  {},
  AnyAction
> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<AxiosResponse<IStatusedMessage>> => {
  try {
    dispatch(logoutRequest())

    const response: AxiosResponse<IStatusedMessage> = await requestHttp.post(
      urls.getSignOutUrl()
    )

    // tslint:disable-next-line: no-floating-promises
    AsyncStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN)

    dispatch(logoutSuccess())

    return response
  } catch (error) {
    dispatch(logoutFailure())

    return error
  }
}

export const setServerError = (
  data: string,
  type: 'text' | 'html' = 'text'
): IAction => ({
  type: CONSTANTS.SET_SERVER_ERROR,
  payload: { data, type }
})

export const resetServerError = (): IAction => ({
  type: CONSTANTS.RESET_SERVER_ERROR
})
