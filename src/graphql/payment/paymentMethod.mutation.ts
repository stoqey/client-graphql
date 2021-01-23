import gql from 'graphql-tag';
import { ResTypeFragment } from '../shared';

export const CREATE_PAYMENTMETHOD_MUTATION = gql`
  mutation CreatePaymentMethod($type: String!, $name: String!, $owner: String!, $info: String!) {
    data: createPaymentMethod(type: $type, name: $name, owner: $owner, info: $info) {
      ...ResTypeFragment
    }
  }
  ${ResTypeFragment}
`;
