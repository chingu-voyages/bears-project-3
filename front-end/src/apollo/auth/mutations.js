import { gql } from 'apollo-boost';

const loginUser = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      AuthToken
    }
  }
`;

export { loginUser };
