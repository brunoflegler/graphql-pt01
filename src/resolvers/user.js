const resolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.userApi.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.userApi.getUser(id),
  },
}

module.exports = resolvers
