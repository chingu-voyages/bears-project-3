import gql from 'graphql-tag';

export const REGISTER_USER = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    register(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export const LOGIN = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;
