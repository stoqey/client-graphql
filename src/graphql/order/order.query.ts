import gql from 'graphql-tag';
import {OrderTypeFragment} from './order.fragment';

export const GET_MY_ORDERS = gql`
    query myOrders($owner: String!) {
        data: myOrders(owner: $owner) {
            ...OrderTypeFragment
        }
    }
    ${OrderTypeFragment}
`;

export const GET_ALL_ORDERS = gql`
    query orders {
        data: orders {
            ...OrderTypeFragment
        }
    }
    ${OrderTypeFragment}
`;
