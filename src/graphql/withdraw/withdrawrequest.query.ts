import gql from 'graphql-tag';
import {WithdrawRequestTypeFragment} from './withdrawrequest.fragment';

export const GET_WITHDRAW_REQUESTS = gql`
    query GetWithdrawRequests($filter: String, $owner: String!, $limit: Float, $page: Float) {
        data: withdrawRequests(filter: $filter, owner: $owner, limit: $limit, page: $page) {
            ...WithdrawRequestTypeFragment
        }
    }
    ${WithdrawRequestTypeFragment}
`;

export const ADMIN_GET_ALL_WITHDRAW_REQUESTS = gql`
    query AdminGetAllWithdrawRequests($filter: String, $limit: Float, $page: Float) {
        data: allWithdrawRequests(filter: $filter, limit: $limit, page: $page) {
            ...WithdrawRequestTypeFragment
        }
    }
    ${WithdrawRequestTypeFragment}
`;
