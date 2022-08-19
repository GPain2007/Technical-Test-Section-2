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
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      ToDos {
        _id
        ToDoText
        createdAt
        reactionCount
        reactions {
          _id
          createdAt
          reactionBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      ToDos {
        _id
        ToDo
        Text
        createdAt
        reactionCount
      }
    }
  }
`;
