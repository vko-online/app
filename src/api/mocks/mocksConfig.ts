import * as responsesMocks from './responsesMocks'
import { IMockConfig } from './types'

// import googleQrCodeImageUrl from '@/assets/images/googleLinkQrCode.png';

const mocksConfig: IMockConfig[] = [
  // {
  //   path: '/REST/Settings/userDetails',
  //   httpMethod: 'get',
  //   response: {
  //     status: 200,
  //     data: {
  //       success: {
  //         id: 300828,
  //         name: 'Donatas Demo co.',
  //         email: 'donatas@globalnetint.com',
  //         type: 2,
  //         wlPartnersId: 0,
  //         mainCurrency: 'EUR',
  //         accountName: '',
  //         touAgreed: '05/02/2020',
  //         subuserId: 0,
  //         accessLevel: 0,
  //         lastLoginDate: '20/02/2020 12:23:09',
  //         passwordExpiryDays: -10,
  //         phone: 'XXXXXXXX736',
  //         status: '5',
  //         mainAccountId: '300828',
  //         mainAccountName: 'Donatas Demo co.',
  //         address: 'Alloobari Phulbari Tenzing, Darjeeling, Lithuania',
  //         user2faDialCode: '+91',
  //         user2faMobileNumber: '9764503736',
  //       },
  //     },
  //   },
  // },
  {
    path: '/Account/login',
    httpMethod: 'post',
    response: {
      status: 200,
      data: {
        success: {
          token: 'my-token-is-ok'
        }
      }
    }
  },
  ...new Array(300).fill(0).map(
    (_, index): IMockConfig => ({
      path: `payments/${index}`,
      replyOnce: true,
      httpMethod: 'get',
      response: {
        status: 200,
        data: {
          result: {
            id: 'sdf0',
            type: 'transfer',
            accountFrom: {
              currency: 'GBP'
            },
            accountTo: {
              currency: 'EUR'
            },
            date: '2019-12-24T23:00:00.996Z',
            status: 'APPROVED',
            amount: 50,
            received: 47.5
          }
        }
      }
    })
  )
  // {
  //   path: 'transfers/3434/confirm',
  //   replyOnce: true,
  //   httpMethod: 'patch',
  //   response: {
  //     status: 402,
  //     data: {
  //       status: 1,
  //       message: 'Invalid code',
  //     },
  //   },
  // },
]

export default mocksConfig
