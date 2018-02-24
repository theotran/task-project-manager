import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  type Task {
     id: ID!
    taskName: String!
    taskerUsername: String
    taskerEmail: String
    taskerPhone: String
    timeline: String
    category: String
    price: String
  }

  type Query {
     tasks: [Task]    # "[]" means this is a list of tasks
  }

  # Mutation root type, used to define all mutations.
  type Mutation {
    # Mutation to add a new task to the list of tasks, returning a task object
    addTask(
      taskName: String!
      taskerUsername: String
      taskerEmail: String
      taskerPhone: String
      timeline: String
      category: String
      price: String
    ): Task
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
