export const resolvers = {
  Query: {
    hello: () => 'hello world with GraphQL',
    greet(root, {name}) {
      // console.log( args['name'] );
      return `Hi, ${name}!`;
    }
  }
};