import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { I18N_NAMESPACES } from './constants'

// tslint:disable-next-line: no-floating-promises
i18n
  .use(initReactI18next)
  .init({
    lng: 'en',
    ns: [I18N_NAMESPACES.COMMON],
    defaultNS: I18N_NAMESPACES.COMMON,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
