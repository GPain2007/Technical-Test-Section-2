import { gql } from "@apollo/client";

export const QUERY_TODOS = gql`
  query ToDos($username: String) {
    ToDos(username: $username) {
      _id
      ToDoText
      createdAt
      username
      reactionCount
      reactions {
        _id
        createdAt
        username
        reactionBody
      }
    }
  }
`;
