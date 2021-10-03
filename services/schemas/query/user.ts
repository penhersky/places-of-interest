import { gql } from "@apollo/client";

export const AUTH_USER = gql`
  query AuthUser($id: ID!) {
    AuthUser(id: $id) {
      id
      name
      email
      image
    }
  }
`;

export const USER = gql`
  query User($id: ID!) {
    User(id: $id) {
      id
      name
      firstName
      lastName
      email
      image
      backgroundImage
      gender
      birthday
      phoneNumber
      createdAt
    }
  }
`;
