import {
  createStore,
  Store,
  applyMiddleware,
  compose,
  combineReducers,
  Reducer
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {
  reducer as rootReducer,
  MODULE_NAME as CORE_MODULE_NAME,
  initialState as coreInitialState
} from 'src/modules/core'
import {
  reducer as signInReducer,
  MODULE_NAME as SIGN_IN_MODULE_NAME
} from 'src/modules/signIn'
import {
  reducer as homeReducer,
  MODULE_NAME as HOME_MODULE_NAME
} from 'src/modules/home'

const createRootReducer = (): Reducer => {
  return combineReducers({
    [CORE_MODULE_NAME]: rootReducer,
    [SIGN_IN_MODULE_NAME]: signInReducer,
    [HOME_MODULE_NAME]: homeReducer
  })
}

export default (): Store => {
  const composer: Function =
    process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
  const store: Store = createStore(
    createRootReducer(),
    {
      [CORE_MODULE_NAME]: coreInitialState
    },
    composer(applyMiddleware(thunk))
  )

  return store
}
