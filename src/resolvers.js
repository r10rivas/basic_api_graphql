import tasks from "./sample_resource";

export const resolvers = {
  Query: {
    hello: () => 'hello world with GraphQL',
    greet(root, {name}) {
      // console.log( args['name'] );
      return `Hi, ${name}!`;
    },
    tasks() {
      return tasks;
    },
  },
  Mutation: {
    createTask(_, {input}) {
      input._id = tasks.length;
      tasks.push(input);
      return input;
    }
  }
};