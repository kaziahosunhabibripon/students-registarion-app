const { ApolloServer, gql } = require('apollo-server');
const GraphQLJSON = require('graphql-type-json');
const { GraphQLScalarType, Kind } = require('graphql');
const typeDefs = gql`
  scalar JSON
  type MyObject{
    myFiled: JSON
  }
  type Query {
    objects:[MyObject]
  }
`

const resolvers = {
  JSON: GraphQLJSON
 
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })
export default apolloServer.createHandler({ path: '/api/graphql' })