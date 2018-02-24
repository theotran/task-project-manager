export const typeDefs = `

type Task {
  id: ID!
  taskName: String
  taskerUsername: String
  taskerEmail: String
  taskerPhone: String
  timeline: String
  category: String
  price: String
}

type Query {
  tasks: [Task]
}
`;
