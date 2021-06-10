import gql from 'graphql-tag';
import {PaymentMethodTypeFragment} from './paymentMethod.fragment';

export const GET_PAYMENT_METHODS = gql`
    query GetPaymentMethods($filter: String, $owner: String!, $page: Float, $limit: Float) {
        data: paymentMethods(filter: $filter, owner: $owner, page: $page, limit: $limit) {
            ...PaymentMethodTypeFragment
        }
    }
    ${PaymentMethodTypeFragment}
`;
