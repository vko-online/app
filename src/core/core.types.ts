export interface IServerError {
  type: string
  data: string
}
export interface IState {
  isAuthenticated: boolean
  isAuthLoading: boolean
  isLoggingOut: boolean
  serverError: IServerError | null
}
