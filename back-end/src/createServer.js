const { GraphQLServer } = require('graphql-yoga');

const { prisma } = require('./generated/prisma-client');

// Resolver imports
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');

// Implements the GraphQL Schema
const resolvers = {
  Query,
  Mutation,
  User,
};

const createServer = () => (
  new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => (
      {
        ...request,
        prisma,
      }
    ),
  })
);

module.exports = createServer;
