const MODULE_NAME = 'Account'

// eslint-disable-next-line
export const getSignInUrl = () => `${MODULE_NAME}/login`

export const getSignOutUrl = (): string => `${MODULE_NAME}/logout`

export const getPasswordResetEmailSendUrl = (): string =>
  `${MODULE_NAME}/forgotPassword`

export const getAccountBalanceUrl = (): string => `${MODULE_NAME}/balance`

export const getAccountDetailsUrl = (): string => `${MODULE_NAME}/designated`
