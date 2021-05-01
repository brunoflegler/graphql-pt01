const { RESTDataSource } = require('apollo-datasource-rest')

class UserApi extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'http://localhost:3000'
  }

  async getUsers() {
    const users = await this.get('/users')

    return users.map(async user => ({
      ...user,
      role: await this.get(`/roles/${user.role}`),
    }))
  }

  async getUser(id) {
    return this.get(`/users/${id}`)
  }
}

module.exports = UserApi
