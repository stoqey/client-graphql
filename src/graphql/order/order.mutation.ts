import gql from 'graphql-tag';
import {ResTypeFragment} from '../shared';

export const CREATE_ORDER_MUTATION = gql`
    mutation CreateOrder(
        $stopPrice: Float
        $price: Float
        $type: String!
        $size: Float!
        $action: String!
        $owner: String!
        $symbol: String
    ) {
        data: createPaymentMethod(
            stopPrice: $stopPrice
            price: $price
            type: $type
            size: $size
            action: $action
            owner: $owner
            symbol: $symbol
        ) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;

export const CANCEL_ORDER_MUTATION = gql`
    mutation CancelOrder($id: String!) {
        data: cancelOrder(id: $id) {
            ...ResTypeFragment
        }
    }
    ${ResTypeFragment}
`;
