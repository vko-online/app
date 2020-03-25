import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import { AxiosResponse } from 'axios'

import IAction from 'src/interfaces/IAction'
import { requestHttp, urls } from 'src/api'
import { ISignInResponse, ISendCodeResponse } from './signIn.types'
import * as CONSTANTS from './signIn.constants'
import AsyncStorage from '@react-native-community/async-storage'
import { LOCAL_STORAGE_KEYS } from 'src/constants'
import { getResponseErrorMessage } from 'src/helpers'

export const resetState = (): IAction => ({ type: CONSTANTS.RESET_STATE })

export const signInRequest = (): IAction => ({
  type: CONSTANTS.SIGN_IN_REQUEST
})

export const signInSuccess = (email: string, accessToken: string): IAction => ({
  type: CONSTANTS.SIGN_IN_SUCCESS,
  payload: { email, accessToken }
})

export const signInFailure = (error: string): IAction => ({
  type: CONSTANTS.SIGN_IN_FAILURE,
  error
})

export const signInErrorReset = (): IAction => ({
  type: CONSTANTS.SIGN_IN_RESET_ERROR
})

export const signIn = (
  userName: string,
  password: string
): ThunkAction<
  Promise<AxiosResponse<ISignInResponse>>,
  {},
  {},
  AnyAction
> => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): Promise<AxiosResponse<ISignInResponse>> => {
  try {
    dispatch(signInRequest())
    const response = await requestHttp.post<ISignInResponse>(
      urls.getSignInUrl(),
      { userName, password },
      { statusesNoErrors: [400, 401] }
    )
    const { token } = response.data.success

    dispatch(signInSuccess(userName, token))

    // tslint:disable-next-line: no-floating-promises
    AsyncStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, token)

    return response
  } catch (error) {
    dispatch(signInFailure(getResponseErrorMessage(error)))

    return error
  }
}
