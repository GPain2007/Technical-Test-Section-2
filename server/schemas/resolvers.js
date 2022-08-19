const { User, ToDo } = require("../models");

const resolvers = {
  Query: {
    ToDos: async () => {
      return ToDo.find().sort({ createdAt: -1 });
    },
  },
};

module.exports = resolvers;
