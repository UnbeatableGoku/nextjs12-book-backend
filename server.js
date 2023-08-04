const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./src/schema/book-schema-');
const { resolvers } = require('./src/resolver/book-resolver');

const server = new ApolloServer({ typeDefs, resolvers });

const initiatServer = async () => {
  const { url } = await server.listen();
  console.log('connected to ', url);
};

initiatServer();
