const { ApolloServer } = require('apollo-server')
const userSchema = require('./schema/user.graphql')
const userResolver = require('./resolvers/user')
const UserApi = require('./datasources/user')

const typeDefs = [userSchema]
const resolvers = [userResolver]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      userApi: new UserApi(),
    }
  },
})

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))
