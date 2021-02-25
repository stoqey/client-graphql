import gql from 'graphql-tag';
import {OrderTypeFragment} from './order.fragment';

export const ALL_ORDERS_SUBSCRIPTION = gql`
    subscription SubOrders {
        data: onOrders {
            ...OrderTypeFragment
        }
    }
    ${OrderTypeFragment}
`;

export const MY_ORDERS_SUBSCRIPTION = gql`
    subscription SubOrders($owner: String, $time: String) {
        data: onOrders(owner: $owner, time: $time) {
            ...OrderTypeFragment
        }
    }
    ${OrderTypeFragment}
`;
