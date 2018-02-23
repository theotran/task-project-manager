
const tasks = [
  {
    id: 1,
    taskName: "Need someone to give my dog a bath!",
    taskerUserame: "randomDude001",
    taskerEmail: "rdude@randomDude.com",
    taskerPhone: "808-999-9999",
    timeline: "ASAP",
    category: "Pet Care",
    price: "$50"
  },
  {
    id: 2,
    taskName: "Looking for a Developer.",
    taskerUserame: "biznessguy",
    taskerEmail: "somecompany@CC.com",
    taskerPhone: "808-788-9999",
    timeline: "1 month",
    category: "Development",
    price: "$10,000"
  },
];

let nextId = 3;

export const resolvers = {
  Query: {
    tasks: () => {
      return tasks;
    },
  },
  Mutation: {
    addTask: (root, args) => {
      const newTask = {
        id: nextId++,
        taskName: args.taskName,
        taskerUsername: args.taskerUsername,
        taskerEmail: args.taskerEmail,
        taskerPhone: args.taskerPhone,
        timeline: args.timeline,
        category: args.category,
        price: args.price
      };
      tasks.push(newTask);
      return newTask;
    },
  },
};
