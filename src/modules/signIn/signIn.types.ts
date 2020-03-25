import IStatusedMessage from 'src/interfaces/IStatusedMessage'

export interface IState {
  email: string
  isAuthorizing: boolean
  accessToken: string
  signInError: string
}

export interface ISignInResponse extends IStatusedMessage {
  success: {
    token: string;
  }
}

export interface ISendCodeResponse extends IStatusedMessage {
  resendCodeIn?: number
}

export type SignInFormInputsNames = 'userName' | 'password'
