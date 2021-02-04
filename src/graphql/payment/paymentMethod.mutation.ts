import gql from 'graphql-tag';
import {ResTypeFragment} from '../shared';

export const CREATE_PAYMENTMETHOD_MUTATION = gql`
    mutation CreatePaymentMethod($type: String!, $name: String!, $owner: String!, $info: String!) {
        data: createPaymentMethod(type: $type, name: $name, owner: $owner, info: $info) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

export const CREATE_WITHDRAWPAYMENT_MUTATION = gql`
    mutation CreateWithdrawPayment($amount: Float!, $owner: String!, $paymentMethodId: String!) {
        data: createWithdrawPayment(
            amount: $amount
            owner: $owner
            paymentMethodId: $paymentMethodId
        ) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

export const PROCESS_PAYPAL_MUTATION = gql`
    mutation ProcessPaypalPayment($amount: Float!, $owner: String!, $orderId: String!) {
        data: processPayPal(amount: $amount, owner: $owner, orderId: $orderId) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;
