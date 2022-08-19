// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    Todos: [ToDo]
    friends: [User]
  }

  type ToDo {
    _id: ID
    ToDoText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

  type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    ToDos(username: String): [ToDo]
    ToDo(_id: ID!): ToDo
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addToDo(ToDoText: String!): ToDo
    addReaction(ToDoId: ID!, reactionBody: String!): ToDo
    addFriend(friendId: ID!): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
