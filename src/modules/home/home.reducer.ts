import { IState } from './home.types'
import * as CONSTANTS from './home.constants'
import IAction from 'src/interfaces/IAction'

const initialState: IState = {
}

export default (state: IState = initialState, action: IAction): IState => {
  switch (action.type) {
    case CONSTANTS.RESET_STATE:
      return initialState
    default:
      return state
  }
}
