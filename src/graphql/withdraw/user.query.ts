import gql from 'graphql-tag';
import {WithdrawRequestTypeFragment} from './withdrawrequest.fragment';

export const GET_WITHDRAW_REQUEST = gql`
    query GetWithdrawRequests($filter: String, $owner: String!, $limit: Float, $page: Float) {
        data: withdrawRequests(filter: $filter, owner: $owner, limit: $limit, page: $page) {
            ...WithdrawRequestTypeFragment
        }
    }
    ${WithdrawRequestTypeFragment}
`;