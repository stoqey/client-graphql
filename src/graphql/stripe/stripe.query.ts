import gql from 'graphql-tag';
import {WithdrawRequestTypeFragment} from './stripe.fragment';

export const GET_WITHDRAW_REQUESTS = gql`
    query GetWithdrawRequests($filter: String, $owner: String!, $limit: Float, $page: Float) {
        data: withdrawRequests(filter: $filter, owner: $owner, limit: $limit, page: $page) {
            ...WithdrawRequestTypeFragment
        }
    }
    ${WithdrawRequestTypeFragment}
`;
