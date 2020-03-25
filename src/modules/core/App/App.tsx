import React, { useEffect, useCallback, ReactElement } from 'react'
import { ActivityIndicator } from 'react-native'
import { useSelector } from 'react-redux'

import * as actions from 'src/modules/core/core.actions'
import * as selectors from 'src/modules/core/core.selectors'
import { PATHS, LOCAL_STORAGE_KEYS } from 'src/constants'
import { ServerError } from '../containers'

import { useReduxDispatch } from 'src/helpers'
import { navigate, reset } from 'src/navigation'

export default function Root (): ReactElement | null {
  const dispatch = useReduxDispatch()
  const isAuthenticated = useSelector(selectors.getIsAuthenticated)
  const isAuthLoading = useSelector(selectors.getIsAuthLoading)
  const serverError = useSelector(selectors.getServerError)
  const initialize = useCallback(() => {
    dispatch(actions.setAuthLoading())
  }, [dispatch])

  useEffect((): void => {
    initialize()
  }, [initialize])

  if (serverError) {
    return <ServerError />
  }
  if (isAuthLoading) {
    return <ActivityIndicator />
  }
  if (isAuthenticated) {
    reset({
      index: 1,
      routes: [
        { name: PATHS.HOME }
      ]
    })
  } else {
    reset({
      index: 1,
      routes: [
        { name: PATHS.SIGN_IN }
      ]
    })
  }
  return null
}
