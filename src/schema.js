import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    greet(name: String!): String
    users: [User]
  }

  type User {
    _id: ID
    name: String!
    lastName: String!
    age: Int!
  }

  type Mutation {
    createUser(input: userInput): User
    updateUser(_id: ID, input: updateUserInput) : User
    deleteUser(_id: ID): User
  }

  input userInput {
    name: String!
    lastName: String!
    age: Int!
  }

  input updateUserInput {
    name: String
    lastName: String
    age: Int
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
