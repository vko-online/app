import React from 'react'
import { NavigationContainerRef, EventListenerCallback } from '@react-navigation/native'

export const navigationRef = React.createRef<NavigationContainerRef>()

export function navigate (name: string, params?: object) {
  navigationRef.current?.navigate(name, params)
}

// todo: add proper types
export function reset (state: any) {
  navigationRef.current?.reset(state)
}

export function goBack () {
  navigationRef.current?.goBack()
}

export function canGoBack (): boolean | undefined {
  return navigationRef.current?.canGoBack()
}

export function setParams (params: object | undefined) {
  return navigationRef.current?.setParams(params)
}

// todo: add proper event map types
export function addListener (type: any, callback: any) {
  return navigationRef.current?.addListener(type, callback)
}

export function removeListener (params: any, callback: any) {
  return navigationRef.current?.removeListener(params, callback)
}
