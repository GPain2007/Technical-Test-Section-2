import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TODO = gql`
  mutation addToDo($ToDoText: String!) {
    addToDo(ToDoText: $ToDoText) {
      _id
      ToDoText
      createdAt
      username
      reactionCount
      reactions {
        _id
      }
    }
  }
`;
