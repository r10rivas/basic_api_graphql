import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    hello: String
    greet(name: String): String
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
