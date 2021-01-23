import gql from 'graphql-tag';
import { LoginResponseTypeFragment } from './user.fragment';

export const LOGIN_MUTATION = gql`
  mutation Login($password: String!, $email: String!) {
    data: login(password: $password, email: $email) {
      ...LoginResponseTypeFragment
    }
  }
  ${LoginResponseTypeFragment}
`;

export const REGISTER_MUTATION = gql`
  mutation Register($user: RegisterArgs!) {
    data: register(user: $user) {
      ...LoginResponseTypeFragment
    }
  }
  ${LoginResponseTypeFragment}
`;
