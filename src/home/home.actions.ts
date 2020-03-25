
import IAction from 'src/interfaces/IAction'
import * as CONSTANTS from './home.constants'

export const resetState = (): IAction => ({ type: CONSTANTS.RESET_STATE })
