import React, { ReactElement, useCallback } from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { useSelector } from 'react-redux'

import * as actions from 'src/core/core.actions'
import * as selectors from 'src/core/core.selectors'

import ErrorCancel from 'src/assets/images/ErrorCancel-Image.svg'
import { useReduxDispatch } from 'src/helpers'

export default function ServerError (): ReactElement | null {
  const dispatch = useReduxDispatch()
  const serverError = useSelector(selectors.getServerError)
  const onClickDismiss = useCallback((): void => {
    dispatch(actions.resetServerError())
  }, [dispatch])

  if (!serverError) return null

  const errorDescription = serverError.type === 'text' ? serverError.data : ''

  return (
    <SafeAreaView>
      <ErrorCancel />
      <Text>{errorDescription}</Text>
      <Button onPress={onClickDismiss} title='Dismiss' />
    </SafeAreaView>
  )
}
