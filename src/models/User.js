// import JwtDecode from 'jwt-decode'
var jwtDecode = require('jwt-decode')

export default class User {
  static from (token) {
    try {
      let obj = jwtDecode(token)
      debugger
      return new User(obj)
    } catch (_) {
      return null
    }
  }
  // eslint-disable-next-line
  constructor ({ user_id, admin, email }) {
    // eslint-disable-next-line
    this.id = user_id 
    this.admin = admin
    this.email = email
    debugger
  }

  get isAdmin () {
    return this.admin
  }
}
