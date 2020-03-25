// import storage from './storage';

export default (permission: string): boolean => {
  // add here a get permission function (JWT or cookie)
  if (!permission) {
    return false
  }

  return true
}
