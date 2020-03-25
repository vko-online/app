import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

export type ReduxDispatch = ThunkDispatch<{}, {}, AnyAction>

export default function useReduxDispatch (): ReduxDispatch {
  return useDispatch<ReduxDispatch>()
}
