// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type ToDo {
    _id: ID
    ToDoText: String
    createdAt: String
    username: String
    reactionCount: Int
  }

  type Query {
    ToDos(username: String): [ToDo]
  }
`;

// export the typeDefs
module.exports = typeDefs;
