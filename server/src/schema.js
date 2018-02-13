import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';

import { resolvers } from './resolvers';

const typeDefs = `
  type Channel {
     id: ID!
     name: String
  }

  type Query {
     channels: [Channel]    # "[]" means this is a list of channels
  }

  # Mutation root type, used to define all mutations.
  type Mutation {
    # Mutation to add a new channel to the list of channels, returning a a channel object
    addChannel(name: String!): Channel
  }
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
