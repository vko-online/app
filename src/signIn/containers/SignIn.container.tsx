import React, { ReactElement, useCallback, useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Title, HelperText, Button, TextInput } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { Formik, FormikBag, FormikValues } from 'formik'
import * as yup from 'yup'
import Pane from 'view-on-steroids'

import * as actions from 'src/signIn/signIn.actions'
import { MODULE_NAME } from 'src/signIn/signIn.constants'
import * as selectors from 'src/signIn/signIn.selectors'
import { useReduxDispatch } from 'src/helpers'
import { PATHS } from 'src/constants'
import { reset } from 'src/navigation'

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
})

interface Props {}
interface FormValues {
  username: string
  password: string
}
export default function SignInContainer ({}: Props): ReactElement {
  const dispatch = useReduxDispatch()

  const submit = async (values: FormValues) => {
    const response = await dispatch(actions.signIn(values.username, values.password))

    if (response.status === 200) {
      // todo: better nav reset
      reset({
        index: 1,
        routes: [
          { name: PATHS.HOME }
        ]
      })
    }
  }

  return (
    <KeyboardAvoidingView>
      <Formik
        initialValues={{
          username: '',
          password: ''
        }}
        validationSchema={schema}
        onSubmit={submit}
      >
        {({ isValid, errors, touched, values, handleSubmit, setFieldValue }) => (
          <Pane padding={20}>
            <Title>Sign in</Title>
            <TextInput
              mode='outlined'
              onChangeText={val => setFieldValue('username', val)}
              value={values.username}
              placeholder='Username'
              error={!!(touched.username && errors.username)}
            />
            {
              touched.username && errors.username ? (
                <HelperText>{errors.username}</HelperText>
              ) : null
            }
            <TextInput
              mode='outlined'
              textContentType='password'
              onChangeText={val => setFieldValue('password', val)}
              value={values.password}
              placeholder='Password'
              error={!!(touched.password && errors.password)}
            />
            {
              touched.password && errors.password ? (
                <HelperText>{errors.password}</HelperText>
              ) : null
            }
            <Button disabled={!isValid} onPress={handleSubmit}>Sign in</Button>
          </Pane>
        )}
      </Formik>
    </KeyboardAvoidingView>
  )
}
