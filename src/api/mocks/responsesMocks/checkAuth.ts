export default {
  success: {
    status: 200,
    data: {
      status: 1,
      message: 'Success',
      userData: {
        name: 'John Smith'
      }
    }
  },
  failure: {
    status: 301,
    data: {
      status: 0,
      message: 'Unauthorized'
    }
  }
}
