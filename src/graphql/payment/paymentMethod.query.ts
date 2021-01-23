import gql from 'graphql-tag';
import { PaymentMethodTypeFragment } from './paymentMethod.fragment';

export const GET_PAYMENT_METHODS = gql`
  query GetPaymentMethods($owner: String!, $page: Float!, $limit: Float!) {
    data: paymentMethods(owner: $owner, page: $page, limit: $limit) {
      ...PaymentMethodTypeFragment
    }
  }
  ${PaymentMethodTypeFragment}
`;