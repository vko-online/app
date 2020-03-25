const MODULE_NAME = 'auth'

export const getRefreshUrl = (): string => `${MODULE_NAME}/refresh`

export const getLoginUrl = (): string => `${MODULE_NAME}/login`

export const getLogoutUrl = (): string => `${MODULE_NAME}/logout`
