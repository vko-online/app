export default {
  success: {
    status: 202,
    data: {
      status: 1,
      message: 'Success'
    }
  },
  failure: {
    status: 422,
    data: {
      status: 0,
      message: 'Email or password entered incorrectly'
    }
  }
}
