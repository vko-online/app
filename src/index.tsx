import React from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider, Provider as RNPProvider, Portal } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationRef } from './navigation'
import rootStore from './store'
import defaultTheme from 'src/themes/defaultTheme'
import './i18n'
import serverErrorInterceptor from './api/serverErrorInterceptor'
import { requestHttp } from './api'
import { PATHS } from './constants'

import { Root } from 'src/modules/core'
import { SignInContainer } from 'src/modules/signIn'
import { HomeContainer } from 'src/modules/home'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

export default function () {
  return (
    <Provider store={rootStore}>
      <RNPProvider>
        <ThemeProvider theme={defaultTheme}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
              <Stack.Screen name={PATHS.ROOT} component={Root} />
              <Stack.Screen name={PATHS.SIGN_IN} component={SignInContainer} />
              <Stack.Screen name={PATHS.HOME} component={HomeContainer} />
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </RNPProvider>
    </Provider>
  )
}

requestHttp.interceptors.response.use(
  undefined,
  serverErrorInterceptor(rootStore)
)
